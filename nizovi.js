var niz = ['a', 'b', 'c', 'd'];
var prazanNiz = [];
/*console.log(niz);
console.log(typeof niz);
*/
for (i = 0; i < prazanNiz.length; i++) {
    console.log('1. element na poziciji [' + i + '] =' + prazanNiz[i]);
}

console.log('1.1. element na poziciji [5] =' + prazanNiz[5]);

var i = 0;
do {
    console.log('2. element na poziciji [' + i + '] =' + prazanNiz[i]);
    i++;
} while (i < prazanNiz.length);

while (i < prazanNiz.length) {
    console.log('3. element na poziciji [' + i + '] =' + prazanNiz[i]);
}

var brojcaniNiz = [1, 2, 3, 4, 5, 6, 7];
// zbroji sve članove niza

//var suma = brojcaniNiz[0] +  brojcaniNiz[1] +  brojcaniNiz[2] + brojcaniNiz[3]; // ...
var suma = 0;
for (var x = 0; x < brojcaniNiz.length; x++) {
    suma += brojcaniNiz[x];
}

console.log('suma=' + suma);

var wierdBrojcaniNiz = [1, 2, , 3, 4, 5, 6, 7];
var sumaW = 0;
for (var x = 0; x < wierdBrojcaniNiz.length; x++) {
    if (wierdBrojcaniNiz[x] === undefined) {
        continue;
    }
    sumaW += wierdBrojcaniNiz[x];
}

console.log('sumaW=' + sumaW);

var matrix = [
    [1, 2, 3],
    ['John', 'Jane', 'Mike'],
];

for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join());
    for (var j = 0; j < matrix[i].length; j++) {
        console.log('matrix[' + i + '][' + j + '] = ' + matrix[i][j]);
        //console.log(matrix[i][j]);
    }
}

var myNames = ['Jane', 'John', , 'Mike'];
var y = 1;
for (var myName of myNames) {
    console.log(y + '. ' + myName);
    y++;
}
