/* let tiempo = "nublado";


if (tiempo == "lluvioso") {
  console.log("Salir con paraguas");
} else if (tiempo == 'soleado') {
  console.log("No olvide usar protecto solar");
} else if (tiempo == "nublado")
    console.log ("Abrigate un poquito")
else {
    console.log ("No tengo un consejo para darte");
} */

/* let pass = "1234A"

let passUser = prompt("Ingresa tu pass")

if (passUser==pass) {
    console.log("Login exitoso");
}else {
    console.log("Los datos no son correctos");
} */

/* let edadObligatoria = 18;
let edadOptativaMinima = 16;
let edadOptativaMaxima = 70;

let edadUsuario = parseInt(prompt("ingresa tu edad"));

if (edadUsuario >= edadObligatoria&&edadUsuario<edadOptativaMaxima) {
  console.log("Debes votar");
} else if (edadUsuario >= edadOptativaMinima||edadUsuario>=edadOptativaMaxima) {
  console.log("Podes votar si queres");
} else {
  console.log("No podes votar");
} */

//Aca un ejemplo con modulo

/* let numeroA = parseInt(prompt("Ingresa un numero y te dire si es par o impar"));2

if(numeroA%2==0) {
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

let booleana = false;
let esMenor = 37<28;
let esMayor = edadObligatoria>30; */

//let stringFalse = ("A" == "a");

/* let nombre = '4';
let otroNombre = 4;

if (nombre === otroNombre) {
    console.log ("Son iguales")
}else {
    console.log ("Son diferentes");

} */

// Esto seria un ejemplo de uso pero para mas adelante cuando definamos funciones de crear el carrito y agregar productos
/* let carrito=[];

if (!carrito){
    crearCarrito();
}else{
    agregarProductoAlcarrito();
} */

/* for (let i = 0; i < 3; i++) {
  alert(
    "Usted es el jefe de los minisuper? Esta es la repeticion  "+ (i+1) +"  del bucle"
  );
}

alert("Gracias, vuelvan prontos"); */

/* 
let oportunidades = 10;
for (let i= 1 ; i<=oportunidades;i++){
  console.log("Usaste tu oportunidad n°" +i)
}

for (let i = 10; i>0; i--){
  alert ("faltan " +i+ " segundos para el 2023!")
}

alert ("feliz año nuevo. El primer bebe del año se llama..."); */

/* for (let i=1; i<=10; i++) {
  console.log ("3 * "+i+" = " +(3*i) )
} */

//Le pedimos un dato al usuario
/* let numeroElegido = parseInt (prompt("Elegi un numero para mostrarte la tabla"))

for (let i = 0; i <= 10; i++) {
  console.log (numeroElegido+" *" + i +" =" + (numeroElegido * i));
} */


//sentencia break
/* let pass = "goku";
for (let i = 0; i < 3; i++) {
  let userPass = prompt("Ingresa tu contraseña");
  if (pass == userPass) {
    alert("Login exitoso");
    break;
  }
} */


/* for ( let i=1; i<=10;i++) {
  if (i == 4) {
    alert ("sapo muerto");
    continue;
  }
  alert (i);
} */


//Funcion con algoritmo simple
/* function ejecutar() {
  let apellido = prompt("Por favor ingrese su Apellido");
  let nombre = prompt("Ahora ingrese su Nombre");
  let edad = prompt("Cual es su edad?");
  let ano_actual = "2022";
  let jubilacion = "65";

  let calculo = +jubilacion - +edad;
  let jubilo = +ano_actual + calculo;

  alert("Hola " + nombre + " " + apellido);
  alert("Te vas a jubilar en el año " + jubilo);
} */


// Pedir un numero mediante prompt y mostrar alerta si es mayor o menor a 1000

/* let numero = parseInt(prompt("Ingrese un numero"));

if (numero > 1000) {
  alert("El numero ingresado es: " + numero + " y es mayor a 1000");
} else {
  alert("El numero ingresado es: " + numero + " y es menor a 1000");
} */

// Ingrese un texto y si es igual a Hola mostrar un mensaje por consola
/* let texto=prompt("Ingrese un texto");

if (texto == 'Hola') {
  console.log("El texto ingresado es: "+texto);
}else {
  console.log("El texto ingresado es: "+texto+" y es distinto a 'Hola' ");
} */


/* Dont repeat yourself      Principio DRY

you arent gonna need it   Principio YAGNI

Keep it simple stupid     Principio KISS */

// Declarar una funcion
/* function saludar() {
	alert("Penny");
} */
//Llamo a la ejecucion de la funcion
// saludar()

