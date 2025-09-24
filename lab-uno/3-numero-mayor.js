function encontrarMayor() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultadoMayor');

    if (numero1 > numero2) {
        resultado.textContent = 'El numero mayor es ' + numero1;
    } else {
        resultado.textContent = 'El numero mayor es ' + numero2;
    }
}