let contenedor_menu;
let menu_items = [];
let paginas = [];
var iniciarLogin = undefined, iniciarRegistro = undefined;
let cont_sesion;
let logeado = false;
const menu_html = `
<li class="hover-effect"><a href="index.html">Home</a></li>
<li class="hover-effect"><a href="about.html">About</a></li>
<li class="hover-effect"><a href="games.html">Games</a></li>
<li class="hover-effect"><a href="news.html">News</a></li>
<li class="hover-effect"><a href="contact.html">Contact</a></li>`;
let sesion_on = `
<span>
    <img src="images/avatar.png" alt="">
</span>
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
    paginas["item_5"] = "single.html";
    paginas["item_6"] = "contact.html";

    /*
    for (var i of menu_items) {
        i.addEventListener("click", abrirPagina);
    }*/
}

function hideURLbar() {
    window.scrollTo(0, 1);
}

function abrirPagina(evento) {

    let pagina = evento.target.id;
    let puede_ingresar = true;

    if (pagina === "item_3" || pagina === "item_4" || pagina === "item_5") {
        puede_ingresar = logeado;
    }

    if (puede_ingresar) {
        location.href = paginas[pagina];
    }
    else {
        alert("Esta seccion requiere inicio de sesion.");
        //TODO: Personalizar con mensaje lightbox
    }
}