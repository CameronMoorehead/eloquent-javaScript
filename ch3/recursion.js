function isEven(n) {
    if (n < 0) {
        return "Enter only non-negative integers";
    } else if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
}

console.log(isEven(10));
console.log(isEven(23));
console.log(isEven(-1));
