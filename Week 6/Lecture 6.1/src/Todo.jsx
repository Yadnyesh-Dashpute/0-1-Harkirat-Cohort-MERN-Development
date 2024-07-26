import { useState } from 'react'


let Counter = 0;

function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    title: "Assignment 1",
    description: "Last Date 10 August"
  },{
  id: 2,
  title: "Assignment 2",
  description: "Last Date 11 August"
},{
  id: 3,
  title: "Assignment 3",
  description: "Last Date 12 August"
}]) 


  function addTodo(){
    setTodos([...todos,{
      id: Counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (

    <div>
        
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} /> )}
      </div>
  )
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
