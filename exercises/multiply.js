'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

function multiply(num1, num2) {
    let somme = 0
    if (num2 < 0) {
    
    num2 = -num2
    
    for (let i = 1; i <= num2; i++) {
    somme = somme + num1
    } 
    
    if (somme === 0){
    return somme
    } 
    
    else {return -somme
    }
    
    }
    
    if (num2 > 0) {
    for (let i = 1; i <= num2; i++) {
    somme = somme + num1
    
    }return somme
    } if (num2 === 0) {
    return 0}
    }
    

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */