import leia from 'readline-sync'; 

export default function exercicio20(){
    var valor = 0.33;

    for(let i = 1 ; i <= 500; i++){
        let calc = i * valor;
        console.log(`${i} copias = R$${calc.toFixed(2)}`);
    }

}