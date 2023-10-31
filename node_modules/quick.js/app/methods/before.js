/* @flow */
'use strict'


/**
 * @module
 * @public
 * @requires isNode
 * @description appends dom nodes before each node in the selection
 * @param {string | Object} [prependMe] the node to prepend to the dom
 * @returns {Object} [this] like most methods, returns parent object
 */
const before = function( prependMe: string | Object ): Object {
	// if passed a dom node directly, check it and append it
	if ( this.isNode( prependMe ) ) {
		this.each( el => {
			return el.parentNode.insertBefore( prependMe.cloneNode(), el )
		} )
	}
	// return dom.insertBefore(tmp.firstChild.cloneNode(true), dom.firstChild)
	else if ( typeof prependMe === 'string' ) {
		let tmp: Object = document.createElement( 'div' )

		tmp.innerHTML = prependMe

		this.each( el => {
			return el.parentNode.insertBefore( tmp.firstChild.cloneNode( true ), el )
		} )
	}

	return this
}

module.exports = before
