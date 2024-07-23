// State, Components 


// Hook
import { useState } from "react";



function App() {

  const [ count, setCount ] = useState(0);

  // function onClickHandler(){

  //   setCount(count + 1);

  // }

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )

}
// Component

function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>

}

export default App
