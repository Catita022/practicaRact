

// Aqui se muestran los datos que mando ProductosContainer

function Productos({ productos }) {
    // console.log(productos)
    // productos.map(()=>{
    //     console.log('productos')
    // })

    return (
        <>
            <section className="grid grid-cols-1 ms:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 xl:grid-cols-6">
                {
                    productos.map((producto, indice) => {
                        console.log(producto)
                        return (
                            <article key={indice} className="bg-white text-black p-4 text-center rounded-md shadow-xl">
                                <h2>{producto.title}</h2>
                                <img src={producto.images[0]} alt={producto.title} />
                                <p>$ {producto.price}</p>
                            </article>
                        )
                    })
                }
            </section>

        </>
    )
}

export default Productos;