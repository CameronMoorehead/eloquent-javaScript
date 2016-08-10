function reverseArray(array) {
    var reversed = [];
    for (var i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

var testArray1 = [1, 2, 3, 4, 5];

console.log(reverseArray(testArray1));

function reverseInPlace(array) {
    var toMedian = array.length / 2;
    var temp = 0;
    for (var i = 0; i < toMedian; i++) {
        // swapping variables through temp
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

var testArray2 = [3, 6, 9, 12, 15];

console.log(reverseInPlace(testArray2));
