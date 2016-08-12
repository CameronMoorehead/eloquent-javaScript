function flatten(array) {
    return array.reduce(function (a, b) {
        return a.concat(b);
    });
}

var myArray = [[1, 2], [3, 4,], [5, 6]];
console.log(flatten(myArray));
