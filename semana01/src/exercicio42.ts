import { match } from 'assert';
import leia from 'readline-sync'; 

export default function exercicio20(){
    let v1: number[] = [];
    let v2: number[] = [];
    let v3: number[] = [];
    let resultado: number[] = [];

    for (let i = 0; < 9 ; i++){
    
        v1.push(Math.trunc(Math.random() * 100))
        v2.push(Math.trunc(Math.random() * 100))
        v3.push(Math.trunc(Math.random() * 100))
    }
    
    for (let i = 0; < 9 ; i++){
        if(i < 3){
            resultado[i] = v1[i];

        }else if (i >= 3 && i < 6){
            resultado[i] = v2[i]
        }else{
            resultado[i]= v3[i]
        }
        console.log(v1)
        console.log(v2)
        console.log(v3)
        console.log(resultado)

    }




}
