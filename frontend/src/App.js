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
        <Route path='/products/:category' element={ user?<FilterProducts/> : <Login/>}/>
        <Route path='/product/:id' element={ user? <Product/> : <Login/>}/>
        <Route path='/cart' element={user? <Cart/> : <Login/>}/>
        <Route path='/success' element={ user? <Success/> : <Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
