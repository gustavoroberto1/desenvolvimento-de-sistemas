import leia from 'readline-sync'; 

export default function exercicio20(){

    let qtdNumeroRange = 0;
    let numeroDigitado;

    do {
       numeroDigitado = leia.questionInt("digite uma numero:");
        if (numeroDigitado > 100 && numeroDigitado < 200){
            qtdNumeroRange++;
        }
    } while (numeroDigitado!== 0);
    console.log("numero entre 100 e 200 foram:" + qtdNumeroRange)
}