let nombreAMostrar = document.getElementById("nombreAmostrar")
const boton2 = document.getElementById("boton2")
cerrarSesion()
buscarUsuario()

function buscarUsuario() {
    let logeoUsuario = JSON.parse(localStorage.getItem(`usuario`)) || [];
    const buscarUsuario = logeoUsuario.find(usuario => usuario.usuario)
    if (buscarUsuario) {
        nombreAMostrar.innerHTML = " " + buscarUsuario.usuario
    }

    if (!buscarUsuario) {
        swal("Debes Logearte", " ", "warning")
        setInterval(() => {
            window.location = "usuarioRegistro.html"

        }, 2000);
    }
}

function cerrarSesion() {
    boton2.addEventListener(`click`, (e) => {
        e.preventDefault()
        swal("Cerrando sesion...", "Hasta luego ", "success")
        setInterval(() => {
            window.location = "usuarioInicio.html"
        }, 2000);

    })

}