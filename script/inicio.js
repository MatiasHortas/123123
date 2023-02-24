let logeoUsuario = JSON.parse(localStorage.getItem(`usuario`)) || [];

    const buscarUsuario = logeoUsuario.find(usuario => usuario.usuario)

    
// se realiza una busqueda del usuario y contraseña ingresado en localStorage en caso de que no este ingresado te obligue el ingresarlo

    if (!buscarUsuario) {
        swal("Debes Logearte", " ", "warning")
        setInterval(() => {
            window.location = "pages/usuarioRegistro.html"

        }, 2000);
        
    }