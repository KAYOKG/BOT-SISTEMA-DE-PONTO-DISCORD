/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description show an element, while waiting for css transitions to finish
 * @param {string} [display] the display type to use, defaults to block
 * @returns {Object} [this] like most methods, returns parent object
 */
const show = function( display: string ): Object {
	// set default value
	if ( typeof display === 'undefined' ) {
		display = 'block'
	}

	this.each( el => {
		const hidden: boolean = el.style.display === 'none'
		if ( hidden === false ) { return }

		// if no transition just go ahead and hide
		if ( this.hasDuration( el ) === false ) {
			el.style.display = display
		}
		// else wait out the transition
		else {
			el.addEventListener( this.transition( el ), () => {
				el.style.display = display
			}, false )
		}

	} )

	return this
}

module.exports = show
