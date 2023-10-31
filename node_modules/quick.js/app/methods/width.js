/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description gets or sets the height on the selection
 * @param {string} [set] the value to set the width of the selection to
 * @returns {Object|number} [this] parent object or the width
 */
const width = function( set: string ) : number | Object {
	if ( typeof set !== 'undefined' ) {
		this.each( el => el.style.width = `${set}` )
	}

	return typeof set === 'undefined' ? this.sel[0].clientWidth : this
}

module.exports = width
