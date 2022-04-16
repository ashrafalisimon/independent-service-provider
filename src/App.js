
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';

function App() {
  return (
    <>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
     </Routes> 
    </>
  );
}

export default App;
