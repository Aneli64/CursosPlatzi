function sumaUser() {
    let respuesta = prompt("Cuánto es 2+2")
    if (respuesta != 4) respuesta = sumaUser()
    else console.log("Respuesta correcta!!");
}

// Otra posible solución

function sumaUser() {
    let respuesta = prompt("Cuánto es 2+2")
    while (respuesta != 4){
        respuesta = prompt("Cuánto es 2+2")
    }
    console.log("Respuesta correcta!!");
}
