/* @flow */
'use strict'


/**
 * @module
 * @public
 * @requires camelCase
 * @description gets or sets css properties on the selection
 * @param {string | Object} [styles] string for an individual style, object for many styles
 * @returns {string | Object} the style rule if getting, or the parent Object if setting
 */
const css = function( styles: string | Object ): string | Object {
	const isString: boolean = typeof styles === 'string'
	let retVal: string = ''

	if ( isString === true ) {
		retVal = this.sel[0].style[this.camelCase( styles )]
	}
	// else set css values of passed in object on every element in the selection
	else if ( typeof styles === 'object' ) {

		this.each( function( el: Object ) {
			let key: string = ''
			for ( key in styles ) {
				if ( styles.hasOwnProperty( key ) ) {
					el.style[key] = styles[key]
				}
			}
		} )
	}

	// if getting, return the matching css value of the first item in the selection
	// if setting, set css values on entire selection and continue chaining
	return isString === true ? retVal : this
}

module.exports = css
