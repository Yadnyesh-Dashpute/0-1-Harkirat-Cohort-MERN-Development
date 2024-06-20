const express = require("express")
const app = express()
const zod = require("zod")

function validatesInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),

    })

    const response = schema.safeParse(obj)
    console.log(response)
}

validatesInput({
    email:"yd@gmail.com",
    password:"12345678"

})