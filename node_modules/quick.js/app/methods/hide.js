/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description hide an element, while waiting for css transitions to finish
 * @returns {Object} [this] like most methods, returns parent object
 */
const hide = function(): Object {
	this.each( el => {
		const hidden: boolean = el.style.display === 'none'
		if ( hidden === true ) { return }

		// if no transition just go ahead and hide
		if ( this.hasDuration( el ) === false ) {
			el.style.display = 'none'
		}
		// else wait out the transition
		else {
			el.addEventListener( this.transition( el ), () => {
				el.style.display = 'none'
			}, false )
		}

	} )

	return this
}

module.exports = hide
