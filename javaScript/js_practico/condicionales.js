
// Convertir este switch en un sistema de condicionales if, else y else if
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free": console.log("Solo puedes tomar los cursos gratis");
    break;
    case "Basic": console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
    case "Expert": console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
    case "ExpertPlus": console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    break;
}

// Conversión con if, else y else if
if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
}
else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
}
else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
}
else{
    console.log("Suscripción no válida")
}

// Conversión con un array y usando solo if
const suscripcionMsg = ["Solo puedes tomar los cursos gratis",
                        "Puedes tomar casi todos los cursos de Platzi durante un mes", 
                        "Puedes tomar casi todos los cursos de Platzi durante un año",
                        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]

if (tipoDeSuscripcion == "Free"){console.log(suscripcionMsg[0]);}
if (tipoDeSuscripcion == "Basic"){console.log(suscripcionMsg[1]);}
if (tipoDeSuscripcion == "Expert"){console.log(suscripcionMsg[2]);} 
if (tipoDeSuscripcion == "ExpertPlus"){console.log(suscripcionMsg[3]);}


