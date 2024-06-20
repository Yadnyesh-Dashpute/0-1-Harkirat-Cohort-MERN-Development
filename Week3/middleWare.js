const express = require("express")
const app = express()


function userMiddleWare(req,res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "Admin" && password != "pass"){
        res.status(403).json({
            msg: "Incorrect Inputs",
        })
    }else{
        next();
    }
}

function KidneyIdMiddleWare(req,res, next){
    const kidneyId = req.query.KidneyId;

    if(kidneyId != 1 || kidneyId != 2){
        res.status(411).json({
            msg: "Incorrect Inputs",
        })
    }else{
        next();
    }
}

app.get("/health-checkup", userMiddleWare, KidneyIdMiddleWare, function(req,res){

    res.send("Your Kidney is Healthy")


})

app.listen(3000)