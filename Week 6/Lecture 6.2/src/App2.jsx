import { useEffect, useState } from 'react'
import axios from "axios"

function App() {

  const [counter, setCounter] = useState(1)
  return <div>
    <button onClick={function(){
      setCounter(1)
    }}>1</button>

   <button onClick={function(){
      setCounter(2)
    }}>2</button>

    <button onClick={function(){
      setCounter(3)
    }}>3</button>
    
    <button onClick={function(){
      setCounter(4)
    }}>4</button>
  
    <Todo id={counter} />
  
  </div>

  }

  function Todo({id}){
    const [todo, setTodo] = useState([])

    useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todo?id="+id)
        .then(function(respone){
          setTodo(respone.data.todo)
        })
    }, [id])


    return <div>
      id : {id}
      <h1>
        {todo.title}
      </h1>
      <h4>
        {todo.description}
      </h4>
    </div>
  }

export default App
