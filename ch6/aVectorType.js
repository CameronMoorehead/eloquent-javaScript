function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype = {
    info: function() {
        console.log("x:", this.x, "y:", this.y);
    },
    plus: function(vector) { 
        this.x += vector.x;
        this.y += vector.y;
        this.info();
    },
    minus: function(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.info();
    },
    get length() {
        vLength = (Math.sqrt (Math.pow(this.x, 2) + Math.pow(this.y, 2)));
        console.log(vLength);
    }
}

var one = new Vector(10, 12);
var two = new Vector(3, 4);
var three = new Vector(6, 8);

one.info();
one.plus(two);
two.minus(two);
three.length;
