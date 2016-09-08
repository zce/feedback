import path from 'path'
import electron from 'electron'
import config from './config'
import * as option from './option'
import * as utils from './utils'
import * as storage from './storage'
import * as server from './server'
import { renderer as logger } from './logger'

import './menu'
import './extlink'

const { dialog, BrowserWindow } = electron.remote

export default function Plugin () { }

Plugin.install = function (Vue, options) {
  Vue.prototype.$electron = electron
  Vue.prototype.$config = config
  Vue.prototype.$option = option
  Vue.prototype.$logger = logger
  Vue.prototype.$utils = utils
  Vue.prototype.$storage = storage
  Vue.prototype.$server = server
  Vue.prototype.$db = global.require(path.resolve(config.app.path, 'data.asar'))
  Vue.prototype.$dialog = {
    info: (title, content) => {
      content = content || title
      title = content ? electron.remote.app.getName() : title
      dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
        type: 'info',
        buttons: ['OK'],
        defaultId: 0,
        title: title,
        message: title,
        detail: content,
        icon: null,
        cancelId: -1,
        noLink: true
      })
    },
    error: (title, content) => {
      content = content || title
      title = content ? electron.remote.app.getName() : title
      dialog.showErrorBox(title, content)
    }
  }

  Vue.filter('toFixed', (value, length) => parseFloat(value).toFixed(length || 2))
  Vue.filter('trim', { read: v => v && v.trim(), write: v => v && v.trim() })
  Vue.config.lang = option.get('lang', 'zh-CN')
}
