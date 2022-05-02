let contenedor_menu;
let menu_items = [];
let paginas = [];
var iniciarLogin = undefined, iniciarRegistro = undefined;
let cont_sesion;
let logeado = false;
const menu_html = `
<li class="hover-effect"><a href="javascript:void(0)" id = "item_1">Inicio</a></li>
<li class="hover-effect"><a href="javascript:void(0)" id = "item_2">Acerca de</a></li>
<li class="hover-effect"><a href="javascript:void(0)" id = "item_3">Juego - API</a></li>
<li class="hover-effect"><a href="javascript:void(0)" id = "item_4">Novedades</a></li>
<li class="hover-effect"><a href="javascript:void(0)" id = "item_5">Contacto</a></li>
`;
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
    return (pagina_actual === paginas["item_3"]);
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



    setTimeout(hideURLbar, 500);


    for (var i of menu_items) {

        i.addEventListener("click", abrirPagina);
    }
}

function hideURLbar() {
    window.scrollTo(0, 1);
}

function abrirPagina(evento) {


    let pagina = evento.target.id;
    let puede_ingresar = true;

    if (pagina === "item_3") {

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