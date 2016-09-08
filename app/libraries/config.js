import path from 'path'
import electron from 'electron'
import pkg from '../package.json'

const app = electron.app || electron.remote.app

const config = {}

// app info
config.app = {
  name: app.getName(),
  path: app.getAppPath(),
  version: pkg.version,
  updated: pkg.updated,
  description: pkg.description
}

// storage config
config.storage = {
  root: path.resolve(config.app.path, '..', 'data'),
  ext: '.dat',
  sign: `© ${new Date().getFullYear()} WEDN.NET`
}

// log4js appender config
config.log4js = {
  type: 'file',
  filename: path.resolve(config.app.path, '..', pkg.name + '.log')
}

// server config
config.server = {
  address: '',
  port: 20810
}

// status keys
config.status_keys = {
  initial: '尚未开始统计',
  rating: '统计中',
  rated: '统计完成',
  sending: '邮件发送中',
  send: '邮件发送完成'
}

// answeroptions
config.answer_options = {
  0: { short: 'A', full: 'A. 非常清楚', ratio: 1.0 },
  1: { short: 'B', full: 'B. 基本清楚', ratio: 0.8 },
  2: { short: 'C', full: 'C. 有点模糊', ratio: 0.5 },
  3: { short: 'D', full: 'D. 几乎不懂', ratio: 0.1 }
}

export default Object.assign(config, {
  allow_admin_rating: true,
  allow_student_repeat: false,
  stamp_length: 8
})
