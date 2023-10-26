//Una API es un intermediario que puede ayudar en la comunicación de dos programas y así puedan compartir información

//Realiza la solicitud con fech a la pagina de JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/users")

//Una vez se hace solicitud a JSONplaceholder tenemos una respuesta
//Esta respuesta se guarda en reponse
//response.json()
.then(response => response.json())
//Cuando ya tenemos esos datos en formato JSON podemos acceder a ellos por medio de data

.then(data => {
    data.forEach(elemento => {
        console.log(`El nombre del usuario es: ${elemento.name}`)
    });
})

//Si ocurre algun error utilizamos catch
.catch(e => console.error(e))

//Hacer un API FETCH que traiga los elementos del comments de jsonplaceholder https://jsonplaceholder.typicode.com/comments e imprimir el siguiente mensaje por cada uno de los elementos en el json
// El correo ${elemento.email} dejo el siguiente mensaje ${elemento.body}

fetch("https://jsonplaceholder.typicode.com/comments")

.then(response => response.json())

.then(comentarios => {
    comentarios.forEach(comentario => {
        console.log(`El correo ${comentario.email} dejo el siguiente mensaje ${comentario.body}`)
    });
})

//API FETCH Para el JSON de datos
fetch("datos.json")
.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos)
    datos.forEach(persona => {
        console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} y su numero de telefono es ${persona.contacto.telefono}`)
    });
})
