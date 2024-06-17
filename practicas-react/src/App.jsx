import Contenedor from './Contenedor.jsx'
import Footer from './Footer.jsx';
import Header from './Header.jsx';


function App(){
  return(
    <>
      <Header/>
      <main className='grow bg-gray-300'>
        <Contenedor num={0} texto={false}/>
      </main>
      
      
      <Footer/>
      
    </>
  )
}

export default App;