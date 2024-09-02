const fs = require('fs');

var lerArquivo = fs.readFileSync('oscar_best_pictures.csv').toString();
var lines = lerArquivo.split('\n');

primeira_linha = [lines[0].split(";")]
segunda_linha = [lines[1].split(";")]
terceira_linha = [lines[2].split(";")]
quarta_linha =  [lines[3].split(";")]
