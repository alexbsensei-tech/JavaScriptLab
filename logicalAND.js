function evaluateValues(a, b) {
    // return (a === 1 && b === 1) ? 1 : 0;
    return (a === 1 || b === 1) ? 1 : 0;
}

console.log(evaluateValues(1, 1)); // Outputs: 1
console.log(evaluateValues(1, 0)); // Outputs: 0
console.log(evaluateValues(0, 0)); // Outputs: 0