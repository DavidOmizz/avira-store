import React from 'react'
// import Slider from 'react-slick';


function ImageCarousel(props) {
  return (
    <div>

        {/* {
            props.ImageProduct.map((image,index)=>(
              <img className='subImages' key={index} src={image} alt={`Image ${index + 1}`} />
            ))
        } */}

        {props.ImageProduct && props.ImageProduct.length > 0 ?(
          props.ImageProduct.map((image,index)=>(
            <img className='subImages' key={index} src={image} alt={`Image ${index + 1}`} />
          ))
        ) : (
          <p>No images</p>
        )
        }
    </div>
  )
}

export default ImageCarousel