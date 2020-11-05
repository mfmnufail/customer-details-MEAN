const express = require('express');
const bodyParser = require('body-parser');
const contestentController = require('./controllers/contestentController')

const cors = require('cors');



const app = express();
app.use(bodyParser.json());
app.use(cors({ origin : "http://localhost:4200"}));

// Set the listening port for 3254 so the url : http://localhost:3254/
app.listen('3000', ()=>{
    console.log("It listning properly on port 3000")
})

//CRUD for contestent in url http://localhost:3254/contestents
app.use('/contestents', contestentController);


