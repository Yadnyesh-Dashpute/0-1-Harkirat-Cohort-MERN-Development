//UseMemo Code 

import { useEffect, useState, useMemo } from "react";

function app(){
  
  // const[count, setCount] = useState(0)

  const [exchange1Data, setexchange1Data] = useState({});
  const [exchange2Data, setexchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  // console.log("rerender")
  
  useEffect(()=> {
 
  // setTimeout(() => {

    setexchange1Data({
      returns: 100
    })

  // }, 1000)
},[])

useEffect(()=> {
 
  // setTimeout(() => {
    setexchange2Data({
      returns: 100
    })
    
  // }, 1000)
},[])

useEffect(() => {
  setTimeout(() => {
    setBankData({
      income: 100
    })
  },5000)

},[] )

  console.log("Before")
  const cryptoReturns = useMemo(()=> {

    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data])
  console.log("After")

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
    hi, There your income Tax {incomeTax}
    </div>
  )
}

export default app;
