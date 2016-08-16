// TextCell constructor from book exercise

function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype.minWidth = function() {
    return Math.max(this.width, this.inner.minWidth());
}

StretchCell.prototype.minHeight = function() {
    return Math.max(this.height, this.inner.minHeight());
}

StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
}

var stretchedCell = new StretchCell(new TextCell("foo"), 3, 3);

console.log(stretchedCell);
console.log(stretchedCell.minWidth());
