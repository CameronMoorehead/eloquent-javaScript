function createBoard(n) {
    for (var j = 0; j < n; j++) {
        if (j % 2 === 0) {
            var row1 = ""
            for (var i = 0; i < n; i++) {
                if (i % 2 === 0)
                    row1 += "#"
                else
                    row1 += " " 
            }
            console.log(row1, "\n")
        } else {
            var row2 = ""
            for (var i = 0; i < n; i++) {
                if (i % 2 === 0)
                    row2 += " "
                else
                    row2 += "#" 
            }
            console.log(row2, "\n")
        }
    }
}


createBoard(8);
