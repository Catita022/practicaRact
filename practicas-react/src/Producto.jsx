import { useContext } from "react";
import { Link } from "react-router-dom";
// import { miContexto } from "./main";
import { miContexto } from "./Provider/CantCarrito";

function Producto({producto},{indice}) {
   
    const valorContexto = useContext(miContexto)
    console.log(valorContexto.cant +'clicki')
    
    const handleClick = ()=>{
        valorContexto.fn()
    }
    
    return (
        <article key={indice} className="bg-white text-black p-4 text-center rounded-md shadow-xl hover:scale-105 transition-all">
            <img src={producto.images[0]} alt={producto.title} className="aspect-square object-contain" />
            <h2 className="font-bold truncate">{producto.title}</h2>
            <p className="text-gray-400">$ {producto.price}</p>
            <button onClick={handleClick} className="bg-slate-400">Agregar al carrito</button>
            <Link to={'/item/' + producto.id}>
                <button className="bg-blue-300 rounded-sm text-black p-2  ">detalles {valorContexto.cant}</button>
            </Link>

        </article>
    )

}

export default Producto;