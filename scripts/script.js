//Array tablero
/* const Tablero = [
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
]; */

//Array Usuarios
let Usuarios = [
	{
		nombre: "Andres",
		nombreUsuario: "amgiribaldi@gmail.com",
		password: "qweqwe",
		id: 1,
	},
	{
		nombre: "Martin",
		nombreUsuario: "amgiribaldi@outlook.com",
		password: "qwe123",
		id: 2,
	},
	{
		nombre: "Giribaldi",
		nombreUsuario: "amgiribaldi@xmail.com",
		password: "ewqewq",
		id: 3,
	},
	{
		nombre: "Invitado",
		nombreUsuario: "invitado@invitado.com",
		password: "invitado",
		id: 4,
	},
];

class Usuario {
	constructor(nombre, nombreUsuario, password, id) {
		this.nombre = nombre;
		this.nombreUsuario = nombreUsuario;
		this.password = password;
		this.id = id;
	}
	asignarId(array) {
		this.id = array.length;
	}
}

//Elementos del DOM
//Pagina registro
const nombre = document.getElementById("registroNombre"),
	nombreUsuario = document.getElementById("registroNombreUsuario"),
	password = document.getElementById("registroPassw"),
	aceptaTyC = document.getElementById("aceptaTyC"),
	btnRegistrar = document.getElementById("btnEnviar"),
	btnJugar = document.getElementById("btnJugar"),
	tituloRegistro = document.getElementById("tituloPagina");

//Cambio tituto del H2
if (tituloRegistro) {
	tituloRegistro.innerText = "Formulario Registro";
}

//Validaciones del imput nombreUsuario
if (nombreUsuario) {
	nombreUsuario.addEventListener("keypress", (evento) => {
		let codigoCaracter = evento.charCode;
		if (codigoCaracter != 0) {
			if (codigoCaracter > 32 && codigoCaracter < 45) {
				evento.preventDefault();
				const Toast = Swal.mixin({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener("mouseenter", Swal.stopTimer);
						toast.addEventListener("mouseleave", Swal.resumeTimer);
					},
				});
				Toast.fire({
					icon: "warning",
					title: "No se permite caracteres especiales como , ! $ # % &",
				});
			} else if (codigoCaracter > 57 && codigoCaracter < 64) {
				evento.preventDefault();
				const Toast = Swal.mixin({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener("mouseenter", Swal.stopTimer);
						toast.addEventListener("mouseleave", Swal.resumeTimer);
					},
				});
				Toast.fire({
					icon: "warning",
					title: "No se permite caracteres especiales como ; : > < ?",
				});
			} else if (codigoCaracter > 64 && codigoCaracter < 95) {
				evento.preventDefault();
				const Toast = Swal.mixin({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener("mouseenter", Swal.stopTimer);
						toast.addEventListener("mouseleave", Swal.resumeTimer);
					},
				});
				Toast.fire({
					icon: "warning",
					title:
						"No se permiten mayusculas ni caracteres especiales como [ ^ ]",
				});
			} else if (codigoCaracter > 122) {
				evento.preventDefault();
				const Toast = Swal.mixin({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener("mouseenter", Swal.stopTimer);
						toast.addEventListener("mouseleave", Swal.resumeTimer);
					},
				});
				Toast.fire({
					icon: "warning",
					title: "No se permite caracteres especiales como ñ { } ~ |",
				});
			} else if (codigoCaracter == 47 || codigoCaracter == 96) {
				evento.preventDefault();
				const Toast = Swal.mixin({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener("mouseenter", Swal.stopTimer);
						toast.addEventListener("mouseleave", Swal.resumeTimer);
					},
				});
				Toast.fire({
					icon: "warning",
					title: "No se permite caracteres especiales como / `",
				});
			}
		}
	});
}

//Pagina login
const loginEmail = document.getElementById("loginEmail"),
	loginPassword = document.getElementById("loginPassw"),
	recordarme = document.getElementById("recordarme"),
	btnLogin = document.getElementById("btnLogin");

//Pagina tablero
const cerrarSesion = document.getElementById("cerrarSesion");
if (cerrarSesion) {
	cerrarSesion.addEventListener("click", () => {
		//sessionStorage.clear();
		borrarDatos();
	});
}

//Si no existe array en el localStorage, cargo el array harcodeado / Si existe tomo ese array con los registros guardados en locarStorage
listarUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
if (listarUsuarios == null) {
	localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
} else {
	Usuarios = JSON.parse(localStorage.getItem("Usuarios"));
}
//console.log(listarUsuarios);
console.log(Usuarios);

