import leia from 'readline-sync'; 

export default function exercicio09(){
    const SENHA_APP = "1234";

    var senha = leia.questionInt("digite uma senha");
    if (senha == 1234){
        console.log("acesso liberado!!!")
    }else {
        console.log("acesso negado!!!")
    }
}