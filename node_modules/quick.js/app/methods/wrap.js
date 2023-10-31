/* @flow */
'use strict'


/**
 * @module
 * @public
 * @requires isNode
 * @description wrap the selection with the passed in dom element
 * @param {Object} [dom] the dom node to wrap the selection with
 * @returns {Object} [this] like most methods, returns parent object
 */
const wrap = function( dom: string | Object ): Object {
	// if passed a dom node directly, check it and append it
	if ( this.isNode( dom ) ) {
		this.each( el => {
			let w: Object = dom.cloneNode( true )
			w.appendChild( el.cloneNode( true ) )

			el.parentNode.replaceChild( w, el )
		} )
	}
	else if ( typeof dom === 'string' ) {
		let tmp: Object = document.createElement( 'div' )

		tmp.innerHTML = dom

		this.each( el => {
			let w = tmp.firstChild.cloneNode( true )

			w.appendChild( el.cloneNode( true ) )
			el.parentNode.replaceChild( w, el )
		} )
	}

	return this
}

module.exports = wrap
