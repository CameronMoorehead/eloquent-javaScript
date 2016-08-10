function deepEqual(x, y) {
    if (typeof x == 'object' && x != null) {
        return true;
    } else {
        return compare(x, y);
    }
    function compare(x, y) {
        var xArray = [], yArray = [];
        for (var prop in x) {
            return xArray.push(prop);
        }
        for (var prop in y) {
            return yArray.push(prop);
        }
        if (xArray.length !== yArray.length) {
            return false;
        } else {
            for (var i = 0; i < xArray.length; i++)  {
                return deepEqual(xArray[i], yArray[i]);
            }
        }
    }
}    
var object1 = {};
var object2 = {};

object1.value = 1;
object2.value = 1;

console.log(object1 === object2);

console.log(deepEqual(object1, object2));


