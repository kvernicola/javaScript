/* let userName = prompt("Por favor. Ingrese su nombre");
alert("Bienvenido, " + userName); */

const savedPassw = "qwerty";

function login () {
	let accessGranted = false;

	for (let i = 2; i >= 0; i--) {
		let userPassw = prompt(
			"Ingrese su password. Tienes " + (i + 1) + " intentos."
		);
		if (userPassw == savedPassw) {
			accessGranted = true;
			alert("Bienvenido/a" )
			break;
		}else {
			alert("El password ingresado es incorrecto. Tienes " + i +" intentos.");
		}
	}
	return accessGranted;
}

login ();
