import { match } from 'assert';
import leia from 'readline-sync'; 

type pessoa = {
    nome:string;
    idades:number;
}

export default function exercicio20(){
    let vetorPessoa = [];
    let maisJovem = pessoa = {idade: Number.MAX_VALUE, nome: ""};
    

    for(let i = 0; i < 5; i++){
        let nome = leia.question("informe o nome:");
        let idade = leia.questionInt("informe a idade:");
        let pessoa = {
            nome:nome,
            idade:idade
        }

        const pessoa = {
            nome : nome,
            idade: idade
        }
        vetorPessoa.push(pessoa);
    }
    for(let i = 0 ; i < vetorPessoa.length; i++){
        if(vetorPessoa[i].idade < maisJovem){
            maisJovem = vetorPessoa[i];

        }
    }
    console.log(vetorPessoa)
}