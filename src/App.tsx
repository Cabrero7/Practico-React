// import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
// import { ComponentsEffect } from "./components/ComponentsEffect/ComponentsEffect"
// import { PrimerComponente } from "./components/primercomponente/PrimerComponente"
// import { FormComponent } from "./components/FormComponent/FormComponent"

import { AppProduct } from "./components/AppProduct/AppProduct"


export const App = () => {



  return (
    <div style={{display:'flex', flexDirection: 'column', gap: "2vh"}}>
    {/* <PrimerComponente text={"Texto propiedades"} color="red" fontSize={5}/>

    <ComponentCounter />

    <ComponentsEffect /> */}

    {/* <FormComponent /> */}

    <AppProduct />

    </div>
  )
} 
