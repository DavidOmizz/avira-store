// import React from 'react'
import { useParams } from "react-router-dom";
// import data from './data';
// import Product from './Product';
import "./style.css";
import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
// import '../../nobootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {Button, Carousel} from 'react-bootstrap'
import ImageCarousel from "./ImageCarousel";

import Navbar from "../Navbar/Navbar";

import { FaCartPlus, FaStar, FaStarHalf} from "../../../node_modules/react-icons/fa";

import { Carousel } from "react-responsive-carousel";

function SingleProduct() {
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const myProduct = data.products.find(
          (product) => product.id === Number(id)
        );
        setProduct(myProduct);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("There was an error", error);
        setIsLoading(false);
      });
  }, [id]);

  const { title, thumbnail, price, category, rating, images,description } = product;

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <>
    <Navbar/>
    <div className="">
      {isLoading && (
        <div>
          <ScaleLoader color="#36d7b7" />
        </div>
      )}

      <div key={product.id} className="product-detail">
        <div className="product-detail-myCarousel">
          <div>
            <img className="product-detail--product-img" src={thumbnail} alt={product.title} />
          </div>
          {/* {carousel goes in here......>>} */}
          {images && images.length > 0 ? (
          images.map((image, index) => (
            <img
              className="product-detail--subImages"
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))
        ) : (
          <>
            <p>No images available</p>
            <div className="loader">
              <ScaleLoader color="orangered" style={{textAlign:'center',justifyContent:'center'}}/>
            </div>
          </>
        )}
        </div>
        <div className="product-detail--texts">
          <h2>{title}</h2>
          <p>{price}</p>
          <h4>AboutProduct</h4>
          <p>{description}</p>
          <p>rating: {rating}</p>
          <button><i><FaCartPlus/></i>  Cart </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default SingleProduct;



   {/* {images && images.length > 0 ? (
          images.map((image, index) => (
            <img
              className="subImages"
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))
        ) : (
          <p>No images available</p>
        )} */}

        {/* <ImageCarousel ImageProduct={images}/> */}


{/* <Carousel
            showArrows={true}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            selectedItem={[currentIndex]}
            onChange={handleChange}
            className="carousel-container"
          >
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <img
                  className="subImages"
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </Carousel> */}