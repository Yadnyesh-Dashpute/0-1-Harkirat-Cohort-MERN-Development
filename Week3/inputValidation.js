const express = require("express")
const app = express()

app.use(express.json());

app.post("/health-checkup", function (req,res){
    const Kidneys = req.body.Kidneys
    const KidneyLength = Kidneys.length

    res.send("You Have" + KidneyLength + "Kidneys")
})

app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry Something is Up with our Server"
    })
})


app.listen(3000)