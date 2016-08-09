function range(start, end) {
    var rangeArray = [];
    for (var i = start; i <= end; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}

console.log(range(10, 20));

function sum(arrayOfN) {
    var total = 0;
    for (var i = 0; i < arrayOfN.length; i++) {
        total += arrayOfN[i];
    }
    return total;
}

console.log(sum(range(1, 10)));
