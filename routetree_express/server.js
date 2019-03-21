const express = require ('express');
const app = express();

const path = require ('path');
app.use (express.static(path.join(__dirname,'routetree/dist/routetree')));

app.all('*',(req,res,next)=>{
    res.sendFile(path.resolve('./routetree/dist/routetree/index.html'))
});

app.listen(8000);