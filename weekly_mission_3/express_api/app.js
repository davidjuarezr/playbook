// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) //indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto iniciamos esta app
app.listen(port, () => {
    console.log(`Èxample app listening on port ${port}`)
})