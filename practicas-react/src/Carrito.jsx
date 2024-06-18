

import { useParams } from "react-router-dom";

function Carrito(){
    const params = useParams()
    console.log(params)
    return(
        <>
        <div>
            <h2>carrito</h2>
            <p>no tenés productos</p>

            <form action="">
                <div className="m-2">
                    <label className="m-4">nombre</label>
                    <input type="text" name="nombre"/>
                </div>
                <div className="m-2">
                    <label htmlFor="email" className="m-4">Email</label>
                    <input type="email" name="email" />
                </div>
                <button type="submit" className="bg-red-300 p-4 m-4 ">Enviar</button>
            </form>
        </div>
        </>
    )
}

export default Carrito;