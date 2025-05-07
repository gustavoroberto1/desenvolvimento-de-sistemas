import leia from 'readline-sync';

type Pessoa = {
    nome: string;
    idade: number;
}

export default function exercicio48() {
    let vetorPessoas: Pessoa[] = [];
    let maisJovem: Pessoa = { idade: Number.MAX_VALUE, nome: "" };

    for (let i = 0; i < 5; i++) {
        let nome = leia.question("INFORME O NOME: ");
        let idade = leia.questionInt("INFORME A SUA IDADE: ");
        var pessoa = {
            nome: nome,
            idade: idade
        }
        vetorPessoas.push(pessoa);
    }

    for (let i = 0; i < vetorPessoas.length; i++) {
        if (vetorPessoas[i].idade < maisJovem.idade) {
            maisJovem = vetorPessoas[i];
        }
    }

    console.log(vetorPessoas)
    console.log(maisJovem)
}