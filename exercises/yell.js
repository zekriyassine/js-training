'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 function yell (a){
     return a.toUpperCase()
 }

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(yell("yassine"), "YASSINE")
// End of tests */
