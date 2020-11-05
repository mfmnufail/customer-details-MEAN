
const mongoose = require('mongoose'); //import mongoose to do CRUD operations

//connect to the localhost:27017 mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/mushCustomers', {
    useNewUrlParser: true,
    useCreateIndex:true
})

// Creating a model for the contestents
const contestent = mongoose.model('contestent', {
    //schema of the model goes here
    name : String,
    address : String,
    phone : String,
    nic : String,
})



// exports the two models to the controllers
module.exports = { contestent}