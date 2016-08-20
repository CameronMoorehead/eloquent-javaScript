'use strict'

function arraySeq(array) {
    this.array = array
    this.i = 0
    this.counter = array.length
    this.next = function() {
        let current = array[this.i]
        this.i++
        this.counter--
        return current
    }
    this.remainingElements = function() {
        return this.counter
    }
}
function rangeSeq(x, y) {
    this.i = x
    this.counter = y - x + 1
    this.next = function() {
        let current = x
        this.i = x++
        this.counter --
        return current
    }
    this.remainingElements = function() {
        return this.counter
    }
}

function logFive(obj) {
    obj.counter = 5
    do {
        console.log(obj.next())
    } while
        (obj.remainingElements())
}

var testArray = new arraySeq([1,2,3])
var testArray2 = new arraySeq([2,4,6,8,10,12,14,16,18,20])
var testArray3 = new arraySeq([10,20,30,40,50])

var testRange = new rangeSeq(1, 3)
var testRange2 = new rangeSeq(10, 20)
var testRange3 = new rangeSeq(1, 5)

console.log("Array Sequencing:")
console.log(logFive(testArray))
console.log(logFive(testArray2))
console.log(logFive(testArray3))

console.log("Range Sequencing:")
console.log(logFive(testRange))
console.log(logFive(testRange2))
console.log(logFive(testRange3))
