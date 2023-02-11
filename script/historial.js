let mostrarElResultado = document.getElementById("mostrarElResultado")
let mostrarElResultado1 = document.getElementById("mostrarElResultado1")
let mostrarElResultado2 = document.getElementById("mostrarElResultado2")
let botonBorrar = document.getElementById("borrarHistorial")

let miRegistro = JSON.parse(localStorage.getItem(`ejerciciosGuardados`));

let miRegistro1 = JSON.parse(localStorage.getItem(`ejerciciosGuardados1`));

let miRegistro2 = JSON.parse(localStorage.getItem(`ejerciciosGuardados2`));
mostrarHistorial()





// // Por este apartado se van a mostrar los input

function mostrarHistorial() {
    if (miRegistro) {
        document.getElementById("mostrarElResultado").innerHTML = "Tu ejercicio seleccionado es " + miRegistro.respuesta + " Y lo que levantaste fue " + miRegistro.respuesta1 + " Kilos"
    }


    if (miRegistro1) {
        document.getElementById("mostrarElResultado1").innerHTML = "Tu ejercicio seleccionado es " + miRegistro1.respuesta + " Y lo que levantaste fue " + miRegistro1.respuesta1 + " Kilos"
    }

    if (miRegistro2) {
        document.getElementById("mostrarElResultado2").innerHTML = "Tu ejercicio seleccionado es " + miRegistro2.respuesta + " Y lo que levantaste fue " + miRegistro2.respuesta1 + " Kilos"
    }


}

// funcion para borrar todo el historial
botonBorrar.addEventListener(`click`, (e) => {
 e.preventDefault
 localStorage.removeItem("ejerciciosGuardados")
 localStorage.removeItem("ejerciciosGuardados1")
 localStorage.removeItem("ejerciciosGuardados2")

mostrarElResultado.innerHTML = "Historial borrado"
mostrarElResultado1.innerHTML = ""
mostrarElResultado2.innerHTML = ""

})


