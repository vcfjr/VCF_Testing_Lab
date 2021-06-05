const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    setTimeout(function(){console.log("hello")}, 4000)
    res.send("requested");
})

function log(){
    //other processes
}

app.listen(3000 || process.env.PORT, ()=>
{
    console.log("listening...");
})