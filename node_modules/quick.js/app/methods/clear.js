/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description completely resets the cache
 * @returns {Object} [this] like most methods, returns parent object
 */
const clear = function(): Object {
	this.cache = {}
	return this
}

module.exports = clear
