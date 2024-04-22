//1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.
/*var x = 2;
while (x < 20) {
    x++;

    if (x < 3) {
        //console.log('manji od 3');
        continue;
    }

    if (x % 9 === 0) {
        continue;
    }

    console.log('x=' + x);
}*/

// 2. Koja je vrijednost isprintana u konzoli?

var varOne = 0;
for (var i = 0; i < 4; i++) {
    console.log('iteracija ' + i + ' po varijabli i');
    for (var j = 0; j < 4; j++) {
        console.log('iteracija ' + j + ' po varijabli j');
        varOne++;
        console.log('vrijednost=' + varOne);
    }
}
console.log(varOne);
