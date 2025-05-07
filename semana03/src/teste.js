function verificarMultiplosCinco(inicio, final) {
    for (let i = 1; i <= 200; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}

verificarMultiplosCinco();
verificarMultiplosCinco(12,123,123,123,123,123);