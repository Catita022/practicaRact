
import { Link, Routes ,Route} from "react-router-dom";
import NavBar from "./NavBar"

function Header(){

    return(
        <>
            <header className=" flex justify-between p-4">
                <h1 className="text-2xl font-bold">logo</h1>
                <Routes>
                    <Route path="/productos" element={<input/>}/>
                </Routes>
                
                <NavBar/>
            </header>
            
        </>
    )
}

export default Header;