import electron from 'electron'
import config from './config'
import * as utils from './utils'
import * as storage from './storage'

const dialog = electron.remote.dialog
const BrowserWindow = electron.remote.BrowserWindow

// import * as server from './server'
// server.start()

export default function Plugin () { }

Plugin.install = function (Vue, options) {
  Vue.prototype.$electron = electron
  Vue.prototype.$config = config
  Vue.prototype.$utils = utils
  Vue.prototype.$storage = storage
  Vue.prototype.$server = server

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
}

