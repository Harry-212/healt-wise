'use strict'

const v5 = require('brace-expansion-v5')
const expandImpl = typeof v5 === 'function' ? v5 : v5.expand

function expand(str, options) {
  return expandImpl(str, options)
}

// minimatch@3: const expand = require('brace-expansion')
module.exports = expand
// minimatch@10+: const { expand } = require('brace-expansion')
module.exports.expand = expand
