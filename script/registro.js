let usuarioRegistro = document.getElementById("usuarioRegister")
let contraseñaRegistro = document.getElementById("contraseñaRegister")
let botonRegister = document.getElementById("botonRegister")
let textRegistro = document.getElementById("textRegister")


let usuariosRegistrados = []



class Usuarios {
    constructor(usuario, contraseña) {
        this.usuario = usuario
        this.contraseña = contraseña
    }
}




// funcion para registrar usuario

botonRegister.addEventListener(`click`, (e) => {
    e.preventDefault()


    if (usuarioRegistro.value == "" ||contraseñaRegistro.value == "") {
        textRegistro.innerHTML = "ingresar un valor valido"
    } else {
        usuariosRegistrados.push(new Usuarios(usuarioRegistro.value, contraseñaRegistro.value))
        localStorage.setItem("usuario", JSON.stringify(usuariosRegistrados));
        textRegistro.innerHTML = "Tu cuenta fue creada"


    }






})


function busquedaUsuario() {
    let logeoUsuario = JSON.parse(localStorage.getItem(`usuario`));
    logeoUsuario.forEach((usuario) => {
        if (usuarioRegistro.value == usuario.usuario) {
            textRegistro.innerHTML = "Ingresado ya registrado"
        } else {
            usuariosRegistrados.push(new Usuarios(usuarioRegistro.value, contraseñaRegistro.value))
            localStorage.setItem("usuario", JSON.stringify(usuariosRegistrados));
            textRegistro.innerHTML = "Tu cuenta fue creada"
        }
    });
}