export default function exercicio43() {
    let vetor: number[] = []
    for (let i = 0; i < 10; i++) {
        vetor.push(Math.trunc(Math.random() * 100));
    }

    let repetidos: number[] = [];

    for (let i = 0; i < vetor.length; i++) {
        for (let j = i; j < vetor.length; j++) {
            if (i !== j && vetor[i] === vetor[j]) {
                repetidos.push(vetor[i]);
            }
        }
    }

    console.log(vetor)
    console.log(repetidos)
} 