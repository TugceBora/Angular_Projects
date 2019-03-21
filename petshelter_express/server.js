const express = require ('express');
const app = express ();

const bodyParser = require ('body-parser');
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(path.join(__dirname,'petshelter/dist/petshelter')));

const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/pet_db');
mongoose.promise = global.Promise;


const PetSchema = new mongoose.Schema({
    name: {type: String, required:true, minlength:[3, 'name must be 3 character long']},
    type: {type: String, required:true, minlength:[3, 'type must be 3 character long']},
    description: {type: String, required:true, minlength:[3, 'description must be 3 character long']},
    skill1: {type: String},
    skill2:{type: String},
    skill3:{type: String}

},{timestamp:true})


mongoose.model('Pet',PetSchema);
const Pet = mongoose.model('Pet',PetSchema);

app.use(express.static(path.join(__dirname,'petshelter/dist/petshelter')));

app.get ('/api/pets/list',function(req,res){
    console.log('success');
    Pet.find({},function (err,pets){
        res.json(pets)
    })
})

app.post ('/api/pets/new', function (req,res){
    console.log ('post data',req.body);
    Pet.create(req.body, function(err,pet){
        if (err){
            console.log(err);
            res.json({message:false, error:err})
        }
        else {
            res.json({message:true, data:pet})
        }    
    })  
})

app.get ('/api/pets/:id', function (req,res){
    Pet.findById(req.params.id, function(err,pet){
        if (pet){
            res.json(pet);
        } else {
            res.json(false);
        }
    })
})

app.delete ('/api/pets/:id',function (req,res){
    console.log ('pet delete', req.params.id)
    Pet.deleteOne({_id:req.params.id},function (err, data){
        if (err){
            res.json(err);
        } else{
            res.json(true);
        }
    })
})

app.put ('/api/pets/:id',function (req,res){
    Pet.findByIdAndUpdate(req.params.id,req.body,function(err,data){
        res.json(true)
    })
})

app.all ('*',function(req,res,next){
    res.sendFile(path.resolve('./petshelter/dist/petshelter/index.html'))
})



app.listen(8000,function(){
    console.log('listening on port 8000');
    })