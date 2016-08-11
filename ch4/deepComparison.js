function deepEqual(x, y) {
    if (x === y) {
        return true;
    }

    if (x == null || typeof x != 'object') {
        return false;
    }

    var propsInX = 0;
    var propsInY = 0;

    for (var prop in x) {
        propsInX++;
    }

    for (var prop in y) {
        propsInY++;
        if (!(prop in x) || !deepEqual(x[prop], y[prop])) {
            return false;
        }
    }

    return propsInX === propsInY;
    
}    
var object1 = {};
var object2 = {};
var object3 = {};
var object4 = {};

object1.value = 2;
object2.value = 2;
object3.value = "snakes";
object4.value = "ladders";

console.log(deepEqual(object1, object2));
console.log(deepEqual(object3, object4));
