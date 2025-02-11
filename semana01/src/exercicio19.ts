import leia from 'readline-sync'; 

export default function exercicio11(){
    let numeroDigitado = leia.questionInt("informe o numero final:")

    for(let i = 0; i <= numeroDigitado; i++){
        console.log(i);
    }
//////////////////////////
    let i = 0; 
    while(i <= numeroDigitado){
        console.log(i);
        i++
    }
//////////////////////

 //   let i = 0; 
    let controle = true;
    while(controle){
        if(i <= numeroDigitado){
            console.log(i);
            i++
        }else{
//            controle false
        }
    }
}