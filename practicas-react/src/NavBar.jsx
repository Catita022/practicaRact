

import { NavLink } from 'react-router-dom';

import {ShoppingCart} from "lucide-react"
import { useContext } from 'react';
import { miContexto } from './Provider/CantCarrito';



function NavBar(){
    const contexto = useContext(miContexto)
    
    return (
        <>
        <nav className="flex gap-4">
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/productos/id'}>productos</NavLink>
            <NavLink to={"/productos/celulares"}>celulares</NavLink>
            <NavLink to={"/productos/electro"}>electro</NavLink>

            <NavLink to={"/carrito"} className="flex items-center gap-2">
            carrito 
            <ShoppingCart/>
            {contexto.cant}
            </NavLink>

        </nav>
        </>

    )
}

export default NavBar;