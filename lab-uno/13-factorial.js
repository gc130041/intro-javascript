const numeroFactorial = parseInt(prompt('Ingresa un número para calcular su factorial'));
let resultadoFactorial = 1;

for (let i = 1; i <= numeroFactorial; i++) {
    resultadoFactorial = resultadoFactorial * i;
}

console.log('El factorial de ' + numeroFactorial + ' es ' + resultadoFactorial);