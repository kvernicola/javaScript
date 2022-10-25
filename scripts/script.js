const savedPassw = "qwerty";
let accessGranted = false;

let userName = prompt("Hola, ingrese su nombre");
alert("Bienvenido/a, " + userName);

let optSelected = prompt("\nPara poder jugar tienes que estar registrado. \nPresiona 1 para registrarte \nPresiona 2 para iniciar sesion \nPresiona x para salir.");
while (optSelected != "x") {
	switch (optSelected) {
		case "1":
			alert("El registro para nuevos usuarios se encuentra deshabilitado momentaneamente")
			break;
		case "2":
			login ();
			break;
			// COMO SALGO DEL PROMP DEL WHILE CUANDO LA FUNCION LOGIN FINALIZA EN TRUE? 
		default:
			alert("La opcion elegida no es valida");
			break;
	}
	optSelected = prompt("\nPara poder jugar tienes que estar registrado. \nPresiona 1 para registrarte \nPresiona 2 para iniciar sesion \nPresiona 'x' para salir.");
}


function login () {
	//let accessGranted = false;

	for (let i = 2; i >= 0; i--) {
		let userPassw = prompt(
			"Ingrese tu password " + userName+"." +" Tienes " + (i + 1) + " intentos."
		);
		if (userPassw == savedPassw) {
			accessGranted = true;
			alert("Acceso correcto" )
			break;
		}else {
			alert("El password ingresado es incorrecto. Tienes " + i +" intentos.");
		}
	}
	return accessGranted;
}





