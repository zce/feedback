/**
 * 后台HTTP服务
 */
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

import config from './config'
import * as storage from './storage'
import { main as logger } from './logger'

const stampFormat = '\\w{' + config.stamp_length + '}'
const staticDir = path.resolve(config.app.path, 'core.asar/www')

const app = express()

app.set('view engine', 'xtpl')
app.set('views', staticDir)

app.use(express.static(staticDir))

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.set('X-Powered-By', 'WEDN.NET')
  next()
})

app.use((req, res, next) => {
  // 注入请求客户端IP
  if (process.env.NODE_ENV === 'production') {
    req.clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
  } else {
    // 测试允许多次提交
    req.clientIp = new Date().getTime()
  }
  // req.connection.socket.remoteAddress || '::1'
  // 注入是否本地请求
  req.isLocal = req.clientIp === '127.0.0.1' || req.clientIp === config.server_ip

  next()
})

/**
 * GET /:stamp
 */
app.get(`/:stamp(${stampFormat})`, (req, res) => {
  const { stamp } = req.params
  const data = storage.get(stamp)

  if (!data || data.status !== config.status_keys.rating) {
    res.sendStatus(404)
    return false
  }

  data.answer_options = config.answer_options

  res.render('rating', data)
})

/**
 * POST /r/:stamp
 */
app.post(`/:stamp(${stampFormat})`, (req, res) => {
  if (req.isLocal && !config.allow_admin_rating) {
    res.render('rated', { error: true, message: '您是管理员，不允许参加反馈！' })
    return false
  }

  const { stamp } = req.params
  const data = storage.get(stamp)

  if (!data) {
    res.sendStatus(404)
    return false
  }

  if (data.status !== config.status_keys.rating) {
    res.render('rated', { error: true, message: '反馈已经结束，不可以继续提交了！' })
    return false
  }

  if (data.receives[req.clientIp] && !config.allow_student_repeat) {
    res.render('rated', { error: true, message: '你已经提交过了，不可以重复提交！' })
    return false
  }

  // 存储
  const info = convert(stamp, req.body)
  if (!info) {
    res.render('rated', { error: true, stamp: stamp, message: '同学，请正确并完整填写表单！' })
    return false
  }

  data.receives[req.clientIp] = info
  data.receives_count++

  storage.set(stamp, data)

  res.render('rated', { error: false, message: '谢谢你的帮助，我们会及时将情况反馈给相关人员！' })
})

function convert (stamp, body) {
  const targets = storage.get(stamp).targets
  if (!(body.name.trim() && body.hash.trim())) return null
  const marksKeys = Object.keys(body).filter(k => k && k !== 'name' && k !== 'hash' && k !== 'note')
  const validated = targets.length === marksKeys.length
  if (!validated) return null
  const marks = {}
  marksKeys.forEach(k => { marks[k] = parseInt(body[k], 10) })
  const feedback = {
    name: body.name.trim(),
    hash: body.hash.trim(),
    note: body.note.trim(),
    marks: marks
  }

  return feedback
}

let server

function listen (callback) {
  server = app.listen(config.server.port, config.server.address, error => {
    if (error) {
      server = null
      return logger.fatal(error)
    }
    const addr = server.address()
    config.server.port = addr.port
    config.server.address = addr.address
    console.log(`server run @ http://${addr.address}:${addr.port}/`)
    typeof callback === 'function' && callback()
  })
}

export function start (callback) {
  // 启动服务
  if (server && server.listening) {
    return server.close(listen.bind(server, callback))
  }
  listen(callback)
}
