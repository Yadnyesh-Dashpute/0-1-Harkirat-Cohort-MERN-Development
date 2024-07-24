const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db");
const { title } = require("process");
const cors = require("cors")
const app = express()

app.use(express.json());
app.use(cors({}))

app.post("/todo",async function(req,res){

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})



app.get("/todo",async function(req,res){

    const todos = await todo.find({})

    res.json({
        todos: todos
    })

})

app.put("/completed",async function(req,res){

    const updateLoad = req.body;
    const parseUpdateLoad = updateTodo.safeParse(updateTodo)

    if(!parseUpdateLoad){
        res.status(411).json({
            msg: "You have the wrong inputs",
        })
        return
    }

    await todo.update({
        _id: req.body.id,
    },{
        completed: true
    })
    res.json({
        msg: "Todo Marked as Completed"
    })
})
app.listen(3000)