const express = require ('express');
var bodyParser = require ('body-parser');


var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/task_api');
mongoose.promise = global.Promise;

var TasksSchema = new mongoose.Schema({
    title : String,
    description :{type:String, default:''},
    completed: {type:Boolean,default:false},
    updated_at: Date,

},{timestamp:true})

var Tasks = mongoose.model('Tasks',TasksSchema);

const app = express ();
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public/dist/public'));

app.get ('/',function (req,res){
    res.json()
})

app.post ('/tasks', function (req,res){
    console.log ('post data', req.body)
    

})