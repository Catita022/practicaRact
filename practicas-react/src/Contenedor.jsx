import React from "react";
import { useState } from "react";
import ProductosContainer from "./ProductosContainer";


function Contenedor() {

    const [isDesktop,setIsDesktop] = useState(false);


    // window.addEventListener('resize',(event)=>{
    //     console.log(event);
    //     console.log('resize');
    // })
    window.addEventListener('resize',()=>{
        // console.log();
        // console.log('resize');
        const ancho = window.innerWidth;
        // console.log(ancho +' el ancho de mi pantalla');
        if(ancho>1000){
           setIsDesktop(true)
        }else{
            setIsDesktop(false);
        }
    })
    
    return (
        <>

            

            <ProductosContainer />


        </>
    )
}

export default Contenedor;