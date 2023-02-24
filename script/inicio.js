let logeoUsuario = JSON.parse(localStorage.getItem(`usuario`)) || [];

    const buscarUsuario = logeoUsuario.find(usuario => usuario.usuario)

    

    if (!buscarUsuario) {
        swal("Debes Logearte", " ", "warning")
        setInterval(() => {
            window.location = "pages/usuarioRegistro.html"

        }, 2000);
        
    }