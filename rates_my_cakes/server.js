const express = require ('express');
const app = express ();

const bodyParser = require ('body-parser');
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(path.join(__dirname,'cakes/dist/cakes')));

const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/cake_db');
mongoose.promise = global.Promise;

const CakeSchema = new mongoose.Schema({
    baker_name : String,
    url : String,
   comment : String

},{timestamp:true})

mongoose.model('Cake',CakeSchema);
const Cake = mongoose.model('Cake', CakeSchema);

app.get ('/cakes',function(req,res){
    Cake.find({},function (err,cakes){
        res.json (cakes)
    })
   
})

app.post('/cakes',function(req,res){
    console.log ('SERVER > POST /cakes>POSTDATA:',req.body);
    CakeInstance = new Cake();
    CakeInstance.title = req.body.title
    CakeInstance.description = req.body.description
    CakeInstance.qty = req.body.qty
    CakeInstance.price = req.body.price
    CakeInstance.save (function(err){
        if (err){
            console.log(err);
            res.json(err);
        }
        else {
            res.json(CakeInstance);
        }
    })
})



app.listen(8000,function(){
    console.log('listening on port 8000');
    })