//Limpiar datos de los storages
function borrarDatos() {
	//localStorage.clear();
	sessionStorage.clear();
}

if (btnJugar) {
	btnJugar.onclick = () => {
		let textoBtn = "Iniciar sesion";
		let URL = "./pages/login.html";
		Swal.fire({
			title: "¡Hola!",
			text: "Para jugar tienes que iniciar sesion",
			icon: "warning",
			iconColor: "#66f4ae",
			confirmButtonText: "Ok",
			showCancelButton: true,
			cancelButtonText: textoBtn.link(URL),
		});
	};
}

//Validar usuario
function validarUsuario(usuariosDB, usuario, password) {
	let existe = usuariosDB.find(
		(usuarioDB) => usuarioDB.nombreUsuario == usuario
	);
	//.find  busca en el array y devuelve el primer valor(nombreUsuario) encontrado o undefined si no encuentra
	//console.log(existe);
	//console.log(typeof existe);

	if (typeof existe === "undefined") {
		return false;
	} else {
		//si el usuario existe, comparo el password
		if (existe.password != password) {
			return false;
		} else {
			// si el pass password coincide retorno el usuario encontrado
			return existe;
		}
	}
}

if (btnLogin) {
	btnLogin.addEventListener("click", (e) => {
		e.preventDefault();
		for (let i = 2; i >= 0; i--) {
			//revisar este for o sacarlo
			if (!loginEmail.value || !loginPassword.value) {
				Swal.fire({
					title: "Ingrese usuario y contraseña para inciar sesion",
					icon: "warning",
					iconColor: "#FF8000",
					confirmButtonText: "Aceptar",
				});
			} else {
				let datos = validarUsuario(
					Usuarios,
					loginEmail.value,
					loginPassword.value
				);
				//console.log(datos);
				if (!datos) {
					Swal.fire({
						title: "Datos incorrectos",
						text: "Verifique los datos ingresados y vuelva a intentar",
						icon: "warning",
						iconColor: "#CB3234",
						confirmButtonText: "Aceptar",
					});
				} else {
					let textoBtn = "Comenzar partida";
					let URL = "../pages/tablero.html";
					Swal.fire({
						title: `Bienvenido/a ${datos.nombre}`,
						text: "Es hora de jugar",
						icon: "info",
						iconColor: "#66f4ae",
						confirmButtonText: textoBtn.link(URL),
					});
					sessionStorage.setItem("Usuario", JSON.stringify(datos));
					break;
				}
			}
		}
	});
}

const usuarioLogueado = JSON.parse(sessionStorage.getItem("Usuario"));
const usuario = document.getElementById("usuarioLogueado");


if (usuarioLogueado) {
	usuario.innerText = `Bienvenido/a ${usuarioLogueado.nombre}`;
	console.log(usuarioLogueado);
}

/* const usuario = JSON.parse(sessionStorage.getItem("Usuario"));
const usuarioLogueado = document.getElementById("usuarioLogueado");
console.log(usuario);

function estaLogueado(usuario) {
	if (usuario) {
		usuarioLogueado.innerText = `Bienvenido/a ${usuario.nombre}`;
	}
} */

if (btnRegistrar) {
	btnRegistrar.addEventListener("click", (e) => {
		e.preventDefault();
		let nuevoUsuario = new Usuario(
			(this.nombre = nombre.value),
			(this.nombreUsuario = nombreUsuario.value),
			(this.password = password.value)
		);
		listarUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
		const existe = listarUsuarios.some(
			(listarUsuarios) => listarUsuarios.nombreUsuario === this.nombreUsuario
		);
		if (!nombreUsuario.value || !password.value) {
			const Toast = Swal.mixin({
				toast: true,
				position: "top-end",
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				didOpen: (toast) => {
					toast.addEventListener("mouseenter", Swal.stopTimer);
					toast.addEventListener("mouseleave", Swal.resumeTimer);
				},
			});
			Toast.fire({
				icon: "warning",
				title: "Completa todos los campos para registrarte",
			});
		} else if (!aceptaTyC.checked) {
			const Toast = Swal.mixin({
				toast: true,
				position: "top-end",
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				didOpen: (toast) => {
					toast.addEventListener("mouseenter", Swal.stopTimer);
					toast.addEventListener("mouseleave", Swal.resumeTimer);
				},
			});
			Toast.fire({
				icon: "warning",
				title: "Tienes que aceptar los terminos y condiciones",
			});
		} else {
			if (existe != true) {
				let textoBtn = "Iniciar sesion";
				let URL = "../pages/login.html";
				Swal.fire({
					title: "¡Registro exitoso!",
					text: "Ya puedes iniciar sesion y disfrutar una partida",
					icon: "info",
					iconColor: "#66f4ae",
					confirmButtonText: textoBtn.link(URL),
				});
				Usuarios.push(nuevoUsuario);
				nuevoUsuario.asignarId(Usuarios);
				localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
			} else {
				const Toast = Swal.mixin({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener("mouseenter", Swal.stopTimer);
						toast.addEventListener("mouseleave", Swal.resumeTimer);
					},
				});
				Toast.fire({
					icon: "warning",
					title: "El usuario ingresado ya se encuentra registrado",
				});
			}
		}
		console.log(existe);
		console.log(listarUsuarios);
		console.log(Usuarios);
	});
}

