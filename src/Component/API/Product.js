import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaCartPlus,
  FaStar,
  FaStarHalf,
} from "../../../node_modules/react-icons/fa";
import "../Home/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './style.css'
import {ScaleLoader} from 'react-spinners'
// import data from "./data";
import AOS from 'aos'
import "aos/dist/aos.css";




function Product(props) {

  // try {
  //   fetch('https://dummyjson.co/products')
  //   .then(response => response.json())
  //   .then(data =>{
  //     // console.log(data.products);
  //     setProduct(data.products)
  //   })
  // } catch (error) {
  //   console.log("There was an error");
  // }
  // const loader = document.getElementById("loader");


   // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://dummyjson.com/products');
  //       const jsonData = await response.json();
  //       setData(jsonData.products);
  //     } catch (error) {
  //       console.log('Error occurred while fetching the API:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.products);
        setProduct(data.products);
        setIsLoading(false);
        // if(data){
        //   setLoader('none')
        // }

        AOS.init();
        AOS.refresh();
       
      })
      .catch((error) => {
        console.log('Error occurred while fetching the API:', error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
      <ScaleLoader color="orangered" style={{textAlign:'center',justifyContent:'center'}}/>
      </div>
    )
    
    //<div class="loaders"></div>

  }
  if (!props.productData || props.productData.length === 0) {
    return <div className="loader">
    <ScaleLoader color="orangered" style={{textAlign:'center',justifyContent:'center'}}/>
    </div>;
  }

  return (
    <div>
      <>
        <div className="product-box">
          {props.productData?.map((item) => {
            // console.log(item);
            const{id,title,price,rating,thumbnail,images} = item
            return (
              <div className="product-box-single" key={id} data-aos="zoom-in-up" data-aos-delay="400">
                <div className="product-image-container">
                  <a href={`/product/${id}`}><img
                    src={thumbnail}
                    alt={title}
                    className="product-image"
                  /></a>
                </div>
                <p className="product-title"><a href={`/product/${id}`}>{title}</a></p>
                <p className="product-desc">{item.description.slice(0,20)}...</p>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <p>&#8358;{Math.round(price * 750)}</p>
                  <p>rating:{rating}</p>
                  {
                     images.forEach(function(image) {
                      // console.log(image);
                    })
                  }
                </div>
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
            );
          })}
        </div>

        {/* {
          data.map((item)=>{
            return (
              <div key={item.id}>
                <p>{item.price}</p>
              </div>
            )
          })
        } */}
      </>
    </div>
  );
}

export default Product;

// import React, { useState, useEffect } from 'react';

// function Product() {
//   const [myData, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const api_url = "https://dummyjson.com/products";

//   useEffect(() => {
//     fetch(api_url)
//       .then(response => response.json())
//       .then(data => {
//         setData(data);
//         setIsLoading(false);
//       })
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       {myData && myData.map((item) => (
//         <main key={item.id}>
//           <p>{item.id}</p>
//         </main>
//       ))}
//     </div>
//   );
// }

// export default Product;
