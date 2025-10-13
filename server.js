const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
   console.log("here") 
})


app.get('/books/', (req, res) => {
   console.log("here") 
})

app.listen(port)
