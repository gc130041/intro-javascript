/**
 *      ESTRUCTURA SWITCH
 * 
 */

//Costos de una fruta en la tienda

let comprar = 'Mangos'

switch (comprar) {
    case 'Naranjas':
        console.log('Las naranjes cuentas Q16 la mano')
        break;
    case 'Platanos':
        console.log('Los platanos se venden a Q18 la docena')
        break;
    case 'Manzanas':
        console.log('El precio de las manzanas por unidad es de Q5')
        break;
    //casos compartidos
    case 'Mangos':
    case 'Papayas':
        console.log('Los mangos y las papayas vale Q12 la libra')
        break;
    default:
        console.log(`No se encontraron con inventario para ${comprar}`) //Comillas invertidas Alt + 96
        break;
}