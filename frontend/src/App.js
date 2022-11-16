import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound404 from './components/NotFound404';

import './components/css/Navbar.css'
import './components/css/NotFound404.css'

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-found-404" element={<NotFound404 />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Navigate to="not-found-404" />} />
        </Routes>
      </BrowserRouter>
    </div>

  );

}

export default App;
