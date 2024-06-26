import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export const miContexto = createContext();
const Cant = miContexto.Provider;

function CantCarrito(props) {
    const [carritoCant, setCarritoCant] = useState(1)
    const valorContexto = {
        cant: carritoCant,
        loggenIn: false,
        fn: () => {
            setCarritoCant(carritoCant + 1)
        }
    }

    return (

        <>
            <Cant value={valorContexto}>
                {props.children}

            </Cant>

        </>
    )
}

export default CantCarrito;

