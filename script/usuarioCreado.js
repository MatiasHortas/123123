
let nombreAMostrar = document.getElementById
("nombreAmostrar")
const boton2 = document.getElementById("boton2")



let logeoUsuario = JSON.parse(localStorage.getItem(`usuario`));


    const buscarUsuario = logeoUsuario.find(usuario => usuario.usuario)

    if (buscarUsuario){
        nombreAMostrar.innerHTML= " " + buscarUsuario.usuario
    }

    if (buscarUsuario == ""){
        alert("vacio")
    }



    
boton2.addEventListener(`click`, (e) => {
e.preventDefault()
window.location = "usuarioInicio.html"
})
