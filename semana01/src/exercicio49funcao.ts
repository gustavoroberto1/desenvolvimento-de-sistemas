import { match } from 'assert';
import leia from 'readline-sync'; 

export default function exercicio20(){

    function verificarMultiplosCinco(inicio: number, final: number){
        let multiplos: number[]=[]
        for(let i = inicio; i <= final; i++) {
            if (i % 5 === 0 ){
                multiplos.push(i);
              
            }
        }
    }return multiplos ;


    verificarMultiplosCinco(1,200);
    console.log(retorno);
}