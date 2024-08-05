
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
// import { Dashboard } from '



import React, { Suspense } from 'react'

const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Landing = React.lazy(() => import("./components/Landing"))

function app(){
  

  // Suspense API

  return(
      <div>
     <BrowserRouter>
     <Appbar/>

     
      <Routes>
        <Route path="/landing" element={<Suspense fallback={"loading..."}><Landing></Landing></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard></Dashboard></Suspense>} />
      </Routes>
     </BrowserRouter>
     </div>
    
  )  
}

function Appbar(){
  const navigate = useNavigate();

  return (
  <div> 
    <div>
  <button onClick={() => {
    // window.location.href = "/dashboard"
    navigate("/dashboard")
  }}>Dashboard</button>

  <button onClick={() => {
    navigate("/landing")
  }}>Landing</button>
  </div>
  </div>
  )
    
  }
  

export default app