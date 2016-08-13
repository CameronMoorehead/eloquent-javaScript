var ANCESTRY_FILE = require('./ancestry.js');

var ancestry = JSON.parse(ANCESTRY_FILE);

function averageAge() {
    var group = {};
    ancestry.forEach(function(person) {
        var century = Math.ceil(person.died/100);
        if (century in group) {
            group[century].push(person);
        } else {
            group[century] = [];
            group[century].push(person);
        }
    });

    for (century in group) {
        var counter = 0;
        var total = 0;
        var average = 0;
        for (var person in group[century]) {
            var born = group[century][person].born;
            var died = group[century][person].died;
            total += died - born;
            counter++;
        }
        average = total / counter; 
        console.log(century, ":", average);
    }
}

averageAge();
