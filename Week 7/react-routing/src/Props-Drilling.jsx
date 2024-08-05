
import { useState } from 'react'
import './App.css'



function app(){
  
  const [count, setCount] = useState(0)

  return(
  <div>
    <Count count={count}/>
    <Buttons count={count} setCount={setCount}></Buttons>
  </div>      
  )
    
  }
  
  function Count({count}){
    return <div>
      {count}
    </div>
  }

  function Buttons({count,setCount}) {
    return <div>
      <button onClick = { () => {
          setCount(count + 1)
      }}>Increses</button>
    
    <button onClick={ () => {
      setCount(count - 1)
    }}>Decreases</button>
    </div>  


  }

export default app
