var price;
var qty;
var total;

price = 5;
qty = 14;
total = price * qty;

var el = document.getElementById('cost');
el.textContent = 'Total cost: ' + '$' + total;
var test = document.getElementById('test');
test.textContent = 'Total: ' + '$' + total;