import leia from 'readline-sync'; 

export default function exercicio20(){

    let valorInformado = leia.questionInt("digite um numero");
    for(let i = valorInformado; i >= 0; i--){
        console.log(i);
}
}