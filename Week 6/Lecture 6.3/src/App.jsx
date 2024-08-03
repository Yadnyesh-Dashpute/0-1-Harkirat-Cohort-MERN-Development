import { useEffect, useState } from "react";

function app(){
  
  // const[count, setCount] = useState(0)

  const [exchangeData, setexchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("rerender")
  

  // fetch("https://google.com", async(res)=>{
  //   const json = await res.json();
  //   setBankData({income: 100})
  // })

  useEffect(()=> {
 
  setTimeout(() => {
    setBankData({income: 100})
  }, 3000)

  setTimeout(() => {
    setexchangeData({
      return: 100
    })
  }, 1000)
},[])

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
      {/* <button onClick={function(){
        setCount(count+1);
      }}>Count is {count}</button> */}
    hi, there tax return is {incomeTax}
    </div> 
  )
}

export default app;