/**
 * Gulp Build File
 * https://github.com/gulpjs/gulp/
 */

'use strict'

// gulp / npm plugins used
var	babel     = require( 'babel' )
var	babelify  = require( 'babelify' )
var buff      = require( 'vinyl-buffer' )
var gulp      = require( 'gulp' )
var flow      = require('gulp-flowtype')
var source    = require( 'vinyl-source-stream' )

var b = require( 'browserify' )( {
	debug: false
} )

var $ = require( 'gulp-load-plugins' )( {
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /^gulp(-|\.)/,
	camelize: true, // transforms hyphenated plugins names to camel case
	lazy: true, // lazy load plugins on demand
	rename: {
		'gulp-sourcemaps': 'maps',
		'gulp-jsdoc-to-markdown': 'jsdoc',
	}
} )

gulp.task( 'transpile', function() {
	return gulp.src( 'app/**/*.js' )
		.pipe( $.babel() )
		.pipe( gulp.dest( 'tmp' ) )
} )

gulp.task( 'docs', function() {
	return gulp.src( 'tmp/**/*.js' )
		.pipe( $.jsdoc() )
		.pipe( $.rename( function( path ) {
			path.extname = '.md'
		} ) )
		.pipe( gulp.dest( 'api' ) )
} )

gulp.task( 'flow-babel', function( cb ) {
	gulp.src( 'app/**/*.js')
		// .pipe( $.maps.init() )
		.pipe( $.babel( {
			blacklist: ['flow']
		} ) )
		.on( 'error', function( err ) {
			onError( err )
			this.emit( 'end' )
		} )
		// .pipe( $.maps.write('.') )
		.pipe( gulp.dest( './flow' ) )
		.on( 'end', cb )
} )


gulp.task( 'flow', ['flow-babel'], function( cb ) {
	gulp.src( './flow/**/*.js' )
		.pipe( flow( {
			all: false,
			weak: false,
			killFlow: true,
			beep: true,
			abort: false
		} ) )
} )


gulp.task( 'flow-watch', function() {
	gulp.watch( './app/**/*.js', ['flow'] )
} )


/**
 * if prod flag is passed, skip some steps (all we need for now)
 * false if --prod flag is used (gulp stylus --prod for example)
 */
var dev = process.argv.indexOf( '--prod' ) === -1


// err handler
var onError = function( err ) {
	$.util.beep()
	console.log( err )
}


// transform and minify app js
gulp.task( 'app', function() {
	b.transform( babelify )
	b.add( './app/core/app.js' )

	// start bundling
	return b.bundle()
		.on( 'error', function( err ) {
			onError( err )
			this.emit( 'end' )
		} )
		.pipe( source( 'app.min.js' ) )
		.pipe( buff() )
		.pipe( $.if( dev, $.maps.init() ) )
		.pipe( $.uglify() )
		.pipe( $.maps.write( './' ) )
		.pipe( gulp.dest( 'dist/' ) )
} )


// lint app/ according to .eslintrc
gulp.task( 'eslint', $.shell.task( [
	'eslint app/'
] ) )


// watch our files, runs tasks as we work
gulp.task( 'watch', function() {
	gulp.watch( 'app/**/*.js', ['eslint', 'app'] )
} )


// gulp -> just runs the stuff we touch the most
gulp.task( 'default', [ 'eslint', 'app' ] )
