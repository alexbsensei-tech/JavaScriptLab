function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));

// Скобки (()): наивысший приоритет, оценивается в первую очередь.
console.log((2 + 3) * 4); // Outputs: 20

// Exponentiation (**): Evaluated next.
console.log(2 ** 3); // Outputs: 8

// Multiplication (*), Division (/), Modulus (%): Processed left to right.
console.log(10 / 2 * 3); // Outputs: 15

console.log(10 % 3.3); // Outputs: 1