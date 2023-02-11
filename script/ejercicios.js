const botonEjercicio = document.getElementById("botonEjercicio")
let ejercicioPrimerDia = document.getElementById("form1")
let ejercicioRealizadoPecho1 = document.getElementById("ejercicioRealizadoPecho1")
let pMostrar = document.getElementById("mostrarejercicio")

const botonEjercicio2 = document.getElementById("botonEjercicio2")
let ejercicioSegundoDia = document.getElementById("form2")
let ejercicioRealizadoSegundoDia2 = document.getElementById("ejercicioRealizadoSegundoDia2")
let pMostrar2 = document.getElementById("mostrarejercicio2")

const botonEjercicio3 = document.getElementById("botonEjercicio3")
let ejercicioTercerDia = document.getElementById("form3")
let ejercicioRealizadoTercerDia2 = document.getElementById("ejercicioRealizadoTercerDia2")
let pMostrar3 = document.getElementById("mostrarejercicio3")



// envio del 2do input

ejercicioPrimerDia.addEventListener(`submit`, (e) => {
    e.preventDefault()
    let respuesta = document.getElementById("ejercicioRealizadoPecho").value;
    let respuesta1 = document.getElementById("ejercicioRealizadoPecho1").value;

    ejercicioRealizadoPecho1.value = ""
    ejercicioRealizadoPecho1.style.borderColor = ""
    pMostrar.style.color = ""
    if (respuesta1 === "") {
        document.getElementById("mostrarejercicio").innerHTML = "porfavor insertar un valor correcto"
        ejercicioRealizadoPecho1.style.borderColor = "red"
        pMostrar.style.color = "red"
        return
    }const historial = { respuesta: respuesta, respuesta1: respuesta1 };
	localStorage.setItem('ejerciciosGuardados1', JSON.stringify(historial));
    document.getElementById("mostrarejercicio").innerHTML = ""
})


// envio del 2do input

ejercicioSegundoDia.addEventListener(`submit`, (e) => {
    e.preventDefault()
    let respuesta = document.getElementById("ejercicioSegundoDia").value;
    let respuesta1 = document.getElementById("ejercicioRealizadoSegundoDia2").value;

   

    ejercicioRealizadoSegundoDia2.value = ""
    ejercicioRealizadoSegundoDia2.style.borderColor = ""
    pMostrar2.style.color = ""
    if (respuesta1 === "") {
        document.getElementById("mostrarejercicio2").innerHTML = "porfavor insertar un valor correcto"
        ejercicioRealizadoSegundoDia2.style.borderColor = "red"
        pMostrar2.style.color = "red"
        return
    } const historial1 = { respuesta: respuesta, respuesta1: respuesta1 };
	localStorage.setItem('ejerciciosGuardados', JSON.stringify(historial1));
    document.getElementById("mostrarejercicio2").innerHTML = ""
})


// envio del 3er input
ejercicioTercerDia.addEventListener(`submit`, (e) => {
    e.preventDefault()
    let respuesta = document.getElementById("ejercicioTercerDia").value;
    let respuesta1 = document.getElementById("ejercicioRealizadoTercerDia2").value;



    ejercicioRealizadoTercerDia2.value = ""
    ejercicioRealizadoTercerDia2.style.borderColor = ""
    pMostrar3.style.color = ""
    e

    if (respuesta1 === "") {
        document.getElementById("mostrarejercicio3").innerHTML = "porfavor insertar un valor correcto"
        ejercicioRealizadoTercerDia2.style.borderColor = "red"
        pMostrar3.style.color = "red"
        return
    }
    const historial2 = { respuesta: respuesta, respuesta1: respuesta1 };
	localStorage.setItem('ejerciciosGuardados2', JSON.stringify(historial2));
    document.getElementById("mostrarejercicio3").innerHTML = ""

})

