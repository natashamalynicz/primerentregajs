// PRIMER PRE ENTREGA - SIMULADOR INTERACTIVO
// ES UN SIMULADOR INTERACTIVO DE UN CLUB DE TENIS


//se le solicita al cliente que ingrese su edad para ver si puede ingresar a la cancha


let edad = parseInt(prompt("ingrese su edad"));
if (edad >=18) {
    alert ("eres mayor de edad puedes ingresar a la cancha")
} else {
    alert("no eres mayor de edad, no puedes ingresar")
}




//creamos una funcion para que el cliente ingrese su nombre, se le asigne un numero de turno, y le enviamos un correo con un descuento para su proxima reserva.

function enviarCorreo (email) {
    alert (`correo enviado a ${email}`);
}

for (let turno =1; turno < 6; turno ++) {
    let nombre = prompt ("ingrese su nombre");
    let email = prompt ("ingrese su email");
    alert (`Turno # ${turno} Nombre: ${nombre}`);
    enviarCorreo (email);
}