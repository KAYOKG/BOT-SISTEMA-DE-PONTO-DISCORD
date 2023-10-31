/* @flow */
'use strict'


/**
 * @module
 * @public
 * @TODO wait for css transitions
 * @description hide an element, while waiting for css transitions to finish
 * @param {Object} [el] the element to wait for
 * @returns {Object} [this] like most methods, returns parent object
 */
const whichTransition = function( el: Object ): string {
	const transitions: Object = {
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd'
	}

	let t: string = ''

	for ( t in transitions ) {
		if ( typeof el.style[t] !== 'undefined' ) {
			return transitions[t]
		}
	}
}

module.exports = whichTransition
