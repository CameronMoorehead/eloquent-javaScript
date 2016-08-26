(function(exports) {

    var names = ['January', 'February', 'March', 'April', 'May', 'June',
                 'July', 'Auguest', 'September', 'October', 'November', 'December']

    exports.name = function(number) { return names[number] }
    exports.number = function(name) { return names.indexOf(name) }
        
})(month = {})

console.log(month.name(0))
console.log(month.number('December'))
console.log(month.name(month.number('June')))
