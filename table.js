var tableBegin =
    '<table><thead><tr><th>Ime</th><th>Prezime</th></tr><thead><tbody>';
var tableEnd = '</tbody></table>';

var rowBegin = '<tr>';
var rowEnd = '</tr>';

var rowData = '';
var row = '';
for (var i = 1; i <= 200; i++) {
    //'<td>ime1</td><td>prezime1</td>'
    row += rowBegin; // <tr>
    rowData = '<td>ime' + i + '</td><td>prezime' + i + '</td>'; // formiramo podatke
    row += rowData; // formirani podaci dodani u varijablu 'row'
    row += rowEnd; // </tr>
    // <tr><td>ime1</td><td>prezime1</td></tr>..<tr><td>ime2</td><td>prezime2</td></tr>....
}

document.write(tableBegin + row + tableEnd);