const Fichas = [
	{
		id: 0,
		nombre: "torreNegro",
		posicion: [0, 7],
		img: "../img/torreNegro.svg",
	},
	{
		id: 1,
		nombre: "caballoNegro",
		posicion: [1, 6],
		img: "../img/caballoNegro.svg",
	},
	{
		id: 2,
		nombre: "alfilNegro",
		posicion: [2, 5],
		img: "../img/alfilNegro",
	},
	{
		id: 3,
		nombre: "reyNegro",
		posicion: [3],
		img: "../img/reyNegro.svg",
	},
	{
		id: 4,
		nombre: "reinaNegro",
		posicion: [4],
		img: "../img/reinaNegro.svg",
	},
	{
		id: 5,
		nombre: "peonNegro",
		posicion: [8, 9, 10, 11, 12, 13, 14, 15],
		img: "../img/peonNegro.svg",
	},
	{
		id: 6,
		nombre: "torreBlanco",
		posicion: [56, 63],
		img: "../img/torreBlanco.svg",
	},
	{
		id: 7,
		nombre: "caballoBlanco",
		posicion: [57, 62],
		img: "../img/caballoBlanco.svg",
	},
	{
		id: 8,
		nombre: "alfilBlanco",
		posicion: [58, 61],
		img: "../img/alfilBlanco.svg",
	},
	{
		id: 9,
		nombre: "reyBlanco",
		posicion: [59],
		img: "../img/reyBlanco.svg",
	},
	{
		id: 10,
		nombre: "reinaBlanco",
		posicion: [60],
		img: "../img/reinaBlanco.svg",
	},
	{
		id: 11,
		nombre: "peonBlanco",
		posicion: [48, 49, 50, 51, 52, 53, 54, 55],
		img: "../img/peonBlanco.svg",
	},
];

// console.log(Fichas[0].nombre);
// console.log(Fichas[0].posicion);
// console.log(Fichas[0].posicion.indexOf(0));


const radios = document.querySelectorAll('input[type="radio"]');
const divRadios = document.getElementById("radio");

radios.forEach((item) => {
	item.addEventListener("click", () => {
		usarFichas(item.value);
	});
});


//-------
class crearTablero {
	static ctx; //contexto
	static anchoTablero;
	static altoTablero;
	static anchoCelda;
	static pintarTablero(tablero) {
		if (this.ctx == undefined) {
			let divTablero = document.getElementById("Tablero");
			this.anchoTablero = divTablero.clientWidth;
			this.altoTablero = divTablero.clientHeight;
		}
		this.anchoCelda = this.altoTablero / 8;

		let y = 0;
		let x = 0;
		let blanco = true;
		for (let i = 0; i < 8; i++) {
			x = 0;
		}
	}
}

/* class Tablero{
	constructor(){
		this.tablero=[];
		for (let i = 0; i < 8; i++) {
			let fila = [];
			for (let j = 0; j < 8; j++) {
				fila.push(undefined);
			}
			this.tablero.push(fila);
		}
	}

} */

// Instrucciones movimientos
let jugadas = document.getElementById("jugadas");

let instruccion = document.getElementById("instruccion");
if (instruccion) {
	instruccion.addEventListener("keypress", (evento) => {
		if (evento.charCode == 13) {
			procesarComando(instruccion.value, jugadas);
		}
	});
}

//commando=instruccion.value
function procesarComando(comando, jugadas) {
	let movimientos = comando.trim().split(" ", 2);
	if (movimientos.length > 0) {
		let columnas = [];
		let filas = [];
		for (let i = 0; i < movimientos.length; i++) {
			let movimiento = movimientos[i].split("");
			let posicion = 0;
			switch (movimiento[0]) {
				case "T":
				case "C":
				case "A":
				case "R":
				case "D":
				case "P":
					posicion++;
					break;
			}
			if (movimiento[posicion] == "x") {
				posicion++;
			}
			columnas.push(movimiento[posicion++]);
			filas.push(movimiento[posicion++]);
		}

		console.log(comando);
		console.log(columnas, filas);
	} else {
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
		});
		Toast.fire({
			icon: "warning",
			title: "El movimiento no es correcto",
		});
	}
}

