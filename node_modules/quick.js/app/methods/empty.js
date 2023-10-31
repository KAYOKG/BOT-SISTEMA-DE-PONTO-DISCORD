/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description remove all child nodes from an element
 * @returns {Object} [this] like most methods, returns parent object
 */
const empty = function(): Object {
	this.each( el => {
		while ( el.firstChild ) {
			el.removeChild( el.firstChild )
		}
	} )

	return this
}

module.exports = empty
