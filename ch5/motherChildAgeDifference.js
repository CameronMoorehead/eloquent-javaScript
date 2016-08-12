var ANCESTRY_FILE = require('./ancestry.js');

var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};

ancestry.forEach(function(person) {
    byName[person.name] = person;
});

function ageDifference() {
    var counter = 0;
    var totals = 0;
    for (var person in byName) {
        var mother = byName[person].mother;
        if (typeof mother != 'object' && byName[mother] != undefined) {
            counter++;
            totals += byName[person].born - byName[mother].born;
        }
    }
    console.log(totals / counter);
}

ageDifference();
