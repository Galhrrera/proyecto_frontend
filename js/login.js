let btn_enviar, btn_cerrar_modal, formulario, ventana;
let correo, clave, usuario, imagen, titulo, mensaje;



function iniciarLogin() {
	
<<<<<<< HEAD
		btn_enviar = document.getElementById("btn_enviar");
		btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
		mensaje = document.querySelector("#ventana p");
		titulo = document.querySelector("#ventana h1");
		imagen = document.querySelector("#ventana span");
		correo = document.getElementById("correo");
		clave = document.getElementById("clave");
		ventana = document.getElementById("ventana");
		formulario = document.getElementById("formulario");
		formulario.addEventListener("submit", procesarLogin);
		btn_cerrar_modal.addEventListener("click", cerrarVentana);
=======
	console.log("Entró a iniciar login");
	btn_enviar = document.getElementById("btn_enviar");
	btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
	mensaje = document.querySelector("#ventana p");
	titulo = document.querySelector("#ventana h1");
	imagen = document.querySelector("#ventana span");
	correo = document.getElementById("correo");
	clave = document.getElementById("clave");
	ventana = document.getElementById("ventana");
	formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", procesarLogin);
	btn_cerrar_modal.addEventListener("click", cerrarVentana);
	
>>>>>>> b5feae87d976040cf8f2e78724cd16b9fbad13cb
}

function mensaje_exito(texto_mensaje) {
	imagen.innerHTML = "🥳";
	btn_cerrar_modal.innerHTML = "Continuar";
	titulo.innerHTML = "Yayy!";
	mensaje.innerHTML = texto_mensaje;
	titulo.classList.remove("color_error_texto");
	titulo.classList.add("color_exito_texto");
	btn_cerrar_modal.classList.remove("color_error_texto", "color_error_borde")
	btn_cerrar_modal.classList.add("color_exito_texto", "color_exito_borde");
}

function mensaje_error(texto_mensaje) {
	imagen.innerHTML = "😥";
	btn_cerrar_modal.innerHTML = "Intenta nuevamente";
	titulo.innerHTML = "Oops!";
	mensaje.innerHTML = texto_mensaje;
	titulo.classList.add("color_exito_texto");
	titulo.classList.add("color_error_texto");
	btn_cerrar_modal.classList.remove("color_exito_texto", "color_exito_borde");
	btn_cerrar_modal.classList.add("color_error_texto", "color_error_borde");
}

function abrirVentana() {
	ventana.classList.remove("hidden");
}

function cerrarVentana(evento) {
	location.href = "index.html";
}

function procesarLogin(evento) {
<<<<<<< HEAD
	//console.log("Entró a procesar login")
=======
	alert("Entró a procesar login")
>>>>>>> b5feae87d976040cf8f2e78724cd16b9fbad13cb


	let txt_correo, txt_clave;
	let str_usuario, md5_clave;
	let error = false;
	txt_correo = correo.value;
	txt_clave = md5(clave.value);

	str_usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(str_usuario);

	alert(usuario.correo);
<<<<<<< HEAD
	alert(usuario.clave);
=======
>>>>>>> b5feae87d976040cf8f2e78724cd16b9fbad13cb

	 if (usuario) {
		if (usuario.correo === txt_correo && usuario.clave === txt_clave) {
<<<<<<< HEAD
			cambiarSesion(true);
			alert("Muy bien, logueo exitoso, continua disfrutando del sitio.");
			//mensaje_exito("Logeado");
			//abrirVentana();
			window.location="index.html";
=======
			//cambiarSesion(true);
			alert("Muy bien, logueo exitoso, continua disfrutando del sitio.");
>>>>>>> b5feae87d976040cf8f2e78724cd16b9fbad13cb
		}
		else {
			error = true;
		}
	} else {
		error = true;
	}

	if (error) {
		alert("Revisa los datos, ocurrio un error.");
<<<<<<< HEAD
	}
=======
	} 
>>>>>>> b5feae87d976040cf8f2e78724cd16b9fbad13cb

	//abrirVentana();
	evento.preventDefault();

<<<<<<< HEAD

	//console.log(evento.target);

}

function cambiarSesion(bandera) {
    alert("Entró a cambiar sesion");

    logeado = bandera;
    //console.log(logeado);
    localStorage.setItem("logeado", logeado);

    if (logeado) {
        cont_sesion.innerHTML = sesion_on;
        alert("leageado");
    }
    else {
        cont_sesion.innerHTML = sesion_off;
        alert("sesion off");

        if (cerrarSesion()) {
            location.href = "index.html";
        }
    }
=======
>>>>>>> b5feae87d976040cf8f2e78724cd16b9fbad13cb
}