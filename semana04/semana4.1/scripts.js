let chart;

async function loadNomes() {
    const name = document.getElementById("name").value;
    if (!name) {
        alert("VOCÊ PRECISA DIGITAR UM NOME!!!");
        return;
    }
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name.toUpperCase()}`);
    const dados = await response.json();


    const registro = dados[0].res;
    const vetorDecadas = registro.map((item,index) =>{
        const newValue =  item.periodo.replace(/[^0-9]/g,"").substring(4,9);
        return index === 0? newValue.substring(0,4): newValue.substring(4.9);
        })
      
    const VetorValores = registro.map((item) => item.frequencia);

    if(chart){
        chart.destroy();
    }

    const ctx = document.getElementById("chart");
     chart = new Chart(ctx, {
        type:'line',
        data: {
            labels: vetorDecadas,
            datasets: [{
                label: `Frequência do nome ${name} por decáda`,
                data: VetorValores,
            }]
        }
    })

}
