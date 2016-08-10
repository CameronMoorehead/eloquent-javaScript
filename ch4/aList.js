// list variable for testing
var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}

function arrayToList(initArray) {
    var linkedList = {};
    function link(array, list) {
        if (array.length === 1) {
            list.value = array[0];
            list.rest = null;
            return linkedList;
        } else {
            list.value = array[0];
            list.rest = {};
            return link(array.slice(1), list.rest);
        }
    }
    return link(initArray, linkedList);
}

console.log(arrayToList([1, 2, 3]));

function listToArray(initList) {
    var array = [];
    function makeArray(list) {
        if (list.rest === null) {
            array.push(list.value);
            return array;
        } else {
            array.push(list.value);
            return makeArray(list.rest);
        }
    }
    return makeArray(initList);
}

console.log(listToArray(list));

function prepend(ele, list) {
    var newList = {};
    newList.value = ele;
    newList.rest = list;
    return newList;
}

console.log(prepend("8", list));

function nth(initList, position) {
    var iterator = 0;
    function getNth(list, n, iterator) {
        if (list === null) {
            return undefined;
        } else if (iterator === n) {
            return list.value;
        } else {
            return getNth(list.rest, n, ++iterator);
        }
    }
    return getNth(initList, position, iterator);
}

console.log(nth(list, 1));
