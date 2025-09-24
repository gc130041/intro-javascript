function verificarPalindromo() {
    const palindromo = document.getElementById('palindromo').value;
    const resultado = document.getElementById('resultadoPalindromo');
    let omordnilap = '';
    
    for (let i = palindromo.length - 1; i >= 0; i--) {
        omordnilap = omordnilap + palindromo[i];
    }

    if (palindromo === omordnilap) {
        resultado.textContent = 'La cadena de texto es un palíndromo.';
    } else {
        resultado.textContent = 'La cadena de texto no es un palíndromo.';
    }
}