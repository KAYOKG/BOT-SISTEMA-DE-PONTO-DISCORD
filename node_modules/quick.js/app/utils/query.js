/* @flow */
'use strict'


/**
 * @module
 * @public
 * @requires toArray
 * @description save the result of a dom query
 * 	            this is accessible app wide, so you don't have to constantly
 * 	            do dom lookups for each thing every time a function is called
 * 	            also gives you an array, which is more usable than a nodelist
 * @see https://eamann.com/tech/selector-caching-jquery/
 * @param {string | Object} [sel] [the string we'll use to get dom nodes, or an existing dom selection]
 * @return {array} [our node list, as an array]
 */
const query = function( sel: string | Object ): Array<Object> {
	// if user enters parent div that's already in cache
	// pull from cache and use first matching dom node as parent
	// also, should prolly do a typecheck here
	const parent: Object = this.options.parent || document
	const key: string = `${parent.nodeName}:${sel}`
	const bust: boolean = this.options.bust || false

	// if bust true, or selector not yet cached, query the dom
	// if !bust or selector already cached, we just return the cached selection
	if ( bust === true ||
		typeof this.cache[key] === 'undefined' ) {

		if ( typeof sel === 'string' ) {
			// :scope forces querySelector to behave
			this.cache[key] = this.toArray( parent.querySelectorAll( sel ) )
		}
		// this will fail if passing in a non-node selection, but that's on you
		else if ( typeof sel === 'object' ) {
			// if node list, just convert to array
			if ( typeof sel.length !== 'undefined' ) {
				this.cache[key] = this.toArray( sel )
			}
			// if individual node, make it the first index of an array
			else {
				this.cache[key] = [sel]
			}
		}
	}

	// return the selection as an Array
	return this.cache[key]
}

module.exports = query
