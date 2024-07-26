import React, { useEffect, useState } from 'react';

function App(){

  const [todos, setTodos] = useState([])

  useEffect( () => {
    setInterval( () => {

    
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (res) => {
      const json = await res.json()
      setTodos(json.todos)
    }) }, 1000)
  }, [])
  
  return <div>
    {todos.length}

    <h1>ToDo List</h1>
      {todos.map(todo => <Todo key={todo.id} title = {todo.title} description = {todo.description} /> )}
  </div>
  
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
  
}

export default App
