function varExample() {
    console.log(a); // Undefined (hoisted but not initialized)
    var a = 10;
    console.log(a); // 10
}
varExample();