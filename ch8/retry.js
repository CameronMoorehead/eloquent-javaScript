function primitiveMultiply(x, y) {
    var random = Math.floor(Math.random() * 2)
    if (random > 0)
        return x * y
    else
        throw new MultiplicatorUnitFailure('Something went Wrong', random)
}

function MultiplicatorUnitFailure(message) {
    this.message = message
    this.stack = (new Error()).stack
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype)
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorError'

for (;;) {
    try {
        var n = primitiveMultiply(2, 3)
        console.log('Two and Three make:', n)
        break
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure)
            console.log('Oops! Try again')
        else
            throw e
    }
}
