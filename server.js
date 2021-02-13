const express = require('express');  //Importing express

const app = express();

app.get('/', (req,res) => res.send('API Running'));


const PORT = process.env.PORT || 5000; //Set to evironment variable, default to 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));