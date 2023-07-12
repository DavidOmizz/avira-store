import React, { useState,useEffect } from "react";
import "./style.css";
import man from "./images/man.png";
import data from "../API/data";

//Icons
import { FaSearch, FaCartPlus, FaStar, FaStarHalf} from "../../../node_modules/react-icons/fa";
import Product from "../API/Product";
// import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Index() {
  
  // const product_data = data
  const [product_data, setProductData] =useState([])
  const [searchKey, setSearchKey]= useState('')


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.products);
      })
      .catch((error) => {
        console.log('Error occurred while fetching the API:', error.message);
      });
  }, []);

  // product_data.map((item)=>{
  //   // console.log(item);
  // })
  // const{id,title,price} = product_data


  // const searchFunction = (item) =>{
  //   console.log(searchKey);
  //   // const lowerCaseTitle = typeof item.title === 'string' ? item.title.toLowerCase() : '';
  //   // const lowerCasePrice = typeof item.price === 'string' ? item.price.toLowerCase() : '';
    
  //   // return lowerCaseTitle.includes(searchKey.toLowerCase()) || lowerCasePrice.includes(searchKey.toLowerCase());
  //   // const getSearchResult = product_data.filter(item=>(item.title.toLowerCase().includes(searchKey.toLowerCase())) || (item.price.toLowerCase().includes(searchKey.toLowerCase())));
  //   // const getSearchResult = product_data.filter(item=>(toString(item.title).includes(searchKey.toLowerCase()) || toString(item.price).includes(searchKey.toLowerCase())))
  //   const getSearchResult = product_data.filter(item => (
  //     toString(item.title).toLowerCase().includes(searchKey.toLowerCase()) ||
  //     toString(item.price).toLowerCase().includes(searchKey.toLowerCase())
  //   ));
  //   setProductData(getSearchResult)
  // }

  const searchFunction = (e) => {
    e.preventDefault();
    if (searchKey.trim() === "") {
      setProductData(data.products);
    } else {
      const getSearchResult = product_data.filter((item) =>
        String(item.title)
          .toLowerCase()
          .includes(searchKey.toLowerCase()) ||
        String(item.category)
          .toLowerCase()
          .includes(searchKey.toLowerCase())
      );
      setProductData(getSearchResult);
    }
  };

  // window.onscroll = function(){scrollFuction};

  // function scrollFuction(){
  //   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     document.getElementById("navbar2").style.top = 0;
  //   }
  //   else {
  //     document.getElementById('navbar2').style.top = "50"
  //   }
  // }

  const initialProductData = [...product_data]

  const filterProdut = (cat) =>{
    const updateList = initialProductData.filter((e)=>e.category === cat);
    setProductData(updateList)
  }

  return (
    <div className="container">
      <header>
        <Navbar/>
      </header>
      <main>
        <section className="search-section">
          <div className="search-section--container">
            <img src={man}></img>
            <div>
              <p>Find Anything</p>
              <form onKeyUp={searchFunction}>
              {/* <form onSubmit={searchFunction}> */}
                <div className="searchbar-box">
                  <input
                    placeholder="Search products,brand and categories..."
                    type="text" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}
                  ></input>
                  <button>
                    <i>
                      <FaSearch />
                    </i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <button onClick={()=>setProductData(product_data)}>All</button>
        <button onClick={()=>filterProdut('smartphones')}>Smart Phones</button>
        <button onClick={()=>filterProdut('laptops')}>laptops</button>
        <button onClick={()=>filterProdut('fragrances')}>fragrances</button>
        {/* <section className="product-box">
          <div className="product-box-single">
            <img src={man}/>
            <p>Tecno Camon 15</p>
            <p style={{display:'flex', justifyContent:'space-between'}}>
              <p>$60</p>
              <p>Items Left: 40</p>
            </p>
            <p><i><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></i></p>
            <button className="product-single-btn">ADD TO CART</button>
          </div>
          <div className="product-box-single">
            <img src={man}/>
            <p>Iphone 14 pro with phone glass and two fast charger</p>
            <p style={{display:'flex', justifyContent:'space-between'}}>
              <p>$40</p>
              <p>Items Left: 40</p>
            </p>
            <p><i><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></i></p>
            <button className="product-single-btn">ADD TO CART</button>
          </div>
          <div className="product-box-single">
            <img src={man}/>
            <p>Iphone 14 pro with phone glass and two fast charger</p>
            <p style={{display:'flex', justifyContent:'space-between'}}>
              <p>$40</p>
              <p>Items Left: 40</p>
            </p>
            <p><i><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></i></p>
            <button className="product-single-btn">ADD TO CART</button>
          </div>
          <div className="product-box-single">
            <img src={man}/>
            <p>Iphone 14 pro with phone glass and two fast charger</p>
            <p style={{display:'flex', justifyContent:'space-between'}}>
              <p>$40</p>
              <p>Items Left: 40</p>
            </p>
            <p><i><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></i></p>
            <button className="product-single-btn">ADD TO CART</button>
          </div>
          <div className="product-box-single">
            <img src={man}/>
            <p>Iphone 14 pro with phone glass and two fast charger</p>
            <p style={{display:'flex', justifyContent:'space-between'}}>
              <p>$40</p>
              <p>Items Left: 40</p>
            </p>
            <p><i><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></i></p>
            <button className="product-single-btn">ADD TO CART</button>
          </div>
          <div className="product-box-single">
            <img src={man}/>
            <p>Iphone 14 pro with phone glass and two fast charger</p>
            <p style={{display:'flex', justifyContent:'space-between'}}>
              <p>$40</p>
              <p>Items Left: 40</p>
            </p>
            <p><i><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></i></p>
            <button className="product-single-btn">ADD TO CART</button>
          </div>
          <div className="product-box-single">
            <img src={man}/>
            <p>Iphone 14 pro with phone glass and two fast charger</p>
            <p style={{display:'flex', justifyContent:'space-between'}}>
              <p>$40</p>
              <p>Items Left: 40</p>
            </p>
            <p><i><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></i></p>
            <button className="product-single-btn">ADD TO CART</button>
          </div>
          <div className="product-box-single">
            <img src={man}/>
            <p>Iphone 14 pro with phone glass and two fast charger</p>
            <p style={{display:'flex', justifyContent:'space-between'}}>
              <p>$40</p>
              <p>Items Left: 40</p>
            </p>
            <p><i><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></i></p>
            <button className="product-single-btn">ADD TO CART</button>
          </div>
        </section> */}
        
        {/* <section className="product-box">
          {
            product_data.map((item)=>{
              const{id,title,price,photo} = item
              return (
                <div className="product-box-single" key={id}>
                  <div className="product-image-container">
                    <img
                      // loading="lazy"
                      src={photo}
                      alt={title}
                      className="product-image"
                    />
                  </div> */}
                  {/* <img loading="lazy" src={item.images[0]}/> */}
                  {/* <p><a href={`/product/${id}`}>{title}</a></p>
                  <p>${price}</p>
                  <p>
                    <i>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalf />
                    </i>
                  </p>
                  <button className="product-single-btn">ADD TO CART</button>
                </div>
              )
            })
          }
        </section> */}

        <section className="product-box">
          {/* <Product /> */}
          <Product productData={product_data} />
          
        </section>
        {/* {product_data.length === 0 && <span>No record found</span>} */}
        {/* {product_data && product_data.length === 0 && <span>No record found</span>} */}

      </main>
    </div>
  );
}

export default Index;


// Redundance codes ------------------------------------- >>>>>>>>
{/* <nav> */}
{/* <button className='OpenMenuBtn' id='OpenMenuBtn' onClick={OpenMenuBtn}>menu</button>
    <button className='CloseMenuBtn' id='CloseMenuBtn' onClick={CloseMenuBtn}>close</button> */}
{/* <div className="div1"> */}
  {/* <span className="logo">
    <a href={'/'}>Avira<span className="logo-edit">Shop</span></a>
  </span> */}
  {/* <ul id="navItems" className="hidder"> */}
    {/* <li>
      <a href={'/'}>Home</a>
    </li> */}
    {/* <li>
      <a href="">About</a>
    </li> */}
    {/* <li>
      <a href={'contact'}>Contact</a>
    </li> */}
  {/* </ul> */}
{/* </div> */}
{/* <button><i><FaCartPlus/></i>  Cart </button> */}
{/* </nav> */}