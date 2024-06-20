const express = require('express')
const app = express()

app.get("/health-check", function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const KidneyId = req.query.KidneyId;


if(username != "Admin" && password != "pass"){
    res.status(400).json({"msg": "Something up with your Inputs"})
    return
}
    if(KidneyId != 1 && KidneyId != 2){
        res.status(403).json({"msg": "Something up with your Inputs"})
        return
 }

 res.send("Your Kidney is Fine !") 

})
app.listen(3000)

