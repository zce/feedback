const fs = require('fs')
const path = require('path')
const asar = require('asar')

const tempDir = path.resolve(__dirname, '../temp/')
const buildDir = path.resolve(__dirname, '../build/')

fs.readdirSync(tempDir)
  .filter(item => fs.statSync(path.resolve(tempDir, item)).isDirectory())
  .forEach(item => asar.createPackage(path.resolve(tempDir, item), path.resolve(buildDir, item + '.asar'), () => {
    console.log(`pack ${item} done...`)
  }))
