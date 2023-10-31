/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description iterate over selection, pass each item to callback
 * @param {Function} [cb] the callback
 * @returns {Object} [this] like most methods, returns parent object
 */
const each = function( cb: Function ): Object {
	let i: number = 0 | 0

	for ( i; i < this.sel.length; i++ ) {
		cb( this.sel[i], i, this.sel )
	}

	return this
}

module.exports = each
