// Generated by CoffeeScript 2.0.0-beta8
var browserslist = require('browserslist')
var _ = require('lodash')
module.exports = class BrowserSelection {
constructor( query) {
  this.browsersRequest = query
  this._list = browserslist(this.browsersRequest)
    .map((s) => s.split(' '))
}

test( browser, version) {
  version = version.split('-')
  if (version.length === 1) version.push(version[0])
  return _.find(this._list, ([b, v]) => {
    return b === browser && v >= version[0] && v <= version[1]
  })
}
list() {
  return this._list.slice()
}
}