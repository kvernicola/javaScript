//Array Piezas (incompleto)
const blancas = [
    { id: 1, pieza: "peonBlanco1"}, //agregar posicion original como propiedad
    { id: 2, pieza: "peonBlanco2"},
    { id: 3, pieza: "peonBlanco3"},
    { id: 4, pieza: "peonBlanco4"},
    { id: 5, pieza: "peonBlanco5"},
    { id: 6, pieza: "peonBlanco6"},
    { id: 7, pieza: "peonBlanco7"},
    { id: 8, pieza: "peonBlanco8"},
    { id: 9, pieza: "torre1"},
    { id: 10, pieza: "torre2"},
    { id: 11, pieza: "caballo1"},
    { id: 12, pieza: "caballo2"},
    { id: 13, pieza: "alfil1"},
    { id: 14, pieza: "alfil2"},
    { id: 15, pieza: "reina"},
    { id: 16, pieza: "rey"}
];

// FOR...Of

/* for (const pieza of blancas) {
    console.log(pieza.id);
    console.log(pieza.pieza)
}*/

//Array Usuarios
const Users = [
	{name: "Andres",
	age: 42,
	mail: "amgiribaldi@gmail.com",
	username: "kvernicola",
	password: "qweqwe",
	id: 1},
	{name: "Martin",
	age: 43,
	mail: "amgiribaldi@outlook.com",
	username: "martin79",
	password: "qwe123",
	id: 2},
	{name: "Giribaldi",
	age: 44,
	mail: "amgiribaldi@blabla.com",
	username: "amg",
	password: "ewqewq",
	id: 3},
];
//console.log(Users);

class User {
    constructor(name, age, mail, username, password, id) {
        this.name = name;
        this.age = age;
        this.mail = mail;
        this.username = username;
        this.password = password;
		this.id = id;
    }
	asignarId(array) {
		this.id = array.length;
	}
}

//Funciones

//registrarse
function registrarse() {
	let newUser = new User(name=prompt("Ingrese su nombre"), age=parseInt(prompt("ingrese su edad")), mail=prompt("Ingrese su mail"), username=prompt("Ingrese un nombre de usuario"),password=prompt("Ingrese una contraseña"));
	const existe = Users.some(User => User.username === username);
	//Corregir esta validacion, viendo de usar un while mientras existe != true para que haga el bucle hasta crear bien el usuario y ofrecer una opcion de cancelar el registro
	if (existe != true) {
		alert("El registro fue correcto, ya puede iniciar sesion");
	} else {
		alert("El usuario ingresado ya existe, intente con otro");
		newUser = new User(name=prompt("Ingrese su nombre"), age=parseInt(prompt("ingrese su edad")), mail=prompt("Ingrese su mail"), username=prompt("Ingrese un nombre de usuario"),password=prompt("Ingrese una contraseña"));
	}// el usuario ya existe, da promp de nuevo pero finaliza si existe o no, por eso necesito un bucle
	console.log(existe);
	Users.push(newUser);
	newUser.asignarId(Users)
	console.log(Users);
}

//const existe = Users.some(User => User.username === "amg");
//console.log(existe);

//iniciar sesion
function login() {
	for (let i = 2; i >= 0; i--) {
		let userPassw = prompt(
			`Ingrese su password ${userName}. Tienes ${i + 1} intentos.`
		);
		if (userPassw == savedPassw) {
			accessGranted = true;
			alert("Acceso correcto");
			break;
		} else {
			alert("El password ingresado es incorrecto. Tienes " + i + " intentos.");
		}
	}
	return accessGranted;
}

// borrar este passw de prueba
const savedPassw = "qwerty";

//inicio Interaccion
let accessGranted = false;

let userName = prompt("Hola!!! Bienvenido. Ingrese su nombre para continuar");
alert("Bienvenido/a,,,   " + userName);

let optSelected = prompt(
	"\nPara poder jugar tienes que estar registrado. Selecciona una opcion \n1 para registrarte \n2 para iniciar sesion \nx para salir."
);
while (optSelected != "x") {
	switch (optSelected) {
		case "1":
			registrarse(); //verificar si el username ya existe, "usuario no disponible"
			break;
		case "2":
			login(); //validar los usuarios con el array
			break;
		default:
			alert("La opcion elegida no es valida");
			break;
	}
	if (optSelected == "2") { //me pa que no es necesario salir con el case 1, tendria q pedir prompt de nuevo o redireccionar a la funcion login (cuando valide usuarios sobre el array-pendiente)
		break;
	} else {
		optSelected = prompt(
			"\nPara poder jugar tienes que estar registrado. \nPresiona 1 para registrarte \nPresiona 2 para iniciar sesion \nPresiona 'x' para salir."
		);
	}
}



//-----------------------------------------



//const newUser = new User(name=prompt("Ingrese su nombre"), age=parseInt(prompt("ingrese su edad")), mail=prompt("Ingrese su mail"), username=prompt("Ingrese un nombre de usuario"),password=prompt("Ingrese una contraseña"));
//Users.push(newUser);
//console.log(Users);

//Funcion nuevo usuario
/* function newUser (name, age, mail, username, password) {
    this.name = name;
    this.age = age;
    this.mail = mail;
    this.username = username;
    this.password = password;
} */

//const persona1 = new newUser ("NombrePrueba", 21, "mail@prueba.com", "userPrueba", "passwPrueba");
//Users.push(persona1)
//console.log(persona1)


//alert(Users);

//uso un do while para cargar info por prompt()
//let count = 4;
/* do {
    let nameIn = prompt("Ingrese su nombre");
    Users.push(nameIn.toUpperCase());
	console.log(Users.length);
    let ageIn = parseInt(prompt("Ingrese su edad"));
    Users.push(ageIn);
    let mailIn = prompt("Ingrese su mail");
    Users.push(mailIn.toLowerCase());
    let userNameIn = prompt("Ingrese su nombre de usuario");
    Users.push(userNameIn.toLowerCase());
    let passwordIn = prompt("Ingrese una contraseña");
    let passwordVerify = prompt("Reingrese la contraseña");
        if (passwordVerify == passwordIn) {
            Users.push(passwordIn);
        }else {
            alert("La contraseña ingresada no coincide");
			passwordVerify = prompt("Verifique la contraseña ingresada");
        }
    
}while (Users.length != count) */






