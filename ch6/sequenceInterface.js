var iterator = function(sequence, fn) {
    if (typeof sequence === 'object' && sequence !== null)
        var keys = Object.keys(sequence);
    else if (sequence === null)
        return console.log('cannot iterate over null value');
    else
        var keys = sequence;

    for (var i = 0; i < keys.length; i++)
        fn(sequence, keys, i);
}

logFive.prototype.test = "testing!";

function logFive(sequence, elements, i) {
    if (i < 5)
        console.log(sequence[elements[i]]);
}

var sequenceObject1 = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
}

iterator(sequenceObject1, logFive);
iterator(null, logFive);

