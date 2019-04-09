'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst (a){
    return a.substring(0, 2)
}
function keepLast(a){
    return a.slice(- 2)
}

function keepFirstLast(a){
    return a.slice(2,4)
}

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(keepFirst("Yassine"), "Ya")
assert.deepStrictEqual(keepLast("Yassine"), "ne")
assert.deepStrictEqual(keepFirstLast("Yassine"), "ss")
// End of tests */
