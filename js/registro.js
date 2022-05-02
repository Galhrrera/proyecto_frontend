let btn_enviar, btn_cerrar_modal, formulario, ventana;
let correo, clave, nombre, celular, usuario, imagen, titulo, mensaje;
let paginas = [];
var iniciarLogin = undefined
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

    if (iniciarLogin) {

        iniciarLogin();
    }

    if (iniciarRegistro) {

        iniciarRegistro();
    }

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

}

function iniciarRegistro() {



    try {


        btn_enviar = document.getElementById("btn_enviar");
        btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
        correo = document.getElementById("correo");
        nombre = document.getElementById("nombre");
        celular = document.getElementById("celular");
        clave = document.getElementById("clave");
        ventana = document.getElementById("ventana");

        mensaje = document.querySelector("#ventana p");
        titulo = document.querySelector("#ventana h1");
        imagen = document.querySelector("#ventana span");

        formulario = document.getElementById("formulario");
        formulario.addEventListener("submit", procesarRegistro);
        btn_cerrar_modal.addEventListener("click", cerrarVentana);
    } catch (error) {
        console.log(error);
    }

}

function mensaje_exito(texto_mensaje) {
    imagen.innerHTML = "🥳";
    btn_cerrar_modal.innerHTML = "Continuar";
    titulo.innerHTML = "Yayy!";
    mensaje.innerHTML = texto_mensaje;
    titulo.classList.add("color_exito_texto");
    btn_cerrar_modal.classList.add("color_exito_texto", "color_exito_borde");
}

function mensaje_error(texto_mensaje) {
    imagen.innerHTML = "😥";
    btn_cerrar_modal.innerHTML = "Intenta nuevamente";
    titulo.innerHTML = "Oops!";
    mensaje.innerHTML = texto_mensaje;
    titulo.classList.add("color_error_texto");
    btn_cerrar_modal.classList.add("color_error_texto", "color_error_borde");
}

function abrirVentana() {
    ventana.classList.remove("hidden");
}

function cerrarVentana(evento) {
    location.href = "login.html";
}

function procesarRegistro(evento) {


    let txt_correo, txt_clave, txt_celular, txt_nombre;
    let str_usuario;
    txt_correo = correo.value;
    txt_nombre = nombre.value;
    txt_celular = celular.value;
    txt_clave = md5(clave.value);

    usuario = {
        correo: txt_correo,
        clave: txt_clave,
        celular: txt_celular,
        nombre: txt_nombre
    };

    str_usuario = JSON.stringify(usuario);
    localStorage.setItem("usuario", str_usuario);

    mensaje_exito("registrado");
    abrirVentana();
    evento.preventDefault();


}

function cambiarSesion(bandera) {


    logeado = bandera;

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

function cerrarSesion() {
    let pagina_actual = location.pathname.split("/").pop();
    return (pagina_actual === paginas["item_3"] || pagina_actual === paginas["item_4"] || pagina_actual === paginas["item_5"]);
}