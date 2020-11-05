const express = require('express') //impport express to the project
const router = express.Router(); //use router option in express

const { contestent } = require('../models/db') //import contestent model from db.js


// GET request from database
router.get('/', (req, res) => {
    contestent.find((err,doc)=> {
        if(err){
            res.send('Error from controller', err)
        }else{
            res.send(doc)
        }
    })

})

// GET request using id
router.get('/:id', (req,res)=> {
    if(!req.params.id){
        res.send(`${req.params.id}, Not found`)
    }else{
        contestent.findById(req.params.id,(err,doc)=>{
            if(err){
                res.send("contestent not found")
            }else{
                res.send(doc)
            }
        })
    }
})

//POST request to the database
router.post('/', (req,res)=> {
    const contestent1 = new contestent({ // creating a new contestent1 object
        name : req.body.name,
        address : req.body.address,
        phone : req.body.phone,
        nic : req.body.nic,
        
    }) 
    contestent1.save().then(()=>{
        res.send(contestent1)
    })
})

//UPDATE requsest using the id 
router.put('/:id', (req,res)=>{
    if(!req.params.id){
        res.send(`${req.params.id}, Not found`)
    }else{

        var contestent2 = {
            name : req.body.name,
            address : req.body.address,
            phone : req.body.phone,
            nic : req.body.nic,
            
        }

        // update the collection find by id 
        contestent.findByIdAndUpdate(req.params.id,{$set:contestent2},{new : true}, (err,doc)=>{
            if(err){
                res.send("Update failed")
            }else{
                res.send(doc)
            }

        } )
    }

})

//DELETE the collection using the id
router.delete('/:id', (req,res)=> {
    if(!req.params.id){
        res.send(`${req.params.id}, Not found`)
    }else{
        contestent.findByIdAndRemove(req.params.id, (err,doc)=>{
            if(err){
                res.send("Delete failed")
            }else{
                res.send(doc)
            }

        } )
    }

})


// export the router for index.js
module.exports = router;