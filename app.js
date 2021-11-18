const express = require('express');
const app = express();
// console.log(app)
app.get('/', function(req, res){
    res.send("welcome to home page")
})
app.listen(2345,function(){
    console.log("From First api")
})