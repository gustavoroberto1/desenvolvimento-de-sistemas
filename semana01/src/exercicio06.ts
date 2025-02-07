import leia from 'readline-sync'; 

export default function exercicio06(){
    let corrida01 = leia.questionFloat("valor corrida 01");
    let corrida02 = leia.questionFloat("valor corrida 02");
    let corrida03 = leia.questionFloat("valor corrida 03");
    let corrida04 = leia.questionFloat("valor corrida 04");
    let corrida05 = leia.questionFloat("valor corrida 05");

    let total = corrida01 + corrida02 + corrida03 + corrida04 + corrida05;
    let desconto = total * 0.25;
    let totalLiquido = total - desconto;

    console.log(`valor bruto R$ ${total.toFixed(2)}\nvalorliquido R$ ${totalLiquido.toFixed(2)}`);

}