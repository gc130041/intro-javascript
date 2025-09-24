function mostrarPares() {
    const resultado = document.getElementById('resultadoPares');
    let numerosPares = [];
    
    for (let i = 2; i <= 20; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    resultado.textContent = "Números pares del 2 al 20: " + numerosPares.join(', ');
}