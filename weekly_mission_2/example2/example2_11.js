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
class Ajolonauta{
    constructor(name, mission, age,color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }   //instanciar los objetos que se crean de esta clase
    //.this hace referencia a las propiedades del objeto
} //es el molde

//objeto de JS
const woopa_obj_js = {}
console.log(woopa_obj_js)

//se crea un objeto del molde
const woopa =  new Ajolonauta("Woopa", "Node JS", 18, "Pink") //se instancia un objeto vacio
console.log(woopa)


const wooper =  new Ajolonauta("Wooper","java", 53, "blue") //se hace
console.log(wooper)

// const woopy =  new Ajolonauta() //orientacion a objetos
// console.log(woopy)

// console.log(Ajolonauta)
