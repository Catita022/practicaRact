// import { Link } from "react-router-dom";
import Producto from './Producto'



function Productos({ productos }) {


    return (
        <>
            <section className="grid grid-cols-1 ms:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 xl:grid-cols-6">
                {
                    productos.map((producto, indice) => {
                        return (
                            <Producto producto={producto} indice={indice}/>
                        )
                    })
                }
            </section>

        </>
    )
}

export default Productos;