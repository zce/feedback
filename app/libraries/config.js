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
  meta: { type: pkg.name, version: pkg.version },
  sign: `© ${new Date().getFullYear()} WEDN.NET`,
  root: path.resolve(config.app.path, '..', 'data'),
  ext: '.dat'
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
  rated: '统计完成'
}

// answeroptions
config.answer_options = {
  0: { short: 'A', full: '非常清楚', ratio: 3, color: '#5cb85c' },
  1: { short: 'B', full: '基本清楚', ratio: 2, color: '#5bc0de' },
  2: { short: 'C', full: '有点模糊', ratio: 1, color: '#f0ad4e' },
  3: { short: 'D', full: '几乎不懂', ratio: -1, color: '#d9534f' }
}

config.score_options = {
  base: 25,
  offset: 25,
  important: 1.5,
  normal: 1
}

export default Object.assign(config, {
  class_format: /^.+?(传智|黑马).+?(基础|就业)\d{1,5}期（\d{8}(面授|双元)）\s?$/,
  allow_admin_rating: true,
  allow_student_repeat: false,
  stamp_length: 8
})
