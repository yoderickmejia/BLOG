
require('dotenv').config();
 const mongoose  = require('mongoose');
const express = require('express');
const app = express();


const desiredPort = process.env.PORT || 3000


    app.listen(desiredPort , ()=> {
        console.log(`server listening in port ${desiredPort}`)
    })

    app.get('/', (req, res )=> {
        res.send("this is a API")
    })

       mongoose.connect("mongodb+srv://ITESA:xip9Dx3N0LfPOtzo@morillo.3hfxypj.mongodb.net/")
       .then(()=>{
        console.log("connected to database!")
       })
       .catch(()=> {
        console.log("connection failed")
       })