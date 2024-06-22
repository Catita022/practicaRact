

function Item({producto}) {
    console.log(producto.id)
    return (
        <>

            {
               <section className="  text-center p-4">
                    <h2 className="text-xl">{producto.title}</h2>
                    <p>{producto.price}</p>
                    <img  className='w-48'  src={producto.images} alt={producto.title} />
                    <p className="lg">{producto.description}</p>

               </section>
            }
            
        </>
    )
}

export default Item;