//-------

const tablero = document.getElementById("Tablero");
let tableroFichas = [];

function usarFichas(color) {
	if (color == "blanco") {
		if (tableroFichas == 0) {
			for (let i = 0; i < 64; i++) {
				let div = document.createElement("div");
				tablero.appendChild(div).style.backgroundColor =
					parseInt(i / 8 + i) % 2 == 0 ? "#fff" : "#493e3e";
				tableroFichas.push(div);
				div.classList.add("casillero" + i);
				if (Fichas[6].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/torreBlanco.svg" class="" alt="Torre blanco" />`;
				}
				if (Fichas[7].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/caballoBlanco.svg" alt="Caballo blanco" />`;
				}
				if (Fichas[8].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/alfilBlanco.svg" alt="Alfil blanco" />`;
				}
				if (Fichas[9].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reyBlanco.svg" alt="Rey blanco" />`;
				}
				if (Fichas[10].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reinaBlanco.svg" alt="Reina blanco" />`;
				}
				if (Fichas[11].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/peonBlanco.svg" alt="Peon blanco" />`;
				}
				if (Fichas[0].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/torreNegro.svg" alt="Torre negro" />`;
				}
				if (Fichas[1].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/caballoNegro.svg" alt="Caballo negro" />`;
				}
				if (Fichas[2].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/alfilNegro.svg" alt="Alfil negro" />`;
				}
				if (Fichas[3].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reyNegro.svg" alt="Rey negro" />`;
				}
				if (Fichas[4].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reinaNegro.svg" alt="Reina negro" />`;
				}
				if (Fichas[5].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/peonNegro.svg" alt="Peon negro" />`;
				}
			}
		} else {
			borrarTablero();
			for (let i = 0; i < 64; i++) {
				let div = document.createElement("div");
				tablero.appendChild(div).style.backgroundColor =
					parseInt(i / 8 + i) % 2 == 0 ? "#fff" : "#493e3e";
				tableroFichas.push(div);
				div.classList.add("casillero" + i);
				if (Fichas[6].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/torreBlanco.svg" class="" alt="Torre blanco" />`;
				}
				if (Fichas[7].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/caballoBlanco.svg" alt="Caballo blanco" />`;
				}
				if (Fichas[8].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/alfilBlanco.svg" alt="Alfil blanco" />`;
				}
				if (Fichas[9].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reyBlanco.svg" alt="Rey blanco" />`;
				}
				if (Fichas[10].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reinaBlanco.svg" alt="Reina blanco" />`;
				}
				if (Fichas[11].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/peonBlanco.svg" alt="Peon blanco" />`;
				}
				if (Fichas[0].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/torreNegro.svg" alt="Torre negro" />`;
				}
				if (Fichas[1].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/caballoNegro.svg" alt="Caballo negro" />`;
				}
				if (Fichas[2].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/alfilNegro.svg" alt="Alfil negro" />`;
				}
				if (Fichas[3].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reyNegro.svg" alt="Rey negro" />`;
				}
				if (Fichas[4].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reinaNegro.svg" alt="Reina negro" />`;
				}
				if (Fichas[5].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/peonNegro.svg" alt="Peon negro" />`;
				}
			}
		}
		divRadios.className += " d-none";
		console.log(tableroFichas);
		return tableroFichas;
	}
	if (color == "negro") {
		if (tableroFichas == 0) {
			for (let i = 0; i < 64; i++) {
				let div = document.createElement("div");
				tablero.appendChild(div).style.backgroundColor =
					parseInt(i / 8 + i) % 2 == 0 ? "#fff" : "#493e3e";
				tableroFichas.push(div);
				div.classList.add("casillero" + i);
				if (Fichas[0].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/torreBlanco.svg" alt="Torre blanco" />`;
				}
				if (Fichas[1].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/caballoBlanco.svg" alt="Caballo blanco" />`;
				}
				if (Fichas[2].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/alfilBlanco.svg" alt="Alfil blanco" />`;
				}
				if (Fichas[3].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reyBlanco.svg" alt="Rey blanco" />`;
				}
				if (Fichas[4].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reinaBlanco.svg" alt="Reina blanco" />`;
				}
				if (Fichas[5].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/peonBlanco.svg" alt="Peon blanco" />`;
				}
				if (Fichas[6].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/torreNegro.svg" alt="Torre negro" />`;
				}
				if (Fichas[7].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/caballoNegro.svg" alt="Caballo negro" />`;
				}
				if (Fichas[8].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/alfilNegro.svg" alt="Alfil negro" />`;
				}
				if (Fichas[9].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reyNegro.svg" alt="Rey negro" />`;
				}
				if (Fichas[10].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reinaNegro.svg" alt="Reina negro" />`;
				}
				if (Fichas[11].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/peonNegro.svg" alt="Peon negro" />`;
				}
			}
		} else {
			borrarTablero();
			for (let i = 0; i < 64; i++) {
				let div = document.createElement("div");
				tablero.appendChild(div).style.backgroundColor =
					parseInt(i / 8 + i) % 2 == 0 ? "#fff" : "#493e3e";
				tableroFichas.push(div);
				div.classList.add("casillero" + i);
				if (Fichas[0].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/torreBlanco.svg" alt="Torre blanco" />`;
				}
				if (Fichas[1].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/caballoBlanco.svg" alt="Caballo blanco" />`;
				}
				if (Fichas[2].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/alfilBlanco.svg" alt="Alfil blanco" />`;
				}
				if (Fichas[3].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reyBlanco.svg" alt="Rey blanco" />`;
				}
				if (Fichas[4].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reinaBlanco.svg" alt="Reina blanco" />`;
				}
				if (Fichas[5].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/peonBlanco.svg" alt="Peon blanco" />`;
				}
				if (Fichas[6].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/torreNegro.svg" alt="Torre negro" />`;
				}
				if (Fichas[7].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/caballoNegro.svg" alt="Caballo negro" />`;
				}
				if (Fichas[8].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/alfilNegro.svg" alt="Alfil negro" />`;
				}
				if (Fichas[9].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reyNegro.svg" alt="Rey negro" />`;
				}
				if (Fichas[10].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/reinaNegro.svg" alt="Reina negro" />`;
				}
				if (Fichas[11].posicion.indexOf(i) !== -1) {
					div.innerHTML = `<img src="../img/peonNegro.svg" alt="Peon negro" />`;
				}
			}
		}
		divRadios.className += " d-none";
		console.log(tableroFichas);
		return tableroFichas;
	}
}

