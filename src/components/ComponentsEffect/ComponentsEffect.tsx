import { useEffect, useState } from "react"


export const ComponentsEffect = () => {

    const [state, setState] = useState(false);

    useEffect(()=>{
        console.log("Compponente montado")
        return ()=>{
            console.log("Componente desmontado")
        }
    }, [])

    useEffect(()=>{
        console.log('estoy')
    }, [state])

  return (
    <div>ComponentsEffect
        <p>{state ? "Es-true" : "Es-false"}</p>
        <button onClick={()=>{
            setState(!state)
        }}>
            cambiar State
        </button>

    </div>
  )
}
