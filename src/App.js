
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';
import Footer from './components/pages/Footer/Footer';
import BookNow from './components/pages/BookNow/BookNow';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import RequireAuth from './components/pages/RequireAuth/RequireAuth';
import Blog from './components/pages/Blog/Blog';

function App() {
  return (
    <>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/bookNow' element={
           <RequireAuth>
          <BookNow/>
         </RequireAuth>
        }/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
     </Routes>
     <Footer></Footer> 
    </>
   
  );
}

export default App;
