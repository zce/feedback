module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n// process.env.NODE_ENV = process.env.NODE_ENV || 'production'\n__webpack_require__(2);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxvQkFBUSxDQUFSIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwcm9jZXNzLmVudi5OT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdwcm9kdWN0aW9uJ1xucmVxdWlyZSgnLi9iYWNrZ3JvdW5kcycpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9tYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _electron = __webpack_require__(3);\n\nvar _window = __webpack_require__(4);\n\nvar _window2 = _interopRequireDefault(_window);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// This is main process of Electron, started as first thing when your\n// app starts. This script is running through entire life of your application.\n// It doesn't have any windows which you can see on screen, but we can open\n// window from here.\n\nvar mainWindow = void 0;\n// import setAppMenu from './menu'\n\n\nvar shouldQuit = _electron.app.makeSingleInstance(function (commandLine, workingDirectory) {\n  // Someone tried to run a second instance, we should focus our window.\n  if (mainWindow) {\n    if (mainWindow.isMinimized()) mainWindow.restore();\n    mainWindow.focus();\n  }\n});\n\nif (shouldQuit) {\n  _electron.app.quit();\n}\n\n_electron.app.on('ready', function () {\n  // setAppMenu()\n  mainWindow = (0, _window2.default)('main', {\n    // backgroundColor: 'transparent',\n    // transparent: true,\n    x: 0,\n    y: 0,\n    minWidth: 1200,\n    minHeight: 720,\n    width: 1200,\n    height: 720,\n    useContentSize: true,\n    frame: false\n  });\n  if (false) {\n    mainWindow.loadURL('file://' + __dirname + '/index.html');\n  } else {\n    mainWindow.loadURL('http://localhost:2080/index.html');\n    mainWindow.webContents.openDevTools({ detach: false });\n    // 载入开发工具\n    __webpack_require__(7).install();\n    __webpack_require__(8).install();\n  }\n});\n\n_electron.app.on('window-all-closed', function () {\n  _electron.app.quit();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYmFja2dyb3VuZHMvaW5kZXguanM/ZmU4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBOztBQUVBOzs7Ozs7QUFQQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFJLG1CQUFKO0FBSEE7OztBQUtBLElBQU0sYUFBYSxjQUFJLGtCQUFKLENBQXVCLFVBQUMsV0FBRCxFQUFjLGdCQUFkLEVBQW1DO0FBQzNFO0FBQ0EsTUFBSSxVQUFKLEVBQWdCO0FBQ2QsUUFBSSxXQUFXLFdBQVgsRUFBSixFQUE4QixXQUFXLE9BQVg7QUFDOUIsZUFBVyxLQUFYO0FBQ0Q7QUFDRixDQU5rQixDQUFuQjs7QUFRQSxJQUFJLFVBQUosRUFBZ0I7QUFDZCxnQkFBSSxJQUFKO0FBQ0Q7O0FBRUQsY0FBSSxFQUFKLENBQU8sT0FBUCxFQUFnQixZQUFNO0FBQ3BCO0FBQ0EsZUFBYSxzQkFBYSxNQUFiLEVBQXFCO0FBQ2hDO0FBQ0E7QUFDQSxPQUFHLENBSDZCO0FBSWhDLE9BQUcsQ0FKNkI7QUFLaEMsY0FBVSxJQUxzQjtBQU1oQyxlQUFXLEdBTnFCO0FBT2hDLFdBQU8sSUFQeUI7QUFRaEMsWUFBUSxHQVJ3QjtBQVNoQyxvQkFBZ0IsSUFUZ0I7QUFVaEMsV0FBTztBQVZ5QixHQUFyQixDQUFiO0FBWUEsTUFBSSxLQUFKLEVBQTJDO0FBQ3pDLGVBQVcsT0FBWCxhQUE2QixTQUE3QjtBQUNELEdBRkQsTUFFTztBQUNMLGVBQVcsT0FBWCxDQUFtQixrQ0FBbkI7QUFDQSxlQUFXLFdBQVgsQ0FBdUIsWUFBdkIsQ0FBb0MsRUFBRSxRQUFRLEtBQVYsRUFBcEM7QUFDQTtBQUNBLHdCQUFRLENBQVIsRUFBbUIsT0FBbkI7QUFDQSx3QkFBUSxDQUFSLEVBQXdCLE9BQXhCO0FBQ0Q7QUFDRixDQXZCRDs7QUF5QkEsY0FBSSxFQUFKLENBQU8sbUJBQVAsRUFBNEIsWUFBTTtBQUNoQyxnQkFBSSxJQUFKO0FBQ0QsQ0FGRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyBtYWluIHByb2Nlc3Mgb2YgRWxlY3Ryb24sIHN0YXJ0ZWQgYXMgZmlyc3QgdGhpbmcgd2hlbiB5b3VyXG4vLyBhcHAgc3RhcnRzLiBUaGlzIHNjcmlwdCBpcyBydW5uaW5nIHRocm91Z2ggZW50aXJlIGxpZmUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbi8vIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgd2luZG93cyB3aGljaCB5b3UgY2FuIHNlZSBvbiBzY3JlZW4sIGJ1dCB3ZSBjYW4gb3BlblxuLy8gd2luZG93IGZyb20gaGVyZS5cblxuaW1wb3J0IHsgYXBwIH0gZnJvbSAnZWxlY3Ryb24nXG4vLyBpbXBvcnQgc2V0QXBwTWVudSBmcm9tICcuL21lbnUnXG5pbXBvcnQgY3JlYXRlV2luZG93IGZyb20gJy4vd2luZG93J1xuXG5sZXQgbWFpbldpbmRvd1xuXG5jb25zdCBzaG91bGRRdWl0ID0gYXBwLm1ha2VTaW5nbGVJbnN0YW5jZSgoY29tbWFuZExpbmUsIHdvcmtpbmdEaXJlY3RvcnkpID0+IHtcbiAgLy8gU29tZW9uZSB0cmllZCB0byBydW4gYSBzZWNvbmQgaW5zdGFuY2UsIHdlIHNob3VsZCBmb2N1cyBvdXIgd2luZG93LlxuICBpZiAobWFpbldpbmRvdykge1xuICAgIGlmIChtYWluV2luZG93LmlzTWluaW1pemVkKCkpIG1haW5XaW5kb3cucmVzdG9yZSgpXG4gICAgbWFpbldpbmRvdy5mb2N1cygpXG4gIH1cbn0pXG5cbmlmIChzaG91bGRRdWl0KSB7XG4gIGFwcC5xdWl0KClcbn1cblxuYXBwLm9uKCdyZWFkeScsICgpID0+IHtcbiAgLy8gc2V0QXBwTWVudSgpXG4gIG1haW5XaW5kb3cgPSBjcmVhdGVXaW5kb3coJ21haW4nLCB7XG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIC8vIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBtaW5XaWR0aDogMTIwMCxcbiAgICBtaW5IZWlnaHQ6IDcyMCxcbiAgICB3aWR0aDogMTIwMCxcbiAgICBoZWlnaHQ6IDcyMCxcbiAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcbiAgICBmcmFtZTogZmFsc2VcbiAgfSlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke19fZGlybmFtZX0vaW5kZXguaHRtbGApXG4gIH0gZWxzZSB7XG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKCdodHRwOi8vbG9jYWxob3N0OjIwODAvaW5kZXguaHRtbCcpXG4gICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoeyBkZXRhY2g6IGZhbHNlIH0pXG4gICAgLy8g6L295YWl5byA5Y+R5bel5YW3XG4gICAgcmVxdWlyZSgnZGV2dHJvbicpLmluc3RhbGwoKVxuICAgIHJlcXVpcmUoJ3Z1ZS1kZXZ0b29scycpLmluc3RhbGwoKVxuICB9XG59KVxuXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICBhcHAucXVpdCgpXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvYmFja2dyb3VuZHMvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = require(\"electron\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiPzY5MjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJlbGVjdHJvblwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _fs = __webpack_require__(5);\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _path = __webpack_require__(6);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _electron = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar dir = _electron.app.getPath('userData'); // This helper remembers the size and position of your windows (and restores\n// them in that place after app relaunch).\n// Can be used for more than one window, just construct many\n// instances of it and give each different name.\n\nexports.default = function (name, options) {\n  var stateStoreFile = _path2.default.join(dir, 'window-state-' + name + '.json');\n  var defaultSize = {\n    width: options.width,\n    height: options.height\n  };\n  var state = {};\n  var win = void 0;\n\n  var restore = function restore() {\n    try {\n      return Object.assign({}, defaultSize, JSON.parse(_fs2.default.readFileSync(stateStoreFile)));\n    } catch (err) {\n      return Object.assign({}, defaultSize);\n    }\n  };\n\n  var getCurrentState = function getCurrentState() {\n    var position = win.getPosition();\n    var size = defaultSize.useContentSize ? win.getContentSize() : win.getSize();\n    return { x: position[0], y: position[1], width: size[0], height: size[1] };\n  };\n\n  var windowWithinBounds = function windowWithinBounds(windowState, bounds) {\n    return windowState.x >= bounds.x && windowState.y >= bounds.y && windowState.x + windowState.width <= bounds.x + bounds.width && windowState.y + windowState.height <= bounds.y + bounds.height;\n  };\n\n  var resetToDefaults = function resetToDefaults(windowState) {\n    var bounds = _electron.screen.getPrimaryDisplay().bounds;\n    return Object.assign({}, defaultSize, {\n      x: (bounds.width - defaultSize.width) / 2,\n      y: (bounds.height - defaultSize.height) / 2\n    });\n  };\n\n  var ensureVisibleOnSomeDisplay = function ensureVisibleOnSomeDisplay(windowState) {\n    var visible = _electron.screen.getAllDisplays().some(function (display) {\n      return windowWithinBounds(windowState, display.bounds);\n    });\n    if (!visible) {\n      return resetToDefaults(windowState);\n    }\n    return windowState;\n  };\n\n  var saveState = function saveState() {\n    if (!win.isMinimized() && !win.isMaximized()) {\n      Object.assign(state, getCurrentState());\n    }\n    _fs2.default.writeFileSync(stateStoreFile, JSON.stringify(state), 'utf8');\n  };\n\n  state = ensureVisibleOnSomeDisplay(restore());\n\n  win = new _electron.BrowserWindow(Object.assign({}, options, state));\n\n  win.on('close', saveState);\n\n  return win;\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYmFja2dyb3VuZHMvd2luZG93LmpzP2JjYjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBLElBQU0sTUFBTSxjQUFJLE9BQUosQ0FBWSxVQUFaLENBQVosQyxDQVBBO0FBQ0E7QUFDQTtBQUNBOztrQkFNZSxVQUFDLElBQUQsRUFBTyxPQUFQLEVBQW1CO0FBQ2hDLE1BQU0saUJBQWlCLGVBQUssSUFBTCxDQUFVLEdBQVYsRUFBZSxrQkFBa0IsSUFBbEIsR0FBeUIsT0FBeEMsQ0FBdkI7QUFDQSxNQUFNLGNBQWM7QUFDbEIsV0FBTyxRQUFRLEtBREc7QUFFbEIsWUFBUSxRQUFRO0FBRkUsR0FBcEI7QUFJQSxNQUFJLFFBQVEsRUFBWjtBQUNBLE1BQUksWUFBSjs7QUFFQSxNQUFNLFVBQVUsU0FBVixPQUFVLEdBQU07QUFDcEIsUUFBSTtBQUNGLGFBQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixXQUFsQixFQUErQixLQUFLLEtBQUwsQ0FBVyxhQUFHLFlBQUgsQ0FBZ0IsY0FBaEIsQ0FBWCxDQUEvQixDQUFQO0FBQ0QsS0FGRCxDQUVFLE9BQU8sR0FBUCxFQUFZO0FBQ1osYUFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFdBQWxCLENBQVA7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUM1QixRQUFNLFdBQVcsSUFBSSxXQUFKLEVBQWpCO0FBQ0EsUUFBTSxPQUFPLFlBQVksY0FBWixHQUE2QixJQUFJLGNBQUosRUFBN0IsR0FBb0QsSUFBSSxPQUFKLEVBQWpFO0FBQ0EsV0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFULENBQUwsRUFBa0IsR0FBRyxTQUFTLENBQVQsQ0FBckIsRUFBa0MsT0FBTyxLQUFLLENBQUwsQ0FBekMsRUFBa0QsUUFBUSxLQUFLLENBQUwsQ0FBMUQsRUFBUDtBQUNELEdBSkQ7O0FBTUEsTUFBTSxxQkFBcUIsU0FBckIsa0JBQXFCLENBQUMsV0FBRCxFQUFjLE1BQWQsRUFBeUI7QUFDbEQsV0FBTyxZQUFZLENBQVosSUFBaUIsT0FBTyxDQUF4QixJQUNMLFlBQVksQ0FBWixJQUFpQixPQUFPLENBRG5CLElBRUwsWUFBWSxDQUFaLEdBQWdCLFlBQVksS0FBNUIsSUFBcUMsT0FBTyxDQUFQLEdBQVcsT0FBTyxLQUZsRCxJQUdMLFlBQVksQ0FBWixHQUFnQixZQUFZLE1BQTVCLElBQXNDLE9BQU8sQ0FBUCxHQUFXLE9BQU8sTUFIMUQ7QUFJRCxHQUxEOztBQU9BLE1BQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsV0FBRCxFQUFpQjtBQUN2QyxRQUFNLFNBQVMsaUJBQU8saUJBQVAsR0FBMkIsTUFBMUM7QUFDQSxXQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsV0FBbEIsRUFBK0I7QUFDcEMsU0FBRyxDQUFDLE9BQU8sS0FBUCxHQUFlLFlBQVksS0FBNUIsSUFBcUMsQ0FESjtBQUVwQyxTQUFHLENBQUMsT0FBTyxNQUFQLEdBQWdCLFlBQVksTUFBN0IsSUFBdUM7QUFGTixLQUEvQixDQUFQO0FBSUQsR0FORDs7QUFRQSxNQUFNLDZCQUE2QixTQUE3QiwwQkFBNkIsQ0FBQyxXQUFELEVBQWlCO0FBQ2xELFFBQU0sVUFBVSxpQkFBTyxjQUFQLEdBQXdCLElBQXhCLENBQTZCLFVBQUMsT0FBRDtBQUFBLGFBQWEsbUJBQW1CLFdBQW5CLEVBQWdDLFFBQVEsTUFBeEMsQ0FBYjtBQUFBLEtBQTdCLENBQWhCO0FBQ0EsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNaLGFBQU8sZ0JBQWdCLFdBQWhCLENBQVA7QUFDRDtBQUNELFdBQU8sV0FBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTSxZQUFZLFNBQVosU0FBWSxHQUFNO0FBQ3RCLFFBQUksQ0FBQyxJQUFJLFdBQUosRUFBRCxJQUFzQixDQUFDLElBQUksV0FBSixFQUEzQixFQUE4QztBQUM1QyxhQUFPLE1BQVAsQ0FBYyxLQUFkLEVBQXFCLGlCQUFyQjtBQUNEO0FBQ0QsaUJBQUcsYUFBSCxDQUFpQixjQUFqQixFQUFpQyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQWpDLEVBQXdELE1BQXhEO0FBQ0QsR0FMRDs7QUFPQSxVQUFRLDJCQUEyQixTQUEzQixDQUFSOztBQUVBLFFBQU0sNEJBQWtCLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsT0FBbEIsRUFBMkIsS0FBM0IsQ0FBbEIsQ0FBTjs7QUFFQSxNQUFJLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFNBQWhCOztBQUVBLFNBQU8sR0FBUDtBQUNELEMiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaGVscGVyIHJlbWVtYmVycyB0aGUgc2l6ZSBhbmQgcG9zaXRpb24gb2YgeW91ciB3aW5kb3dzIChhbmQgcmVzdG9yZXNcbi8vIHRoZW0gaW4gdGhhdCBwbGFjZSBhZnRlciBhcHAgcmVsYXVuY2gpLlxuLy8gQ2FuIGJlIHVzZWQgZm9yIG1vcmUgdGhhbiBvbmUgd2luZG93LCBqdXN0IGNvbnN0cnVjdCBtYW55XG4vLyBpbnN0YW5jZXMgb2YgaXQgYW5kIGdpdmUgZWFjaCBkaWZmZXJlbnQgbmFtZS5cbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBhcHAsIEJyb3dzZXJXaW5kb3csIHNjcmVlbiB9IGZyb20gJ2VsZWN0cm9uJ1xuY29uc3QgZGlyID0gYXBwLmdldFBhdGgoJ3VzZXJEYXRhJylcblxuZXhwb3J0IGRlZmF1bHQgKG5hbWUsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qgc3RhdGVTdG9yZUZpbGUgPSBwYXRoLmpvaW4oZGlyLCAnd2luZG93LXN0YXRlLScgKyBuYW1lICsgJy5qc29uJylcbiAgY29uc3QgZGVmYXVsdFNpemUgPSB7XG4gICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXG4gICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodFxuICB9XG4gIGxldCBzdGF0ZSA9IHt9XG4gIGxldCB3aW5cblxuICBjb25zdCByZXN0b3JlID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNpemUsIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHN0YXRlU3RvcmVGaWxlKSkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNpemUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0Q3VycmVudFN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gd2luLmdldFBvc2l0aW9uKClcbiAgICBjb25zdCBzaXplID0gZGVmYXVsdFNpemUudXNlQ29udGVudFNpemUgPyB3aW4uZ2V0Q29udGVudFNpemUoKSA6IHdpbi5nZXRTaXplKClcbiAgICByZXR1cm4geyB4OiBwb3NpdGlvblswXSwgeTogcG9zaXRpb25bMV0sIHdpZHRoOiBzaXplWzBdLCBoZWlnaHQ6IHNpemVbMV0gfVxuICB9XG5cbiAgY29uc3Qgd2luZG93V2l0aGluQm91bmRzID0gKHdpbmRvd1N0YXRlLCBib3VuZHMpID0+IHtcbiAgICByZXR1cm4gd2luZG93U3RhdGUueCA+PSBib3VuZHMueCAmJlxuICAgICAgd2luZG93U3RhdGUueSA+PSBib3VuZHMueSAmJlxuICAgICAgd2luZG93U3RhdGUueCArIHdpbmRvd1N0YXRlLndpZHRoIDw9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoICYmXG4gICAgICB3aW5kb3dTdGF0ZS55ICsgd2luZG93U3RhdGUuaGVpZ2h0IDw9IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodFxuICB9XG5cbiAgY29uc3QgcmVzZXRUb0RlZmF1bHRzID0gKHdpbmRvd1N0YXRlKSA9PiB7XG4gICAgY29uc3QgYm91bmRzID0gc2NyZWVuLmdldFByaW1hcnlEaXNwbGF5KCkuYm91bmRzXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTaXplLCB7XG4gICAgICB4OiAoYm91bmRzLndpZHRoIC0gZGVmYXVsdFNpemUud2lkdGgpIC8gMixcbiAgICAgIHk6IChib3VuZHMuaGVpZ2h0IC0gZGVmYXVsdFNpemUuaGVpZ2h0KSAvIDJcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZW5zdXJlVmlzaWJsZU9uU29tZURpc3BsYXkgPSAod2luZG93U3RhdGUpID0+IHtcbiAgICBjb25zdCB2aXNpYmxlID0gc2NyZWVuLmdldEFsbERpc3BsYXlzKCkuc29tZSgoZGlzcGxheSkgPT4gd2luZG93V2l0aGluQm91bmRzKHdpbmRvd1N0YXRlLCBkaXNwbGF5LmJvdW5kcykpXG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICByZXR1cm4gcmVzZXRUb0RlZmF1bHRzKHdpbmRvd1N0YXRlKVxuICAgIH1cbiAgICByZXR1cm4gd2luZG93U3RhdGVcbiAgfVxuXG4gIGNvbnN0IHNhdmVTdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoIXdpbi5pc01pbmltaXplZCgpICYmICF3aW4uaXNNYXhpbWl6ZWQoKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgZ2V0Q3VycmVudFN0YXRlKCkpXG4gICAgfVxuICAgIGZzLndyaXRlRmlsZVN5bmMoc3RhdGVTdG9yZUZpbGUsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSwgJ3V0ZjgnKVxuICB9XG5cbiAgc3RhdGUgPSBlbnN1cmVWaXNpYmxlT25Tb21lRGlzcGxheShyZXN0b3JlKCkpXG5cbiAgd2luID0gbmV3IEJyb3dzZXJXaW5kb3coT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgc3RhdGUpKVxuXG4gIHdpbi5vbignY2xvc2UnLCBzYXZlU3RhdGUpXG5cbiAgcmV0dXJuIHdpblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvYmFja2dyb3VuZHMvd2luZG93LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = require(\"fs\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiPzJlMDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmc1wiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("module.exports = require(\"path\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicGF0aFwiXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 7 */
/***/ function(module, exports) {

	eval("module.exports = require(\"devtron\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZXZ0cm9uXCI/ZjgyYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGV2dHJvblwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZGV2dHJvblwiXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 8 */
/***/ function(module, exports) {

	eval("module.exports = require(\"vue-devtools\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWUtZGV2dG9vbHNcIj8zODI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWUtZGV2dG9vbHNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInZ1ZS1kZXZ0b29sc1wiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);