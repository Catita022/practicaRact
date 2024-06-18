import React from "react";
import { useEffect, useState } from "react";
import Productos from "./Productos";


function ProductosContainer() {
    
    const [estado, setEstado] = useState([])

    
    const [pagina, setPagina] = useState(1)

    useEffect(() => {

       

        fetch('https://dummyjson.com/products')
            .then((res) => {
                return res.json()})
            .then((data)=>{
                
                setEstado(data.products)
            });

    }, [pagina])

    

    return (
        <>

            
            <Productos productos={estado}/>
            
        </>
    )
}

export default ProductosContainer;