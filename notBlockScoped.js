function testVar() {
    if (true) {
        var x = 5;
    }
    console.log(x); // 5 (x is function-scoped, not block-scoped)
}
testVar();

console.log(y); // Undefined (hoisted)
var y = 100;
console.log(y); // 100