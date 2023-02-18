require('dotenv').config()
const express = require('express')


const movieRoutes = require('../backend/routes/movies')

//Express app 
const app = express()

//middleware 
app.use(express.json())

app.use('/api/movies', movieRoutes)

app.get('/', (req,res) => {
    res.json({message:"Everything is good"})
})

app.listen(process.env.PORT, () => {
    console.log("Listening on PORT: ", process.env.PORT)
    console.log("Everything is okay");
})
