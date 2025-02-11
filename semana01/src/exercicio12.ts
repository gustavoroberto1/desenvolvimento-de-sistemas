import leia from 'readline-sync'; 

export default function exercicio12(){

    var qtdApples = leia.questionInt(" informe a quantidade de maças:");
    var appleValues = (qtdApples < 12) ? 0.30 : 0.25;
    var ValorCompra = qtdApples *appleValues;
    console.log(`vc vai pagar ${ValorCompra.toFixed(2)}`);

}