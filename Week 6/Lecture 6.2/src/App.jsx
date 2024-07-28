import { useEffect, useState } from 'react'
import axios from "axios"

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response){
      setTodos(response.data.todos)
    })
  }, [])

 
  return (
  
    <div>
      {todos.map(todo => <Todo title = {todo.title} description = {todo.description} ></Todo>)}
    </div>
  )
}
  function Todo({title,description}){
    return <div>
      <h1>
        {title}
        </h1>
      <h3>
        {description}
        </h3>
    </div>
  }

export default App
