
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from './Item.jsx'

function ItemDetail() {

    const [miId, setMiId] = useState([])

    const params = useParams();//para agarrar la url

    useEffect(() => {
        console.log(params.id)
        if(!params.id){
            console.log('productos no encotrado')
        }else{
            fetch(fetch('https://dummyjson.com/products/'+params.id)
            .then(res => res.json())
            .then((data)=>{
                console.log(data)
                setMiId(data);
            }))
            
            
        }
        
    }, [params.id])

    return (
        <>
            <Item producto ={miId}/>
        </>
    )
}

export default ItemDetail;