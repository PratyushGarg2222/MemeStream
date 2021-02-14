const express = require('express');  //Importing express
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect Database
connectDB();

app.get('/', (req,res) => res.send('API Running'));

//Define Routes
app.use('/memes', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000; //Set to evironment variable, default to 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));