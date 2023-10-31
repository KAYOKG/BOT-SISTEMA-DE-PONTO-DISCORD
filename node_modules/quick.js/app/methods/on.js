/* @flow */
'use strict'


/**
 * @module
 * @public
 * @TODO need to promote the better practice of putting evs on the body
 * @description attach event listeners to the selection
 * @param {string} [events] the event(s) to attach to the selection
 * @param {Function} [cb] the callback to attach to the selection
 * @returns {Object} [this] like most methods, returns parent object
 */
const on = function( events: string, cb: Function ): Object {
	if ( typeof events !== 'string' ) {
		throw new TypeError( 'on requires string as 1st param' )
	}

	this.each( el => {
		return events.split( ' ' ).forEach( ev => {
			const l: Object = {
				el: el,
				ev: ev,
				cb: cb
			}

			this.listeners.push( l )
			return el.addEventListener( l.ev, l.cb )
		} )
	} )

	return this
}

module.exports = on
