import leia from 'readline-sync'; 

export default function exercicio02(){ 

    var largura = leia.questionFloat("digite a largura");
    var altura = leia.questionFloat("digite a altura");
    var area = largura * altura;

    console.log(area)
}