import leia from 'readline-sync'; 

export default function exercicio20(){
    let maiorValor = Number.MIN_VALUE;
    let menorValor = Number.MAX_VALUE;
    let i = 0;
    while(i < 15 ){
        let numero = leia.questionInt(`digite o numero ${i + 1};`)

        //operador ternario
        menorValor = (numero < menorValor) ? numero : menorValor;

        maiorValor = (numero > maiorValor)? numero : maiorValor;
        

        i++
    }
    console.log(`maior valor é?`)
    console.log(`menor valor é?`)
}