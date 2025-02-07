import leia from 'readline-sync'; 

export default function exercicio07(){

    let valorProduto = leia.questionFloat("informe o valor da venda");

    if(valorProduto < 20 ){
        valorProduto = valorProduto * 1.45;
    
    }else{
        valorProduto = valorProduto * 1.30;
    }
    
    console.log(`o valor final do produto é R$ ${valorProduto.toFixed(2)}`)
}