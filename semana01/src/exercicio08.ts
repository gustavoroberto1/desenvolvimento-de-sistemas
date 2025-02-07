import leia from 'readline-sync'; 

export default function exercicio08(){
     let  opcao = leia.keyInSelect(['R$10,00','R$25,00', 'R$50,00','outro']) + 1 ;

     if(opcao === 1){
        console.log("vc doou R$10,00")
     }else if (opcao === 2) {
        console.log("vc doou R$25,00")
     }else if (opcao === 3) {
        console.log("vc doou R$50,00")
     }else {
        let valor = leia.questionFloat("informe o valor da doação")
        
            console.log("obrigado pela doação")
}
}