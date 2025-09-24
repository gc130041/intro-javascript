function cadena(arregloDeCadenas) {
    let cadenaMasLarga = arregloDeCadenas[0];
    for (let i = 1; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i].length > cadenaMasLarga.length) {
            cadenaMasLarga = arregloDeCadenas[i];
        }
    }
    return cadenaMasLarga;
}

function ejecutarCadenaLarga() {
    const dato = document.getElementById('cadenas').value;
    const arregloDeCadenas = dato.split(',').map(String);
    const cadenaMasLarga = cadena(arregloDeCadenas);
    
    document.getElementById("arregloCadenas").textContent = "El arreglo de cadenas es: " + arregloDeCadenas.join(", ");
    document.getElementById("resultadoCadenaLarga").textContent = "La cadena más larga es: " + cadenaMasLarga;
}