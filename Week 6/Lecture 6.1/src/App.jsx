import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
      <div>
        <HeaderWithButton></HeaderWithButton>
        <Header title="Harkirrat"></Header><br></br>
        <Header title="Harkirrat2"></Header><br></br>
        {/* <button onClick={updateTitle}>Update The Title</button> */}
      </div>
  )
}


function HeaderWithButton(){
  const [title, setTitle] = useState("My Name is Harkirat")

  function updateTitle(){
    setTitle("My Age Is"+Math.random())
  }

  return <div>
    <header></header>
    <button onClick={updateTitle}>Update the Title</button>
    <Header title={title}></Header><br></br>
  </div>
}

function Header({title}){
  return <b>
    {title}

  </b>
}

export default App
