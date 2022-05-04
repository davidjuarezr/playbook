// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) //indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//routes
//methods HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorers', (req, res) => {
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "Explorer1"}
    const explorer2 = {id: 2, name: "Explorer2"}
    const explorers = [explorer1, explorer2]
    //HTTP CODE STATUS: 200
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`GET BY ID Explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "Explorer1"}
    //HTTP CODE STATUS: 200
    res.status(200).json(explorer1)
})

app.post('/v1/explorers/', (req, res) => {
    console.log(`POST Explorers V1 API ${new Date()}`)
    // Agregar la lógica para persisitir
    console.log(req.body) //parámetros del request 
       
    //HTTP CODE STATUS: 200
    res.status(201).json({ message: "Creado exitosamente"})
})

// Con esto iniciamos esta app
app.listen(port, () => {
    console.log(`Èxample app listening on port ${port}`)
})