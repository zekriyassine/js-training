'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function cutFirst(a){

    return a.substring(2);
 }
 function cutLast(a){
     return a.slice(0,-2)
 }

 function cutFirstLast(a){
    return a.substring(2).slice(0,-2)
 }
//* Begin of tests
const assert = require('assert')
assert.deepStrictEqual(cutFirst("Yassine"), "ssine")
assert.deepStrictEqual(cutLast("Yassine"), "Yassi")
assert.deepStrictEqual(cutFirstLast("Yassine"), "ssi")

// End of tests */
