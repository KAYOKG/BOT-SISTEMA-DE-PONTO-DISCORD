/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description just gets the length of the current selection
 * @returns {number} the length
 */
const size = function(): number {
	return this.sel.length
}

module.exports = size
