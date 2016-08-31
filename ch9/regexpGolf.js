function check(regex, string) {
    console.log(regex.test(string))
}

// 1. car and cat

var one = /ca(r|t)/
check(one, "car")
check(one, "cat")

// 2. pop and prop

var two = /pr?op/
check(two, "pop")
check(two, "prop")

// 3. ferret, ferry and ferrari

var three = /ferr(ari|y|et)/
check(three, "ferret")
check(three, "ferry")
check(three, "ferrari")

// 4. Any word ending in ious

var four = /\w(ious)/
check(four, "pious")
check(four, "delicious")

// 5. A whitespace character followed by a dot, commo, colon, or semicolon

var five = /\s(.|,|:|;)/
check(five, " .")
check(five, " ,")
check(five, " :")
check(five, " ;")

// 6. A word longer than six letters

var six = /\w{7,}/
check(six, "sevlets")

// 7. A word without the letter e

var seven = /[^e]/
check(seven, "sev")
check(seven, "six")
