/* @flow */
'use strict'


/**
 * @module
 * @public
 * @TODO getComputedStyle is slow but...
 * @description hide an element, while waiting for css transitions to finish
 * @param {Object} [el] the element to get duration from
 * @returns {boolean} true if element has duration more than 0s
 */
const hasDuration = function( el: Object ): boolean {
	const dur: string | void = document.defaultView.getComputedStyle( el, null ).transitionDuration
	let has: boolean = true

	// if duration not defined or it doesn't equal 0s
	if ( dur === '0s' || typeof dur === 'undefined' ) {
		has = false
	}

	return has
}

module.exports = hasDuration
