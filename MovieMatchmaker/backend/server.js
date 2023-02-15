require('dotenv').config()
const express = require('express')


//Express app 
const app = express()

//middleware 
app.use(express.json())

app.get('/', (req,res) => {
    res.json({message:"Everything is good"})
})


app.listen(process.env.PORT, () => {
    console.log("Listening on PORT: ", process.env.PORT)
    console.log("Everything is okay");
})
