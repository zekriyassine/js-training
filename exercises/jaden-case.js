'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(a){
    let arr = a.split(" ") 
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    a = arr.join(" ")
    return a
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you'), 'How Are You')

// End of tests */
