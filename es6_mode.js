'use strict'

// NO ES6 in this file
require('babel-register')
require('babel-polyfill')

let addPath = require('app-module-path').addPath
addPath(`${process.cwd()}/server`)

let argv = require('minimist')(process.argv.slice(2))

if (typeof argv.file === 'string') {
  require([process.cwd(), '/', argv.file].join(''))
}
