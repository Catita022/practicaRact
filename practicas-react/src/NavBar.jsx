

import { NavLink } from 'react-router-dom';

import {ShoppingCart} from "lucide-react"


function NavBar(){
    
    return (
        <>
        <nav className="flex gap-4">
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/productos'}>productos</NavLink>
            <NavLink to={"/sillas"}>sillas</NavLink>
            <NavLink to={"/electro"}>electro</NavLink>

            <NavLink to={"/carrito"} className="flex items-center gap-2">
            carrito
            <ShoppingCart/>
            </NavLink>

        </nav>
        </>

    )
}

export default NavBar;