



function Productos({ productos }) {
    

    return (
        <>
            <section className="grid grid-cols-1 ms:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 xl:grid-cols-6">
                {
                    productos.map((producto, indice) => {
                        // console.log(producto)
                        return (
                            <article key={indice} className="bg-white text-black p-4 text-center rounded-md shadow-xl hover:scale-105 transition-all">
                                <img src={producto.images[0]} alt={producto.title} className="aspect-square object-contain"/>
                                <h2 className="font-bold truncate">{producto.title}</h2>
                                <p className="text-gray-400">$ {producto.price}</p>
                                <button className="bg-blue-300 rounded-sm text-black p-2  ">detalles</button>
                            </article>
                        )
                    })
                }
            </section>

        </>
    )
}

export default Productos;