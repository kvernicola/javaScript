const savedPassw = "qwerty";
let accessGranted = false;
let userName = prompt("Hola, ingrese su nombre");
alert("Bienvenido/a, " + userName);
let flag = true;

let optSelected = prompt(
	"\nPara poder jugar tienes que estar registrado. \nPresiona 1 para registrarte \nPresiona 2 para iniciar sesion \nPresiona x para salir."
);

do {
	switch (optSelected) {
		case "1":
			alert(
				"El registro para nuevos usuarios se encuentra deshabilitado momentaneamente"
			);
			optSelected = prompt(
				"\nPara poder jugar tienes que estar registrado. \nPresiona 1 para registrarte \nPresiona 2 para iniciar sesion \nPresiona x para salir."
			);
			break;
		case "2":
			login();
			flag = false;
			break;
		case "x":
			flag = false;
			break;
		default:
			alert("La opcion elegida no es valida");
			optSelected = prompt(
				"\nPara poder jugar tienes que estar registrado. \nPresiona 1 para registrarte \nPresiona 2 para iniciar sesion \nPresiona 'x' para salir."
			);
			break;
	}

}while (flag);

function login() {
	for (let i = 2; i >= 0; i--) {
		let userPassw = prompt(
			"Ingrese tu password " +
				userName +
				"." +
				" Tienes " +
				(i + 1) +
				" intentos."
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

//-----------------------------------------------

