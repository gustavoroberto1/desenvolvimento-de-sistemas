import leia from 'readline-sync'; 

export default function exercicio05(){
    var celcius = leia.questionFloat("informe a temperatura em celcius");

    var far = celcius * 1.8 + 32;
    var kelvin = celcius + 273;

    console.log(`${celcius} em fharenheit é ${far} e em kelvin é ${kelvin}`);

}