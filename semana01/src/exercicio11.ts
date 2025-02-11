import leia from 'readline-sync'; 

export default function exercicio11(){
    var placa = leia.question("informe a placa do veiculo:")
    var ultimoDigito = placa.charAt(placa.length - 1)

    switch(ultimoDigito){
        case '0':
        case '1':
            console.log("nao pode rodar na segunda-feira")  
            break; 
        case '2':
        case '3':
            console.log("nao pode rodar na terca-feira")  
            break; 
        case '4':
        case '5':
            console.log("nao pode rodar na quarta-feira")  
            break; 
        case '6':
        case '7':
            console.log("nao pode rodar na quinta-feira")  
            break; 
        case '8':
        case '9':
            console.log("nao pode rodar na sexta-feira")  
            break; 
        default:
            console.log("placa invalida")
            break;
    }
}