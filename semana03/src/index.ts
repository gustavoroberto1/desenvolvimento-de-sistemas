import leia from 'readline-sync';
import exercicio42 from './exercicio42';
import exercicio43 from './exercicio43';
import exercicio48 from './exercicio48';
import Pessoa from './Pessoa';


let p1 = new Pessoa("Gustavo", 27);



// let opcao = leia.keyInSelect([
//     "Exercicio 42",
//     "Exercicio 43",
//     "Exercicio 48",

// ]) + 1;

// const exercicios = {
//     1: exercicio42,
//     2: exercicio43,
//     3: exercicio48,
// } as { [key: number]: () => void };

// exercicios[opcao]();

let jogadorOpcao = leia.keyInSelect(["PEDRA", "TESOURA", "PAPEL"])


let opcoes = ["PEDRA", "TESOURA", "PAPEL"]
let sorteio = Math.trunc(Math.random() * 3); // 0 1 2

let maquina = opcoes[sorteio];
let jogador = opcoes[jogadorOpcao];


if(maquina === jogador){

}else if()


