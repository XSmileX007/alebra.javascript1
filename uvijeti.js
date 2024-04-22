var text1 = 'moje ime1';
var text_2 = 'moje_ime1';

var x = text1 === text_2;
console.log('x= ' + x);

if (x === true) {
    console.log('varijeble su identične');
} else if ('moje ime1' !== 'moje ime1') {
    console.log('varijeble NISU identične');
} else if ('moje ime1' === 'moje ime1') {
    console.log('varijeble JESU identične');
} else {
    console.log('nije ispunjen niti jedan uvijet');
}
