// Count The Number of Requests

const express = require("express")
const app = express()
let numberRequests = 0
app.get("/server-requests", function(req,res) {
    numberRequests++;

    res.json({
        msg: "Number of Requests is: "+numberRequests
    })
})

app.listen(8000)