const palindromo = prompt('Ingresa una palabra para ver si es un palíndromo');

let omordnilap = '';
for (let i = palindromo.length - 1; i >= 0; i--) {
    omordnilap = omordnilap + palindromo[i];
}

if (palindromo === omordnilap) {
    console.log('La cadena de texto es un palíndromo.');
} else {
    console.log('La cadena de texto no es un palíndromo.');
}