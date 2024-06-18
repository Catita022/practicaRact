
import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import ProductosContainer from "./ProductosContainer";
import Carrito from './Carrito'

{/* <ProductosContainer /> */ }

function Contenedor() {



    return (
        <>
            <Routes>
                <Route path="/" element={<p>home</p>} />
                <Route path="/productos" element={<ProductosContainer/>}/>
                <Route path="/sillas" element={<p>sillas</p>}/>
                <Route path="/electro" element={<p>electro</p>}/>
                
                <Route path="/carrito" element={<Carrito/>}/>


            </Routes>






        </>
    )
}

export default Contenedor;