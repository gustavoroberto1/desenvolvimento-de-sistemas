import leia from 'readline-sync'; 

export default function exercicio20(){
    let Valentina = 1.50;
    let Joaozinho = 1.40;
    let anos = 0;

    while (Valentina >= Joaozinho) {
        Valentina +=0.02;
        Joaozinho +=0.03;
        anos++;
        
    }
    console.log(`o joazinho vai passar a altura da valentina em ${anos}anos`)
 }