const btnBorrarFichas = document.getElementById("borrarFichas");
if (btnBorrarFichas) {
	btnBorrarFichas.addEventListener("click", (e) => {
		let fichas = document.querySelectorAll("img");
		for (let f of fichas) {
			f.parentNode.removeChild(f);
		}
		divRadios.className -= " d-none";
	});
}

function borrarTablero() {
	while (tablero.hasChildNodes()) {
		tablero.removeChild(tablero.firstChild);
	}
	tableroFichas = [];
}

function moverFicha(datosArray, inicial, final) {
	let n = datosArray.length;

	if (inicial < 0 || inicial > n || final < 0 || final > n) {
		throw TypeError("Las posiciones especificados no son validas");
	}
	[datosArray[inicial], datosArray[final]] = [
		datosArray[final],
		datosArray[inicial],
	];
}

//Prueba de la funcion
/* let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

moverFicha(numeros, 0, numeros.length - 3);
console.log(numeros); */

//ejemplo
/* moverFicha(tableroFichas, 0, 24);
console.log(tableroFichas); */

//------------------------------------------------------------
/* function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
} */

//------------------------------------------------------------

/* /* /* inputOptions can be an object or Promise */
/* const inputOptions = new Promise((resolve) => {
	setTimeout(() => {
		resolve({
			"Blancas": "Blancas",
			"Negras": "Negras",
		});
	}, 1000);
});

const { value: color } = await Swal.fire({
	title: "Select color",
	input: "radio",
	inputOptions: inputOptions,
	inputValidator: (value) => {
		if (!value) {
			return "You need to choose something!";
		}
	},
});

if (color) {
	Swal.fire({ html: `You selected: ${color}` });
} */

//Esta función nos permite intercambiar la visualización de los elementos del DOM, agregando o sacando la clase d-none. Si el elemento la tiene, se la saco, y si no la tiene, se la agrego. La gata Flora de las funciones sería.
// function presentarInfo(array, clase) {
//     array.forEach(element => {
//         element.classList.toggle(clase);
//     });
// }

//Esta función revisa si hay un usuario guardado en el storage, y en ese caso evita todo el proceso de login
// function estaLogueado(usuario) {

//     if (usuario) {
//         saludar(usuario);
//         mostrarInfoMascota(mascotas);
//         presentarInfo(elementosToggleables, 'd-none');
//     }
// }

//----------------------------------------------------------------------
