import React from "react";
import { useEffect , useState} from 'react';
function Contenedor(props,propsText){

    const [contador,setContador] = useState(props.num)
    const [texto , setTexto]= useState(propsText)

    // console.log('click en el componente')
    useEffect(
        ()=>{
            console.log('click en el useEffect')
        },[]
    )

    // funcionamiento
    const incrementa = ()=>{
        console.log(props)
        return setContador(contador+1)
        
    }
    const decrementa = ()=>{
        if(!contador==0){
            return setContador(contador-1);
        }
        
    }
    const mostrar =()=>{
        setTexto(!texto)
        
    }

    
    
    // muestra del componente
    if(texto===false){
        return(
            <>
                <p className=" text-center text-white   bg-blue-800">{contador}</p>
                <button className="bg-red-950 p-4 mx-3 rounded-md hover:bg-red-300 transition-all duration-1000" onClick={incrementa}>+</button>
                <button className="bg-blue-950 p-4 my-3 rounded-md hover:bg-blue-300" onClick={decrementa}>-</button>
            
                <div className="rounded-sm p-4">
                    <button className="bg-green-300 p-4 mx-3 rounded-md hover:bg-blue-300" onClick={mostrar}>mostrar</button>
                    <p className="bg-white p-3 mx-4 my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quas architecto maiores perspiciatis expedita possimus fugit nam ut eius nulla itaque laborum soluta impedit,
                        distinctio, optio numquam, reprehenderit voluptatibus reiciendis.</p>
                </div>
            </>
        )
        
    }
    return(
        <>
            
            <p className=" text-center text-white   bg-blue-800">{contador}</p>
            <button className="bg-red-950 p-4 mx-3 rounded-md hover:bg-red-300 transition-all duration-1000" onClick={incrementa}>+</button>
            <button className="bg-blue-950 p-4 my-3 rounded-md hover:bg-blue-300" onClick={decrementa}>-</button>
            
            <div className="rounded-sm p-4">
                <button className="bg-green-300 p-4 mx-3 rounded-md hover:bg-blue-300" onClick={mostrar}>mostrar</button>
                    
            </div>
        </>
    )
}

export default Contenedor;