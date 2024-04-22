// 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena.

var firstName = 'Ivan ';
var lastName = ' Horvat';

var fullName = firstName.trim() + ' ' + lastName.trim();

console.log(fullName);

// 2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
var z = 6;
var y = 0;

var x = z === 2 ? y : 5;

if (z === 2) {
    x = y;
    console.log('x == y');
} else {
    x = 5;
    console.log('x == 5');
}
console.log('x=' + x);
