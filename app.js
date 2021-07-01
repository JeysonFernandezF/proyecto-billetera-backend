
const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())


app.use('/api', require('./router'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');
})