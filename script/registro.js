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


    if (usuarioRegistro.value == "" || contraseñaRegistro.value == "") {
        textRegistro.innerHTML = "ingresar un valor valido"
    } else {
        usuariosRegistrados.push(new Usuarios(usuarioRegistro.value, contraseñaRegistro.value))
        localStorage.setItem("usuario", JSON.stringify(usuariosRegistrados));
        swal("Usuario Registrado", "Ingresa tu usuario", "success")
        setInterval(() => {
            window.location = "./usuarioInicio.html"

        }, 2000);


    }






})