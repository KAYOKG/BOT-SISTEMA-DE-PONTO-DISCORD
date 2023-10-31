/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description a really basic extend function for now
 * @param {Object} [source] the object to copy the method from
 * @returns {Object} [this] like most methods, returns parent object
 */
const extend = function( source: Object ): Object {
	for ( let method in source ) {
		if ( source.hasOwnProperty( method ) ) {
			Object.getPrototypeOf( this )[method] = source[method]
		}
	}

	return this
}

export default extend
