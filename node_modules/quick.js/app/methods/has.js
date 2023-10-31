/* @flow */
'use strict'


/**
 * @module
 * @public
 * @requires query
 * @description compares two selections and returns only the ones that are in both
 * @param {Object} [sel] the selector to use as the comparison selection
 * @param {boolean} [doWeFilter] if true we return a new selection of overlapping els only
 * @returns {Object | boolean} boolean if not filtering, parent Object otherwise
 */
const has = function( sel: Object, doWeFilter: boolean ): boolean | Object {
	const compare: Array<Object> = this.query( sel )

	// returns true or false depending on whether or not
	// the new selection overlaps with the old selection
	const hasEl: boolean = compare.some( el => {
		return this.sel.some( el2 => {
			return el.isEqualNode( el2 )
		} )
	} )

	// set the result to be the new selection, if filter passed in
	// only do if there is overlap, otherwise just return the existing selection
	if ( hasEl && doWeFilter === 'filter' ) {
		let filtered: Array<Object> = []

		// compare new selection (compare) to existing selection (this[0])
		// filtered is the result of the filter, flattened (which seems unecessary but...)
		compare.forEach( el1 => filtered.push(
			this.sel.filter( el2 => el1.isEqualNode( el2 ) )
		) )

		// this flattens the array
		filtered = [].concat.apply( [], filtered )

		// set the overlap to be the new selection
		this.sel = filtered
	}

	// if using haz as a boolean, just return hasEl
	// if using haz as a filter then keep chaining
	return doWeFilter === 'filter' ? this : hasEl
}

module.exports = has
