console.log("POO")

// objeto de js
const woopa_obj = {
    name:"Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}

//azucar sintactica  para abstraer
//Crear una clase
/*
1. como crear una clase
2. como instanciar un objeto de una clase
3. instanciar varios objetos de una misma clase
4. como agregar el constructor para guardar atributos al crear un objeto
5. crear métodos - funciones  delimitar comportamiento de la información - asignar funciones al objeto modelar el comportamiento
*/
class Ajolonauta{
    constructor(name, mission, age,color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }   //instanciar los objetos que se crean de esta clase
    //.this hace referencia a las propiedades del objeto
    sayHello(){
        // return "Hey! Hello"
        return `${this.name} is saying Hello!`
    }
} //es el molde

//diferencia 
class Pokemon{
    constructor(name){
        this.name = name
    }
}

const pikachu = new Pokemon("Pikachu")
console.log(pikachu)

//objeto de JS
const woopa_obj_js = {}
console.log(woopa_obj_js)

//se crea un objeto del molde
const woopa =  new Ajolonauta("Woopa", "Node JS", 18, "Pink") //se instancia un objeto vacio
console.log(woopa)
console.log(woopa.sayHello())

const wooper =  new Ajolonauta("Wooper","java", 53, "blue") //se hace
console.log(wooper.name)
console.log(wooper.sayHello())

// const woopy =  new Ajolonauta() //orientacion a objetos
// console.log(woopy)

// console.log(Ajolonauta)
