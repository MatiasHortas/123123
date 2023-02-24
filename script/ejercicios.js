const botonEjercicio = document.getElementById("botonEjercicio")
let ejercicioPrimerDia = document.getElementById("form1")
let ejercicioRealizadoPecho1 = document.getElementById("ejercicioRealizadoPecho1")
let pMostrar = document.getElementById("mostrarejercicio")

let ejerciciosRegistros = []
let ejerciciosRegistrosDia2 = []
let ejerciciosRegistrosDia3 = []

class EjerciciosPrimerDia {
    constructor(ejercicio, kilos, dataid) {
        this.ejercicio = ejercicio
        this.kilos = kilos
        this.dataid = dataid
    }
}

class EjerciciosSegundoDia {
    constructor(ejercicio, kilos) {
        this.ejercicio = ejercicio
        this.kilos = kilos
    }
}

class EjerciciosTercerDia {
    constructor(ejercicio, kilos) {
        this.ejercicio = ejercicio
        this.kilos = kilos
    }
}


const botonEjercicio2 = document.getElementById("botonEjercicio2")
let ejercicioSegundoDia = document.getElementById("form2")
let ejercicioRealizadoSegundoDia2 = document.getElementById("ejercicioRealizadoSegundoDia2")
let pMostrar2 = document.getElementById("mostrarejercicio2")

const botonEjercicio3 = document.getElementById("botonEjercicio3")
let ejercicioTercerDia = document.getElementById("form3")
let ejercicioRealizadoTercerDia2 = document.getElementById("ejercicioRealizadoTercerDia2")
let pMostrar3 = document.getElementById("mostrarejercicio3")



// se realiz un envio de los ejercicios realizados del primer dia

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

    }


    ejerciciosRegistros.push(new EjerciciosPrimerDia(respuesta, respuesta1))
    localStorage.setItem('ejerciciosPrimerDia', JSON.stringify(ejerciciosRegistros));


    document.getElementById("mostrarejercicio").innerHTML = ""
    Toastify({
        text:"Ejercicio " + respuesta + " Cargado en historial",
        duration:2000,
        gravity: "top",
        position: "right",
    }).showToast();
})


// se realiz un envio de los ejercicios realizados del segundo dia

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
    }
    ejerciciosRegistrosDia2.push(new EjerciciosSegundoDia(respuesta, respuesta1))
    localStorage.setItem('ejerciciosSegundoDia', JSON.stringify(ejerciciosRegistrosDia2));
    document.getElementById("mostrarejercicio2").innerHTML = ""
    Toastify({
        text:"Ejercicio " + respuesta + " Cargado en historial",
        duration:2000,
        gravity: "top",
        position: "right",
    }).showToast();
})


// se realiz un envio de los ejercicios realizados del tercer dia
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
    ejerciciosRegistrosDia3.push(new EjerciciosTercerDia(respuesta, respuesta1))
    localStorage.setItem('ejerciciosTercerDia', JSON.stringify(ejerciciosRegistrosDia3));
    document.getElementById("mostrarejercicio3").innerHTML = ""
    Toastify({
        text:"Ejercicio " + respuesta + " Cargado en historial",
        duration:2000,
        gravity: "top",
        position: "right",
    }).showToast();

})