class Mascota { //Definicion de una clase
    //El cosntructor no es más que el molde o la plantilla para los atributos de mis objetos que cree con la clase
    //Instanciar no es más que crear un nuevo objetos
    constructor(nombre,edad,adoptado){
        //this hace referencia a la misma clase
        //Estos son los atributos o propiedades que van compartir todas las mascotas que cree con la clase Mascota
        this.nombre=nombre
        this.edad=edad
        this.adoptado=adoptado
    }
    comer(){
        return "Estoy comiendo"
    }
    saludar(){
        return "Hola, soy una mascota"
    }
}

//Definicion de un objeto sin clases
const princesa = {
    nombre: "Princesa",
    edad: 8,
    adoptado: undefined,
    comer: function(){
        return "Estoy comiendo"
    }
}
const zeus ={
    nombre: "Zeus",
    edad: 1,
    adoptado: undefined
}
zeus.adoptado=true
console.log(princesa)
console.log(zeus)

//Definicion de un objeto con clases
const tara = new Mascota("Tara", 5, true)
const simba = new Mascota("Simba", 4)
console.log(tara)
console.log(simba)

//Acceder a información de los objetos que se crean apartir de clases
//Propiedades
console.log(`¿Tara es adoptada? ${tara.adoptado}`)
//Metodos
console.log(simba.comer())
console.log(tara.saludar())

//Herencia:
class Perro extends Mascota{
    constructor(nombre, edad, adoptado, tamanio){
        //Super es el metodo que va a llamar al contructor de la clase padre
        super(nombre, edad, adoptado)
        this.tamanio=tamanio
    }
    ladrar(){
        return "Guau guau"
    }
    moverse(){
        return "Me muevo en 4 patas"
    }
    //Sobreescritura del metodo saludar
    saludar(){
        return `Hola soy un perro y mi nombre es ${this.nombre}`
    }
}

//Instanciar un clase hijo
const tinny = new Perro("Tinny", 7, true, "Grande")
//Accediendo a metodos de su clase padre
console.log(tinny.comer())
//Accediendo a los metodos de la clase hijo
console.log(tinny.ladrar())
console.log(tinny.saludar())

class Gato extends Mascota{
    constructor(nombre, edad, adoptado, vidas){
        super(nombre, edad, adoptado)
        this.vidas=vidas
    }
    ronronear(){
        return "Rrr..rrr"
    }
    cantidadVidas(){
        return `${this.nombre} tiene ${this.vidas} vidas`
    }
    //Sobreescritura
    saludar(){
        return `Hola! Soy un gato y mi nombre es ${this.nombre}`
    }
}

//Instanciar la clase gato
const iker = new Gato("Iker", 1, true, 7)
console.log(iker)
console.log(iker.cantidadVidas())
console.log(iker.ronronear())
console.log(iker.saludar())

const botas = new Gato("Botas", 5, true, 5)
console.log(botas.cantidadVidas())
console.log(botas.saludar())

class Ave extends Mascota{
    constructor(nombre, edad, color, tamanioPico){
        super(nombre, edad)
        this.color=color
        this.tamanioPico=tamanioPico
        //Plumas inicialmente esta vacio
        this.plumas=null
    }
    cantar(){
        return "Pio pio"
    }
    volar(){
        return "Estoy volando!"
    }
    //Setters y getters
    //Get es el metodo que obtiene algun valor de la clase
    get getTamanioPico(){
        return this.tamanioPico
    }

    //Set es el metodo que permite modificar el valor de alguna propiedad de la clase
    set setPlumas(plumas){
        this.plumas=plumas
    }
    get getPlumas(){
        return this.plumas
    }
}

const pollito = new Ave("Pollito", 3, "Amarillo", "Pequeño")
console.log(pollito.volar())
console.log(pollito.saludar())
console.log(pollito.getTamanioPico)

pollito.setPlumas="Largas"
console.log(pollito.getPlumas)