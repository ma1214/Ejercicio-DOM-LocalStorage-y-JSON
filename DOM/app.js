//Como obtener un elemento en documento HTML por medio de los selectores

//document hace referencia al documento HTML
console.log(document.getElementsByTagName("h2")) //Obtener algun elemento HTML por medio de la etiqueta
console.log(document.getElementsByClassName("elemento-selector")) //Obtener algun elemento HTML por medio de las clases
console.log(document.getElementById("principal-title"))

//Para acceder a un elemento en especifico ya sea seleccionando por etiqueta o por clases podemos utilizar nuestra sintaxis de arreglos
console.log(document.getElementsByTagName("li")[2].innerText)

let parrafo = document.getElementById("parrafo")
console.log(parrafo)
parrafo.textContent=`Hola, este es mi primer parrafo por medio del DOM`
console.log(parrafo)
let numUno=15, numDos=26;
parrafo.textContent=`El resultado de la suma es: ${numUno+numDos}`

let botonFormulario = document.getElementById("boton-formulario")

//Con addEventListener podemos crearle eventos a nuestros botones
botonFormulario.addEventListener("click", function () {
    let nombreFormulario = document.getElementById("nombre")
    //value permite obtener el valor que ingresa en una entrada de un formulario
    let parrafoRestulado = document.getElementById("resultadoFormulario")
    parrafoRestulado.textContent=`El nombre es: ${nombreFormulario.value}`
})

//Calculadora con el DOM

//Se crea una variable resultado para guardar los resultados de las operaciones que realicemos
let resultado
//Obtengo por medio del DOM y del ID el elemento botonSumar
let botonSumar=document.getElementById("sumar")

//Cuando se le da click al botonSumar etonces el ejecuta la siguiente funcion
botonSumar.addEventListener("click", function () {
    //Obtener los numeros del formulario por medio del id, pero como el getElement obtiene TODO el elemento (hasta el HTML) y nosotros solo necesitamos el valor, utilizamos la propiedad value para extarer el valor de la entrada
    let numeroUno = document.getElementById("num1").value
    let numeroDos = document.getElementById("num2").value
    //Una vez tengo los datos, realizo la operación suma, pero como el valor de los formularios esta en tipo string, se pasa a tipo entero con el metodo parseInt()
    resultado=parseInt(numeroUno)+parseInt(numeroDos)
    let impresionResultado = document.getElementById("resultadoCalculadora")
    impresionResultado.textContent= `El resultado de la suma es: ${resultado}`
})