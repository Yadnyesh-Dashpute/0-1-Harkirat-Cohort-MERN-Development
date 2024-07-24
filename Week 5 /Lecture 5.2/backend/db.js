const mongoose = require("mongoose")

// mongodb+srv://Cluster1:Admin%40123@cluster1.k1mrpzr.mongodb.net/

mongoose.connect("mongodb+srv://Cluster1:Admin%40123@cluster1.k1mrpzr.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}