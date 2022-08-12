/*First, import the installed packages.*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Create an Express object.
const app = express();

//Connect to the database and log the connection status.
const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PW}@cluster0.rxelvz9.mongodb.net/?retryWrites=true&w=majority`;

async function connect(){
    try{
        mongoose.connect(uri);
        console.log("Connection to MongoDB established.");
    }
    catch(error){
        console.error(error);
    }
}

connect();

//Import the files from the routes folder.
const envelopeRouter = require('./routes/envelope');

//If a user enters '/envelopes' in the URL it will load everything from the file.
app.use('/envelopes', envelopeRouter);
app.use('/delete', envelopeRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
  })

app.listen(3000, () =>{
    console.log("Server started on port 3000.");
});