/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description sanity check to make sure we've got a dom node
 * @param {Object} node [the object we're checking for node-ness]
 * @returns {boolean} whether or not the node is a node
 */
const isNode = function( node: Object ): boolean {
	let amNode = false

	// bit of a hacky x-browser workaround here
	if ( typeof node === 'object' &&
		node.nodeType && node.cloneNode &&
		( node.nodeType === 1 || node.nodeType === 3 ) ) {

		amNode = true
	}

	return amNode
}

module.exports = isNode
