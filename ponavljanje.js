var x,
    y = 2345,
    z = '2345',
    q;

// 1.
var trueFalse = !!false;
console.log('1. ' + trueFalse);

// 2.
console.log(q || x || y || z);

// 3.
var num = 6;
num--;
console.log(num);

// 4.
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
totalPrice = totalPrice.toFixed(4);
//var xyz = (rezultat / 2).toFixed(3);

console.log('Total:', totalPrice);
