import logo from './logo.svg';
import './App.css';
import Index from './Component/Home';
import Product from './Component/API/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Component/Contact/Contact';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import SingleProduct from './Component/API/SingleProduct';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div>
      {/* <Index/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='product/:id' element={<SingleProduct/>}/>
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
    // <Product/>
  );
}

export default App;
