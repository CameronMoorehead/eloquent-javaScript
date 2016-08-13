function every(array, pred) {
    if (array.length === 1)
        return pred(array[0]);
    if (pred(array[0]) === false)
        return false;
    else
        return every(array.slice(1), pred);
}

function greaterThan10(n) {
    return n > 10;
}

console.log(every([15,11,12,10], greaterThan10));
console.log(every([11,12,13,14], greaterThan10));

function some(array, pred) {
    if (array.length === 1)
        return pred(array[0]);
    if (pred(array[0]))
        return true;
    else
        return some(array.slice(1), pred);
}

console.log(some([1,2,3,4,5], greaterThan10));
console.log(some([1,2,3,4,11], greaterThan10));
