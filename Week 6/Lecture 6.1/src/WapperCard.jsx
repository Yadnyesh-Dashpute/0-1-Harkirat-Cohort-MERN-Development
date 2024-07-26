function App(){
  return <div>
  <CardWrapper>
    Hi There
  </CardWrapper>

  </div>
}

// First Type 
// function CardWrapper({innerComponent}){

//   return <div style={{ border: "2px solid black" }}>
//      {innerComponent}
//   </div>
 
//  }

// function TextComponent(){
//   return <div>
//     Hi There
//   </div>
// }

// Second Type 

function CardWrapper({children}){

    return <div style={{ border: "2px solid black" }}>
       {children}
    </div>
   
   }
  
 


export default App
