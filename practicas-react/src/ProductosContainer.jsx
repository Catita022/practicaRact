import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productos from "./Productos";


function ProductosContainer() {

    const [estado, setEstado] = useState([])


    const [pagina, setPagina] = useState(1)

    const mipara = useParams();
    

    useEffect(() => {
        if (!mipara.id) {
            fetch('https://dummyjson.com/products/category/smartphones')
                .then(res =>{
                    return res.json()
                } )
                .then((data)=>{
                    
                    setEstado(data.products)
                });

        }else{
            fetch('https://dummyjson.com/products')
            .then((res) => {
                return res.json()
            })
            .then((data) => {

                setEstado(data.products)
            });

        }


        

    }, [mipara.id])

    // pagina

    return (
        <>


            <Productos productos={estado} />

        </>
    )
}

export default ProductosContainer;