import leia from 'readline-sync'; 

export default function exercicio03(){
    var anos = leia.questionInt("digite anos: ");
    var meses = leia.questionInt("digite o mes: ");
    var dias = leia.questionInt("dia: ");
    var idadeDias = (anos * 365) + ( meses * 30 ) + dias;

    console.log(idadeDias + "dias")

}