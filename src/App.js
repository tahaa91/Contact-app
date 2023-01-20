// import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Paff from  "./Compenent/Paff";
import Pajouter from  "./Compenent/Pajouter";
import Head from  "./Compenent/Head";
import Context from  "./Compenent/Context";
function App() {
  return (
    <Context>

        <Head/>

        
        <Routes>
          <Route path='/' element={<Paff/>}/>
          <Route path='/AJOUTER' element={<Pajouter/>}/>
        </Routes>


    </Context>



  );
}

export default App;
