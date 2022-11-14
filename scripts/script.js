//Array Piezas (incompleto)
const blancas = [
	{ id: 1, pieza: "peonBlanco1" }, //agregar posicion original como propiedad
	{ id: 2, pieza: "peonBlanco2" },
	{ id: 3, pieza: "peonBlanco3" },
	{ id: 4, pieza: "peonBlanco4" },
	{ id: 5, pieza: "peonBlanco5" },
	{ id: 6, pieza: "peonBlanco6" },
	{ id: 7, pieza: "peonBlanco7" },
	{ id: 8, pieza: "peonBlanco8" },
	{ id: 9, pieza: "torre1" },
	{ id: 10, pieza: "torre2" },
	{ id: 11, pieza: "caballo1" },
	{ id: 12, pieza: "caballo2" },
	{ id: 13, pieza: "alfil1" },
	{ id: 14, pieza: "alfil2" },
	{ id: 15, pieza: "reina" },
	{ id: 16, pieza: "rey" },
];

//Array tablero
const Tablero = [
	{ id: 1, casillero: "1A" },
	{ id: 2, casillero: "1B" },
	{ id: 3, casillero: "1C" },
	{ id: 4, casillero: "1D" },
	{ id: 5, casillero: "1E" },
	{ id: 6, casillero: "1F" },
	{ id: 7, casillero: "1G" },
	{ id: 8, casillero: "1H" },

	{ id: 9, casillero: "2A" },
	{ id: 10, casillero: "2B" },
	{ id: 11, casillero: "2C" },
	{ id: 12, casillero: "2D" },
	{ id: 13, casillero: "2E" },
	{ id: 14, casillero: "2F" },
	{ id: 15, casillero: "2G" },
	{ id: 16, casillero: "2H" },

	{ id: 17, casillero: "3A" },
	{ id: 18, casillero: "3B" },
	{ id: 19, casillero: "3C" },
	{ id: 20, casillero: "3D" },
	{ id: 21, casillero: "3E" },
	{ id: 22, casillero: "3F" },
	{ id: 23, casillero: "3G" },
	{ id: 24, casillero: "3H" },

	{ id: 25, casillero: "4A" },
	{ id: 26, casillero: "4B" },
	{ id: 27, casillero: "4C" },
	{ id: 28, casillero: "4D" },
	{ id: 29, casillero: "4E" },
	{ id: 30, casillero: "4F" },
	{ id: 31, casillero: "4G" },
	{ id: 32, casillero: "4H" },

	{ id: 33, casillero: "5A" },
	{ id: 34, casillero: "5B" },
	{ id: 35, casillero: "5C" },
	{ id: 36, casillero: "5D" },
	{ id: 37, casillero: "5E" },
	{ id: 38, casillero: "5F" },
	{ id: 39, casillero: "5G" },
	{ id: 40, casillero: "5H" },

	{ id: 41, casillero: "6A" },
	{ id: 42, casillero: "6B" },
	{ id: 43, casillero: "6C" },
	{ id: 44, casillero: "6D" },
	{ id: 45, casillero: "6E" },
	{ id: 46, casillero: "6F" },
	{ id: 47, casillero: "6G" },
	{ id: 48, casillero: "6H" },

	{ id: 49, casillero: "7A" },
	{ id: 50, casillero: "7B" },
	{ id: 51, casillero: "7C" },
	{ id: 52, casillero: "7D" },
	{ id: 53, casillero: "7E" },
	{ id: 54, casillero: "7F" },
	{ id: 55, casillero: "7G" },
	{ id: 56, casillero: "7H" },

	{ id: 57, casillero: "8A" },
	{ id: 58, casillero: "8B" },
	{ id: 59, casillero: "8C" },
	{ id: 60, casillero: "8D" },
	{ id: 61, casillero: "8E" },
	{ id: 62, casillero: "8F" },
	{ id: 63, casillero: "8G" },
	{ id: 64, casillero: "8H" },
]

// FOR...Of

/* for (const pieza of blancas) {
    console.log(pieza.id);
    console.log(pieza.pieza)
}*/

//Array Usuarios
const Users = [
	{
		name: "Andres",
		age: 42,
		username: "amgiribaldi@gmail.com",
		password: "qweqwe",
		id: 1,
	},
	{
		name: "Martin",
		age: 43,
		username: "amgiribaldi@outlook.com",
		password: "qwe123",
		id: 2,
	},
	{
		name: "Giribaldi",
		age: 44,
		username: "amgiribaldi@blabla.com",
		password: "ewqewq",
		id: 3,
	},
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
	let newUser = new User(
		(name = prompt("Ingrese su nombre")),
		(age = parseInt(prompt("ingrese su edad"))),
		(username = prompt("Ingrese su mail (username)")),
		(password = prompt("Ingrese una contraseña"))
	);
	const existe = Users.some((User) => User.username === username);
	//Corregir esta validacion, viendo de usar un while mientras existe != true para que haga el bucle hasta crear bien el usuario y ofrecer una opcion de cancelar el registro
	if (existe != true) {
		alert("El registro fue correcto, ya puede iniciar sesion");
	} else {
		alert("El usuario ingresado ya existe, intente con otro");
		newUser = new User(
			(name = prompt("Ingrese su nombre")),
			(age = parseInt(prompt("ingrese su edad"))),
			(mail = prompt("Ingrese su mail")),
			(username = prompt("Ingrese un nombre de usuario")),
			(password = prompt("Ingrese una contraseña"))
		);
	} // el usuario ya existe, da promp de nuevo pero finaliza si existe o no, por eso necesito un bucle
	console.log(existe);
	Users.push(newUser);
	newUser.asignarId(Users);
	console.log(Users);
}

//const existe = Users.some(User => User.username === "amgiribaldi@outlook.com");
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

let userName = prompt("Bienvenido!!! \nIngrese su nombre para continuar");
alert("Bienvenido/a,,,   " + userName);

let optSelected = prompt(
	"\nPara poder jugar tienes que estar registrado. Selecciona una opcion \n'1' para registrarse \n'2' para iniciar sesion \n'x' para salir."
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
			optSelected = prompt(
				"\nPara poder jugar tienes que estar registrado. \nPresiona 1 para registrarte \nPresiona 2 para iniciar sesion \nPresiona 'x' para salir."
			);
			break;
	}
	if (optSelected == "2") {
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
