export default function exercicio42() {
    let v1: number[] = [];
    let v2: number[] = [];
    let v3: number[] = [];
    let resultado: number[] = [];

    for (let i = 0; i < 9; i++) {
        v1.push(Math.trunc(Math.random() * 100))
        v2.push(Math.trunc(Math.random() * 100))
        v3.push(Math.trunc(Math.random() * 100))
    }

    for (let i = 0; i < 3; i++) {
        resultado.push(v1[i]);
    }

    for (let i = 3; i < 6; i++) {
        resultado.push(v2[i]);
    }

    for (let i = 6; i < 9; i++) {
        resultado.push(v3[i]);
    }

    console.log(v1)
    console.log(v2)
    console.log(v3)
    console.log(resultado)


    let idade = 18

    if((idade > 18) || (idade < 60)){

    }
}