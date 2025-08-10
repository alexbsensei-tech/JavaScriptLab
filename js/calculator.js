function calculateSum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = Number(num1) + Number(num2);
    document.getElementById("sumResult").textContent = sum;
}
function calculateDifference() {
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let difference = Number(num3) - Number(num4);
    document.getElementById("differenceResult").textContent = difference;
}