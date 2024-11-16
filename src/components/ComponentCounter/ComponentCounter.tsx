import { useState } from "react"

export const ComponentCounter = () => {
    const [Counter, setCounter] = useState<number>(0)
  
    const incrementCounter = ()=> {
        setCounter((prev)=>prev+1)
    }

    const DecrementCounter = ()=> {
        if(Counter > 0){
        setCounter((prev)=>prev-1)
        }
    }
    return (
    <div>

        <h2>valor de counter: {Counter}</h2>

        <button onClick={incrementCounter}>Incrementar</button>
        <button onClick={DecrementCounter}>Decrementar</button>

    </div>
  )
}
