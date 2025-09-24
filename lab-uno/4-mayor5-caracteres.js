function verificarLongitud() {
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('resultadoLongitud');

    if (texto.length > 5) {
        resultado.textContent = 'La cadena tiene más de 5 caracteres.';
    } else {
        resultado.textContent = 'La cadena no tiene más de 5 caracteres.';
    }
}