/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description remove classes from the selection
 * @param	{string} [classes] the classes to remove, separated by a space
 * @returns {Object} [this] like most methods, returns parent object
 */
const removeClass = function( classes: string ): Object {
	this.each( el => {
		return classes.split( ' ' ).forEach( c => {
			if ( !el.classList.contains( c ) ) { return }
			return el.classList.remove( c )
		} )
	} )

	return this
}

module.exports = removeClass
