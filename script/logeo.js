let textoLogeo = document.getElementById("texterror")
const usuarioLogin = document.getElementById("usuario")
const contraseñaLogin = document.getElementById("contraseña")
const boton = document.getElementById("boton")

let usuariosRegistrados = []
let logeoUsuario = JSON.parse(localStorage.getItem(`usuario`));


// se realiza una busqueda del usuario y contraseña registrado para que pueda acceder

boton.addEventListener(`click`, (e) => {
    e.preventDefault()

    logeoUsuario.forEach((usuario) => {
        if (usuarioLogin.value == usuario.usuario && contraseñaLogin.value == usuario.contraseña) {
            swal("Te logeaste exitosamente", "Bienvenido " + usuario.usuario, "success")
            setInterval(() => {
                window.location = "../index.html"
            }, 2000);
        } else {
            usuarioLogin.value = ""
            contraseñaLogin.value = ""
            textoLogeo.innerHTML = "Ingresaste lo datos incorrectos, ingresar nuevamente."
            textoLogeo.style.color = "red";
            usuarioLogin.style.borderColor = "red"
            contraseña.style.borderColor = "red"

        }
    })

})