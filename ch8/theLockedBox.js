var box = {
    locked: true,
    unlock: function() { this.locked = false },
    lock: function() { this.locked = true },
    _content: [],
    get content() {
        if (this.locked) throw new Error('Locked!')
        return this._content
    }
}

function withBoxUnlocked(fn) {
    box.unlock()
    try {
        return fn
    } finally {
        box.lock()
    }
}

function foo() {
    console.log('foo')
}

withBoxUnlocked(foo)
console.log(box.content)
