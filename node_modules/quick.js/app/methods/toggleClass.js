/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description toggles classes (add or remove depending on context)
 * @param {string} [classes] the classes to toggle
 * @returns {Object} [this] like most methods, returns parent object
 */
const toggleClass = function( classes: string ): Object {
	this.each( el => {
		return classes.split( ' ' ).forEach( c => {
			if ( !el.classList.contains( c ) ) {
				return el.classList.add( c )
			}

			return el.classList.remove( c )
		} )
	} )

	return this
}

module.exports = toggleClass
