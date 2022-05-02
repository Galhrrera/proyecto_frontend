let btn_enviar, btn_cerrar_modal, formulario, ventana;
let correo, clave, usuario, imagen, titulo, mensaje;

/*
navegacion centralizada
*/
let nombre, celular;
let paginas = [];
//var iniciarLogin = undefined
let menu_items = [];

const menu_html = `
<li class="hover-effect"><a href="index.html">Inicio</a></li>
<li class="hover-effect"><a href="about.html">Acerca de</a></li>
<li class="hover-effect"><a href="games.html">Juego - API</a></li>
<li class="hover-effect"><a href="news.html">Novedades</a></li>
<li class="hover-effect"><a href="contact.html">Contacto</a></li>`;

let sesion_on = `
<a href="javascript:void(0)" id="cerrar_sesion" onClick="cambiarSesion(false);" class="btn"><i class="fa fa-sign-out" aria-hidden="true"></i> Cerrar sesión</a>
`;
let sesion_off = `
<a href="login.html" class="btn">
<span class="fa fa-user-circle-o"></span> Login</a>
<a href="register.html" class="btn">
<span class="fa fa-pencil-square-o"></span> Registro</a>`;

window.onload = function () {
	contenedor_menu = document.querySelector(".nav");
	contenedor_menu.innerHTML = menu_html;
	setTimeout(hideURLbar, 0);

	cont_sesion = document.querySelector(".forms");
	cambiarSesion(JSON.parse(localStorage.getItem("logeado")));

	asignarNavegacion();

}

function asignarNavegacion() {
	menu_items.push(document.getElementById("item_1"));
	menu_items.push(document.getElementById("item_2"));
	menu_items.push(document.getElementById("item_3"));
	menu_items.push(document.getElementById("item_4"));
	menu_items.push(document.getElementById("item_5"));
	menu_items.push(document.getElementById("item_6"));

	paginas["item_1"] = "index.html";
	paginas["item_2"] = "about.html";
	paginas["item_3"] = "games.html";
	paginas["item_4"] = "news.html";
	paginas["item_5"] = "contact.html";
	

	/*
	for (var i of menu_items) {
		i.addEventListener("click", abrirPagina);
	}*/
}

/*
fin navegacion centralizada*/

function iniciarLogin() {



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
	//ventana.classList.add("hidden");
	location.href = "index.html";
}

function procesarLogin(evento) {
	//console.log("Entró a procesar login")


	let txt_correo, txt_clave;
	let str_usuario, md5_clave;
	let error = false;
	txt_correo = correo.value;
	txt_clave = md5(clave.value);

	str_usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(str_usuario);

	if (usuario) {
		if (usuario.correo === txt_correo && usuario.clave === txt_clave) {
			cambiarSesion(true);

			mensaje_exito("Muy bien, logueo exitoso, continua disfrutando del sitio.");

		}
		else {
			error = true;
		}
	} else {
		error = true;
	}

	if (error) {
		alert("Revisa los datos, ocurrio un error.");
	}

	mensaje_exito("Logeado");
	abrirVentana();
	evento.preventDefault();


	//console.log(evento.target);

}

function cambiarSesion(bandera) {



	logeado = bandera;
	//console.log(logeado);
	localStorage.setItem("logeado", logeado);


	if (logeado) {
		cont_sesion.innerHTML = sesion_on;

	}
	else {
		cont_sesion.innerHTML = sesion_off;


		if (cerrarSesion()) {
			location.href = "index.html";
		}
	}
}