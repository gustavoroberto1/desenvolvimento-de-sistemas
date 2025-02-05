import leia from 'readline-sync'; 

export default function exercicio01(){
      var numero = leia.questionInt(" digite um numero:");

      var antecessor = numero - 1 ;

      console.log(`o numero digitado: ${numero}`);
      console.log(`o antecessor é: ${antecessor}`);
}