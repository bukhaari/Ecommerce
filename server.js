const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const helmet = require('helmet')
const express = require('express');
const app = express();

// ----External middlewares----
app.use(bodyParser.json({ extended: true }));
app.use(cors())
app.use(helmet())


app.get('/',(req,res)=>{
    res.send('Welcome to Ecommerce web App')
})

//----connection db----
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true }, ()=> {
    console.log('connect db')
});

//----set on port----
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("listen on the port", port));