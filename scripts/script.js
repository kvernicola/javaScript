//Array Piezas (incompleto)
const blancas = [
	{ id: 1, pieza: "peonBlanco1", img: "../img/peonBlanco.svg" }, //agregar posicion original como propiedad
	{ id: 2, pieza: "peonBlanco2", img: "../img/peonBlanco.svg" },
	{ id: 3, pieza: "peonBlanco3", img: "../img/peonBlanco.svg" },
	{ id: 4, pieza: "peonBlanco4", img: "../img/peonBlanco.svg" },
	{ id: 5, pieza: "peonBlanco5", img: "../img/peonBlanco.svg" },
	{ id: 6, pieza: "peonBlanco6", img: "../img/peonBlanco.svg" },
	{ id: 7, pieza: "peonBlanco7", img: "../img/peonBlanco.svg" },
	{ id: 8, pieza: "peonBlanco8", img: "../img/peonBlanco.svg" },
	{ id: 9, pieza: "torreBlanco1", img: "../img/torreBlanco.svg" },
	{ id: 10, pieza: "torreBlanco2", img: "../img/torreBlanco.svg" },
	{ id: 11, pieza: "caballoBlanco1", img: "../img/caballoBlanco.svg" },
	{ id: 12, pieza: "caballoBlanco2", img: "../img/caballoBlanco.svg" },
	{ id: 13, pieza: "alfilBlanco1", img: "../img/alfilBlanco.svg" },
	{ id: 14, pieza: "alfilBlando2", img: "../img/alfilBlanco.svg" },
	{ id: 15, pieza: "reinaBLanco", img: "../img/reinaBlanco.svg" },
	{ id: 16, pieza: "reyBlanco", img: "../img/reyBlanco.svg" },
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
];

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
	btnEnviar = document.getElementById("btnEnviar"),
	btnJugar = document.getElementById("btnJugar");
//elementosToggleables = document.querySelectorAll(".toggeable"),

//Pagina login
const loginEmail = document.getElementById("loginEmail"),
	loginPassword = document.getElementById("loginPassw"),
	recordarme = document.getElementById("recordarme"),
	btnLogin = document.getElementById("btnLogin");

const tituloRegistro = document.getElementById("tituloPagina");
//innerText cambio el texto del elemento en cuestion
if (tituloRegistro) {
	tituloRegistro.innerText = "Formulario Registro";
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
	localStorage.clear();
	sessionStorage.clear();
}

function saludar(datos) {
	nombre.innerHTML = `Bienvenido/s, <span>${datos.nombre}</span>`;
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
	console.log(existe);
	console.log(typeof existe);

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
		//login();
		for (let i = 2; i >= 0; i--) {
			if (!loginEmail.value || !loginPassword.value) {
				Swal.fire({
					title: "Ingrese usuario y contraseña",
					//text: "",
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
				console.log(datos);
				//console.log(loginEmail.value,loginPassword.value);
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
					break;
					/* const Toast = Swal.mixin({
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
						icon: "success",
						title: "Sesion iniciada",
					}); */
					//Redireccionar a pagina con tablero
				}
			}
		}
	});
}

if (btnEnviar) {
	btnEnviar.addEventListener("click", (e) => {
		e.preventDefault();
		//registrar();
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
			Swal.fire({
				title: "¡Hola!",
				text: "Todos los campos son requeridos",
				icon: "info",
				iconColor: "#66f4ae",
				confirmButtonText: "ok",
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
					showCancelButton: true,
					cancelButtonText: "cancel",
				});
				Usuarios.push(nuevoUsuario);
				nuevoUsuario.asignarId(Usuarios);
				localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
			} else {
				Swal.fire({
					title: "¡Error!",
					text: "El usuario ingresado ya se encuentra registrado",
					icon: "info",
					iconColor: "#66f4ae",
					confirmButtonText: "ok",
					timer: 2500,
				});
			}
		}
		console.log(existe);
		console.log(listarUsuarios);
		console.log(Usuarios);
	});
}

//------------------------------------------------------------

/* function login() {
	for (let i = 2; i >= 0; i--) {
		if (!loginEmail.value || !loginPassword.value) {
			Swal.fire({
				title: "Ingrese usuario y contraseña",
				//text: "",
				icon: "info",
				iconColor: "#66f4ae",
				confirmButtonText: "Aceptar",
			});
		} else {
			let datos = validarUsuario(
				Usuarios,
				loginEmail.value,
				loginPassword.value
			);
			console.log(datos);
			//console.log(loginEmail.value,loginPassword.value);
			if (!datos) {
				Swal.fire({
					title: "Datos incorrectos",
					text: "Verifique los datos ingresados y vuelva a intentar",
					icon: "info",
					iconColor: "#66f4ae",
					confirmButtonText: "Aceptar",
				});
			} else {
				Swal.fire({
					title: `Bienvenido/a ${datos.nombre}`,
					text: "Es hora de jugar",
					icon: "info",
					iconColor: "#66f4ae",
					confirmButtonText: "Comenzar partida",
				});
				break;
				//Redireccionar a pagina con tablero 
			}
		}
	}
} */

//registrarse
/* function registrar() {
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
		Swal.fire({
			title: "¡Hola!",
			text: "Todos los campos son requeridos",
			icon: "info",
			iconColor: "#66f4ae",
			confirmButtonText: "ok",
		});
	} else {
		if (existe != true) {
			Swal.fire({
				title: "¡Registro exitoso!",
				text: "Ya puedes iniciar sesion y disfrutar una partida",
				icon: "info",
				iconColor: "#66f4ae",
				confirmButtonText: "Iniciar sesion",
				showCancelButton: true,
				cancelButtonText: "cancel",
			});
			Usuarios.push(nuevoUsuario);
			nuevoUsuario.asignarId(Usuarios);
			localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
		} else {
			Swal.fire({
				title: "¡Error!",
				text: "El usuario ingresado ya se encuentra registrado",
				icon: "info",
				iconColor: "#66f4ae",
				confirmButtonText: "ok",
				timer: 2500,
			});
		}
	}
	console.log(existe);
	console.log(listarUsuarios);
	console.log(Usuarios);
} */

//------------------------------------------------------------
