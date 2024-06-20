const express = require("express")
const zod = require("zod")
const app = express()

// const schema = zod.array(zod.number())

// email = string => email
// password : atleast 8 letters
// country : "IN", "US"

const schema = zod.object({
    email:zod.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    Kidneys:z.array(z.number())

})

app.use(express.json());

app.post("/health-checkup", function (req,res){
    const Kidneys = req.body.Kidneys

    const response = schema.safeParse(Kidneys)
        res.send({
            response
        })
    })
 
app.listen(3000)