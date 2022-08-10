/*First, import the installed packages.*/
const express = require('express');
const cors = require('cors');

//Create an Express object.
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
  })

app.listen(3000, () =>{
    console.log("Server started on port 3000.");
});