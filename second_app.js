const express = require('express');
const app = express();
// console.log(app)
let data = require('./MOCK_DATA.json');
// console.log(data)
data.forEach(({first_name})=>{
    let name = first_name
    // return name
    console.log(name)
})

app.get('/', function(req, res){
    data.forEach(({first_name})=>{
        let name = first_name
        // return name
        res.send(name)
    })
   
})
app.listen(2346,function(){
    // data.forEach(({first_name})=>{
    //     let name = first_name
    //     // return name
    //     console.log(name)
    // })
    console.log("welcome to home page")
})