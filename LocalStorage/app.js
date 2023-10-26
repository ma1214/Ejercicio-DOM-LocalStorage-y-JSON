//Con setItem podemos guardar información en el localStorage

//Variable nombreUsuario con el valor Liliana
let nombreUsuario = "Liliana"
//Se guarda la variable nombreUsuario en el localStorage con la llave "nombre"
localStorage.setItem("nombre", nombreUsuario)

//Definición del arreglo comida
const comida = ["Tamal", "Pescado", "Lechona"]
//Se guarda el arreglo comida en el localStorage con la llave "comidaFavorita"
localStorage.setItem("comidaFavorita", comida)

//Para obtener información del LocalStorage utilizamos el metodo getItem
//Se guarda la información del localStorage en la variable datoGuardad
let datoGuardado = localStorage.getItem("comidaFavorita")

//DOM
//Traer el elemento con el id "comida" y guardarlo
let parrafoComida = document.getElementById("comida")
//Le añadimos el datoGuardado al parrafoComida
parrafoComida.textContent = `La comida favorita de Liliana es: ${datoGuardado}`

//Ejercicio formulario con JSON - DOM - LocalStorage

//Guardar todos los elementos del documento HTML que necesito para el ejercicio
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let fechaNacimiento = document.getElementById("fecha")
let botonFecha = document.getElementById("enviar")

class Usuarios{
    constructor(nombre, apellido, fecha){
        this.nombre=nombre
        this.apellido=apellido
        this.fecha=fecha
    }
}

botonFecha.addEventListener("click", function (){
    let valorNombre = nombre.value
    let valorApellido = apellido.value
    let valorFecha = fechaNacimiento.value

    const user = new Usuarios(valorNombre, valorApellido, valorFecha)
    let usuarios = []

    let localUsuarios = localStorage.getItem("usuarios")
    //Si localUsuarios no esta vacio el cumple if
    if(localUsuarios){
        usuarios = JSON.parse(localUsuarios)
    }
    usuarios.push(user)
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    alert("Usuario registrado")
})

const mostrarUsuarios = function (){
    let usuarios = []
    let localUsuarios = localStorage.getItem("usuarios")
    if(localUsuarios){
        usuarios = JSON.parse(localUsuarios)
    }
    let listaUsuarios = document.getElementById("listar-usuarios")
    usuarios.forEach(usuario => {
        let datoUsuario = document.createElement("li")
        datoUsuario.textContent = `Nombre: ${usuario.nombre} - Apellido: ${usuario.apellido} - Fecha nacimiento: ${usuario.fecha}`
        //appendChild permite agregar un elemento HTML desde JavaScript
        listaUsuarios.appendChild(datoUsuario)
    })
}

mostrarUsuarios()