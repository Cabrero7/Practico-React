import { useState } from "react"
import { FormProduct } from "./FormProduct/FormProduct"
import { Header } from "./Header/header"
import { ListProducts } from "./ListProduct/ListProducts";

interface ItremProduct {
    precio: number;
    imagen: string;
    nombre: string;
}

export const AppProduct = () => {

    const [products, setProducts] = useState<ItremProduct []>([])

    const handleAddProduct = (newItem: ItremProduct) =>{
        setProducts((prev) => [...prev, newItem])
    }

  return (
    <div>

        <Header />
        <h2 className="text-center">Formulario</h2>
        <FormProduct handleAddProduct = {handleAddProduct}/>
        <h2 className="text-center">Productos</h2>
        { products.length > 0 ? 
        <ListProducts arrItems={products}/> : <h3 className="text-center">No hay productos</h3>  }

    </div>
  )
}
