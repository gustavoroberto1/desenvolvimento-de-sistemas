import leia from 'readline-sync'; 

export default function exercicio04(){
    var totalVotos = leia.questionInt("informe o numero de eleitores");
    var brancos = leia.questionInt("digite votos brancos");
    var nulos = leia.questionInt("informe os votos nulos");

    var validos = totalVotos - (brancos + nulos);
    var perValidos = (validos / totalVotos) * 100;
    var perNulos = (nulos / totalVotos) * 100;
    var perBranco = (brancos / totalVotos) * 100;

    console.log(`total votos: ${totalVotos.toFixed(1)}`)
    console.log(`total votos validos: ${perValidos.toFixed(1)} %`)
    console.log(`total votos nulos: ${perNulos.toFixed(1)}%`)
    
    

}