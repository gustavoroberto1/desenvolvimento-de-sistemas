import leia from 'readline-sync';
import exercicio01 from './exercicio01';
import exercicio02 from './exercicio02';
import exercicio03 from './exercicio03';
import exercicio04 from './exercicio04';

var opcao = leia.keyInSelect([
    "exercicio 01","exercicio 02","exercicio 03","exerciocio 04",   
]) + 1;
 switch(opcao){
    case 1:
        exercicio01();
        break;
    case 2:
        exercicio02();
        break;
    case 3:
        exercicio03();
        break;
    case 4:
        exercicio04();
        break;
 }












//var nome = leia.question("DIGITE O SEU NOME");

//var saida = "OLÀ" + nome;

//console.log(saida)

//  var x = (8 - 3 * 5 / 3 + 3 * 2 ) % 2

// console.log (x)

// let x = 10 
// x += 25 - 5
//  console.log( x2)


//  var media = (7 + 8 + 9) / 3
//  console.log (media)

// let x = (2 + 3 *(4 / 2)+ (2 * 4)) % 2
// let w = 1.5 + 4 / 2 * 3 - 7
// let y = Math.trunc(x)
// let z = Math.trunc(w)

// if((x!==w)&& (y===z)){
//     console.log('true')
// }else{ 
//     console.log('false')
 
