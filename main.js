//SEGUNDA ENTREGA
// ES UN SIMULADOR INTERACTIVO DE UN CLUB DE TENIS


//se le solicita al cliente que ingrese su edad para ver si puede ingresar a la cancha


// let edad = parseInt(prompt("ingrese su edad"));
// if (edad >=18) {
//     alert ("eres mayor de edad puedes ingresar a la cancha")
// } else {
//     alert("no eres mayor de edad, no puedes ingresar")
// }




//creamos una funcion para que el cliente ingrese su nombre, se le asigne un numero de turno, y le enviamos un correo con un descuento para su proxima reserva.

// function enviarCorreo (email) {
//     alert (`correo enviado a ${email}`);
// }

// for (let turno =1; turno < 6; turno ++) {
//     let nombre = prompt ("ingrese su nombre");
//     let email = prompt ("ingrese su email");
//     alert (`Turno # ${turno} Nombre: ${nombre}`);
//     enviarCorreo (email);
// }

//CREAMOS UNA FUNCION CON OBJETOS PARA CADA PRODUCTO QUE SE VENDE EN NUESTRA PAGINA

// function producto (nombre, color, precio) {
// this.nombre= nombre;
// this.color = color;
// this.precio = precio;  }

// const producto1 = new producto ("raqueta", "azul",4500);
// const producto2 = new producto ("pelotas", "amarillo", 3000);
// const producto3 =new producto ("muñequera", "blanco", 5000);

// console.log(producto1);
// console.log( producto2);
// console.log (producto3);


//INCLUIMOS ARRAYS
// const canchasDeTenis = [
//     { nombre: 'Cancha 1', superficie: 'Césped', costoPorHora:  200},
//     { nombre: 'Cancha 2', superficie: 'Pista dura', costoPorHora: 300},
//     { nombre: 'Cancha 3', superficie: 'Arcilla', costoPorHora: 400 },
   
//   ];
  
  // ACA ACCEDEMOS A LA INFORMACION DE LA CANCHA
  // const canchaSeleccionada = canchasDeTenis[0];
  // console.log(`Nombre: ${canchaSeleccionada.nombre}`);
  // console.log(`Superficie: ${canchaSeleccionada.superficie}`);
  // console.log(`Costo por hora: $${canchaSeleccionada.costoPorHora}`);
  
  // EJEMPLO DE ARRAYS EN PRODUCTOS EN VENTA
  // const productos = [
  //   { nombre: 'Raqueta de tenis', precio: 100, stock: 10 },
  //   { nombre: 'Pelotas de tenis (paquete de 3)', precio: 10, stock: 50 },
  //   { nombre: 'Zapatillas de tenis', precio: 80, stock: 20 },
  //   { nombre: 'Ropa deportiva', precio: 30, stock: 30 },
    
  // ];
  
  //ACA ACCEDEMOS A LA INFORMACION DE LOS PRODUCTOS
  // const productoSeleccionado = productos[0];
  // console.log(`Nombre: ${productoSeleccionado.nombre}`);
  // console.log(`Precio: $${productoSeleccionado.precio}`);
  // console.log(`Stock disponible: ${productoSeleccionado.stock} unidades`);

  // a continuacion, mediante FOR EACH me arroja una lista de todos los socios
  
  // const listaproductos= ["laura", "mateo", "lorenzo", "lara"]
  // listaproductos.forEach ((p, i) => {
  //   console.log(`${i}: ${p}`);
  // })
  
  //a continuacion, filtro por socios con una edad superior a 25 años

//TERCERA ENTREGA. SITIO INTERACTIVO DE UNA CANCHA DE TENIS

//VAMOS A USAR DOM PARA CAMBIAR MI PRIMER PARRAFO DE MI ARCHIVO HTML

console.log(contenido.innerText);
parrafos{0}.innerText = "hola gente";

//ahora vamos a crear una lista
let lista = document.createElement ("ul");
lista.classList.add ("lista");
lista.innerHTML = "<li> raquetas </li>"
lista.innerHTML += "<li> pelotas </li>"
lista.innerHTML += "<li>indumentaria </li>"

console.log(lista);

//incorporamos un evento para usar en el boton
const alerta = document.querySelector("#alerta");
alerta.addEventListener("click", mostrarAlerta);
function mostrarAlerta (){
  alert ("hola,mundo!");
}


//usamos localstorage para guardar un usuario

let usuarioIngresado = prompt ("ingrese su nombre ");
localStorage.setItem ("usuario-ingresado", usuarioIngresado);
let usuarioIngresadoEnLocalStore = localstorage.getItem( "usuario-ingresado");
console.log (usuarioIngresadoEnLocalStore);
