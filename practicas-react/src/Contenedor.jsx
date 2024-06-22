
import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import ProductosContainer from "./ProductosContainer";
import Carrito from './Carrito'
import ItemDetail from "./ItemDetail";

{/* <ProductosContainer /> */ }

function Contenedor() {



    return (
        <>
            <Routes>
                <Route path="/" element={<p>home</p>} />
                <Route path="/productos/:id" element={<ProductosContainer/>}/>
                <Route path="/productos/celulares" element={<ProductosContainer/>}/>
                <Route path="productos/electro" element={<p>electro</p>}/>
                
                <Route path="/carrito" element={<Carrito/>}/>

                <Route path="/item/:id" element={<ItemDetail/>}/>


            </Routes>






        </>
    )
}

export default Contenedor;