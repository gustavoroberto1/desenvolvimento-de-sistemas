export default class Pessoa {
    constructor(name: string, idade: number) {
        this.nome = name;
        this.idade = idade
    }

    private nome: string;
    private idade: number;

    public getNome() {
        return this.nome;
    }

    public getIdade() {
        return this.idade;
    }
}