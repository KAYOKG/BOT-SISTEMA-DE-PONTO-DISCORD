/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description look for a particular class in the first el of the selection
 * @param {string} [classes] the class(es) to look for (separated by a space)
 * @returns {boolean} true if el has class, false if not
 */
const hasClass = function( classes: string ): boolean {
	return classes.split( ' ' ).every( c => {
		return this.sel[0].className.indexOf( c ) !== -1
	} )
}

module.exports = hasClass
