/* @flow */
'use strict'


/**
 * @module
 * @public
 * @requires query
 * @description add a node or nodes to the existing selection
 * @param	{string} [sel] the string (selector) used to query the dom
 * @returns {Object} [this] like most methods, returns parent object
 */
const add = function( sel: string ): Object {
	// iterate over new selection and current
	// if no dupe, push to current selection
	// @TODO this is naive, results in crazy big selections
	// pairing it down for now but needs work
	// should probably use something like every instead of forEach

	// this is also crappy because it won't work
	// with classnames, or attributes
	// but is good enough for now
	this.query( sel ).forEach( el => {
		// console.log( el )
		return this.sel.push( el )
	} )

	return this
}

module.exports = add
