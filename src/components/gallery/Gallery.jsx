import React from 'react';
import './gallery.css'
import image10 from '../../assets/images/product2.webp'
import image2 from '../../assets/images/product3.webp'
import image3 from '../../assets/images/product7.webp'
import image4 from '../../assets/images/product5.webp'
import image5 from '../../assets/images/poll1.webp'
import image6 from '../../assets/images/product9.webp'
import image7 from '../../assets/images/product8.webp'
import image8 from '../../assets/images/poll.jpg'
import image9 from '../../assets/images/evant/evant3.jpg'
import image1 from '../../assets/images/evant/evant3.jpg'
const Gallery = () => {
  const image = [image1,image2,image3,image4,image5,image6, image7,image8,image9,image10]
  return (
    <div className='gallery'>
      <div className="column">
        {image.map((image, index)=>
        <div className='pics' key={index}>
        <img 
        className= {`image-${index}`} src={image} alt={index} 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        style={{width:"100%", height:"auto"}}/>
        </div>
        )}
      </div>
    </div>
  )
}

export default Gallery