/* function sumarDosNumeros(numeroA, numeroB) {
	let resultado = numeroA + numeroB;
	return resultado;
}

function dividir(numeroA, numeroB) {
	let resultado = numeroA / numeroB;
	return resultado;
}

console.log(dividir(100, 4));

function calcular(primerNumero, segundoNumero, operador) {
	switch (operador) {
		case "+":
			return primerNumero + segundoNumero;
		case "-":
			return primerNumero - segundoNumero;
		case "*":
			return primerNumero * segundoNumero;
		case "/":
			return primerNumero / segundoNumero;
		default:
			return "Opcion invalida";
	}
}

console.log(calcular(20, 2, "/")); */

/* const suma = function (a, b) {
	return a + b;
};
console.log(suma(10, 20)); */

/* const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 150000;
let descuento = 20000;

let precioFinal = (resta(suma(iva(precioProducto),precioProducto),descuento)); */

//Ejemplo basico de cajero automatico
/* let savedPIN = "2879";

function login() {
	let ingresar = false;

	for (let i = 2; i >= 0; i--) {
		let userPIN = prompt(
			"Ingresa tu PIN. Tenes " + (i + 1) + " oportunidades."
		);
		if (userPIN == savedPIN) {
			alert("Ingreso exitoso. Bienvenido/a");
			ingresar = true;
			break;
		} else {
			alert("Error. Te quedan " + i + " intentos.");
		}
	}
	return ingresar;
}

if (login()) {
	let saldo = 402000;
	let opcion = prompt(
		"Elegi una opcion: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Deposito. \n Presiona X para finalizar."
	);
	while (opcion != "X" && opcion != "x") {
		switch (opcion) {
			case "1":
				alert("Su saldo es $ " + saldo);
				break;
			case "2":
				let retiro = parseInt(prompt("Ingresa cantidad a retirar"));
				if (retiro <= saldo) {
					saldo -= retiro;
					//saldo = saldo - retiro;
					alert("Retiro exitoso. Tu nuevo saldo es $ " + saldo);
				} else {
					saldo = retiro;
					alert("Fondo insuficiente");
				}
				break;
			case "3":
				let desposito = parseInt(prompt("Ingresa el monto a depositar"));
				break;
			default:
				alert("Elegista una opcion invalida");
				break;
		}
		opcion = prompt(
			"Elegi una opcion: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Deposito. \n Presiona X para finalizar."
		);
	}
} else {
	alert("Retendremos tu tarjeta por seguridad");
}

alert("Adios"); */

// Objetos

/* let nombre = "Homero";

const personaje1 = {
	nombre: "Homero",
	apellido: "Simpson",
	edad: "38",
	calle: "Av Siempreviva 742",
	peso: "69"
}

const personaje2 = {
	nombre: "Marge",
	apellido: "Bouvier",
	edad: "38",
	calle: "Av Siempreviva 742",
	hijos: {
		primero: "Bart",
		segundo: "Lisa",
		tercero: "Maggie",
	},
};

console.log('El peso original es ' + personaje1.peso);
personaje1.peso = 150;
console.log('El nuevo peso es ' + personaje1.peso); */

//FUNCION CONSTRUCTORA

/* function Persona(nombre,apellido,edad,calle){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.calle = calle;
	this.hablar = function(){
		console.log('Hola, soy' +this.nombre);
	}
}

const persona1 = new Persona('Bart','Simspon',10,'Av Siempreviva 742')

console.log(persona1.hablar); */

console.log("PRACTICANDO CON LOS POWERPOINT");

/* let numero = prompt("Decime cuantos años tenes");
let resultado = 65 - numero;
alert("Mira vos, sabias que en " + resultado + " años te tenes que jubilar?"); */

// sumar promedio de 3 numero en un clico de 5 veces
/* alert("Hola, vamos a ingresar 3 numeros y sacar su promedio");

let suma = "";
let promedio = "";

for (let i=0; i < 2; i++) {
	let optNumero1 = parseInt(prompt("Ingrese el primer numero"));
	let optNumero2 = parseInt(prompt("Ingrese el segundo numero"));
	let optNumero3 = parseInt(prompt("Ingrese el ultimo numero"));
	suma = optNumero1 + optNumero2 + optNumero3;
	promedio = suma / 3;
	alert(promedio);
} */

// pedir un texto por consola y concatenar un valor en cada iteraccion hasta que ingrese "ESC"

/* let ingresado = prompt("Ingrese un texto");
let resultado = ingresado;
let concatenar = " ";

while (concatenar != "ESC" && concatenar != "esc") {
	concatenar = prompt("Escriba un texto para agregarlo al inicial");
	resultado = resultado +" "+concatenar;
	alert(resultado);
} */

// Pedir un numero y mostrar un alerta con el mensaje "Hola" tantas veces como el numero ingresado

/* let numeroIngresado = parseInt(prompt("Ingresa un numero y recibiras un mensaje tantas veces como el numero que hayas ingresado"));

for (let i = 1; i <= numeroIngresado; i++) {
	alert("Hola");
} */

