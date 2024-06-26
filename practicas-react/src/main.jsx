import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CantCarrito from './Provider/CantCarrito.jsx'
// import { createContext } from 'react'

// export const miContexto = createContext()
// const Cant = miContexto.Provider
// const valorContexto = {
//   carritoCant: 1,
//   loggenIn: false,
//   fn: () =>console.log('hola')
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CantCarrito>
      {/* <Cant value={valorContexto}> */}
      <App />
      {/* </Cant> */}
    </CantCarrito>
  </BrowserRouter>

)
