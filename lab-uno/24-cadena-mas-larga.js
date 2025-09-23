
function cadena(arregloDeCadenas) {
    for (let i = 1; i < arregloDeCadenas.length; i++) {
        if (arregloDeCadenas[i].length > cadenaMasLarga.length) {
            cadenaMasLarga = arregloDeCadenas[i];
        }
    }
    
    
}


function ejecutar() {

    const dato = prompt('Ingresa distintos datos separados por coma');
    const arregloDeCadenas = dato.split(',').map(String)
    console.log("El arreglo de cadenas es: " + arregloDeCadenas.join(", "));
    console.log("La cadena más larga es: " + cadenaMasLarga);
}

