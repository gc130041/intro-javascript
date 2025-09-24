function calcularFactorial() {
    const numeroFactorial = parseInt(document.getElementById('numeroFactorial').value);
    let resultadoFactorial = 1;
    const resultado = document.getElementById('resultadoFactorial');

    for (let i = 1; i <= numeroFactorial; i++) {
        resultadoFactorial = resultadoFactorial * i;
    }

    resultado.textContent = 'El factorial de ' + numeroFactorial + ' es ' + resultadoFactorial;
}