function countChar(string, character) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) {
            counter++;
        }
    }
    return counter;
}

console.log(countChar("AppleA", "A"));

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BuBBerB"));


