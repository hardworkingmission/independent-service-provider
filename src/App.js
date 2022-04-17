import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home'
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import CheckOut from './components/CheckOut/CheckOut';
import RequireAuth from './components/ReauireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>

        <Route path='/sevicedetail/'>
            <Route path=':serviceId' element={
              <RequireAuth>
                 <CheckOut/>
              </RequireAuth>
            } />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
