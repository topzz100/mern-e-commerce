import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import FilterProducts from './pages/FilterProducts/FilterProducts';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import Register from './pages/Register/Register';
import Success from './pages/Success/Success';

function App() {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ user?<Home/>:<Register/> }/>
        <Route path='/products/:category' element={ user?<FilterProducts/> : <Register/>}/>
        <Route path='/product/:id' element={ user? <Product/> : <Register/>}/>
        <Route path='/cart' element={user? <Cart/> : <Register/>}/>
        <Route path='/success' element={ user? <Success/> : <Register/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
