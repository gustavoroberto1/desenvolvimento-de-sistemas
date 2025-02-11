import leia from 'readline-sync'; 

export default function exercicio13(){

    var clienteUm = leia.question("informe o nome do primeiro cliente")
    var ValorClienteUm = leia.question("informe o nome do primeiro cliente")

    var clienteDois = leia.question("informe o nome do segundo cliente")
    var ValorClienteDois = leia.question("informe o nome do segundo cliente")

    var ValorTotal = ValorClienteUm + ValorClienteDois;
   // console.log("valor total gasto:R$ " + ValorTotal.toFixed(2))

   // var valorMedio = ValorTotal / 2;
    //console.log("valor medio gasto :R$" + valorMedio.toFixed)

    console.log("clientes que gastaram acima de R$20:")

    //if (ValorClienteUm < 20 && ValorClienteDois < 20){
     //   console.log(" ninguem comprou mais que R$20")
      //  return;

   // }


}