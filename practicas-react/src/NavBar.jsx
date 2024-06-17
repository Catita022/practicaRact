
function NavBar(){
    return(
        <>
            <nav className=" flex justify-between" >
                <ul className="flex gap-4">
                    <li><a className="p-4" href="#">home</a></li>
                    <li><a className="p-4" href="#">productos</a></li>
                    <li><a className="p-4" href="#">mesa</a></li>
                    <li><a href="#">silla</a></li>
                    <li><a href="#">nosotros</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;