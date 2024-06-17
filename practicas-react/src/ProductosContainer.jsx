import React from "react";
import { useEffect, useState } from "react";
import Productos from "./Productos";
// aqui se buscaran los datos con un fetch 

function ProductosContainer() {
    // este useState guarda los productos
    const [estado, setEstado] = useState([])

    // este useState muestra por categoria
    const [pagina, setPagina] = useState(1)

    useEffect(() => {

        // console.log('pagina '+pagina)
        // console.log('estas en la pagina' +pagina)
        // console.log('------------------------')

        fetch('https://dummyjson.com/products')
            .then((res) => {
                return res.json()})
            .then((data)=>{
                // console.log(data.products)
                setEstado(data.products)
            });

    }, [pagina])

    // const funPag1=()=>{
    //     setPagina(1)
    // }
    // const funPag2 = ()=>{
    //     setPagina(2)
    // }
    // const funPag3 = ()=>{
    //     setPagina(3)
    // }

    return (
        <>

            {/* contenerdor presentacional */}
            <Productos productos={estado}/>
            {/* <button onClick={funPag1}>pagina 1</button>
            <button onClick={funPag2}>pagina 2</button>
            <button onClick={funPag3}> pagina 3</button> */}
        </>
    )
}

export default ProductosContainer;