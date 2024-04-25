// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function printFirstValueOnArray(array) {
    console.log(array[0]);
}

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno 
// (no se vale imprimir el array completo).

function printAllValuesOnArray(array) {
    for (valor in array) {
        console.log(array[valor]);
    }
}

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima
// todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function printAllValuesOnObject(object){
    const arr = Object.values(object) // convertimos el objeto a un array
    printAllValuesOnArray(arr);
}