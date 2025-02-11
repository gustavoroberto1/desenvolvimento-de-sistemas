import leia from 'readline-sync'; 

export default function exercicio10(){

    var numero = leia.questionInt("informe o numero:");
    if(numero  % 2 === 0){
        console.log("numero é par")
    }else {
        console.log("numero é impar")
    }
}

//var numero = leia.questionInt("informe o numero:");
//var parOuImpar = (numero % 2 === 0) ? 'Par' : 'Impar';
//console.log(`o numero é ${parOuImpar}`)
//"operador ternario"