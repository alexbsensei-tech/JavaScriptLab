function convert2F() {
    let x = document.getElementById("celsiusInput").value;
    y = (x * 1.8) + 32;
    document.getElementById("tempInF").innerHTML = y;
}
function convert2C() {
    let x = document.getElementById("fahrenheitInput").value;
    y = (x - 32) / 1.8;
    document.getElementById("tempInC").innerHTML = y;
}