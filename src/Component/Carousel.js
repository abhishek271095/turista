import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Carosal.css';
import Button from 'react-bootstrap/Button'
import { Zoom } from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';

const slideImages = [
  '../Banner/wall1.jpg',
  '../Banner/wall5.jpg',
  '../Banner/wall4.jpg'
];

const Cerosal = ()=>{

    return(
        <div>
<Fade>
          <div className="each-slide">
            <div className="d-flex align-items-center justify-content-center" style={{'backgroundImage': `url(${slideImages[0]})`, 'height': `100vh`, 'backgroundSize': `cover`,
  'backgroundBlendMode': `darken`, 'backgroundColor': `rgba(23, 8, 228, 0.856)`, 'backgroundAttachment': `fixed`}}>
        
             <h1 className="text-light display-1"  > BEACH WATCH  </h1>      
            </div>
          </div>
          <div className="each-slide">
            <div className="d-flex align-items-center justify-content-center" style={{'backgroundImage': `url(${slideImages[1]})` , 'height': `100vh` , 'backgroundSize': `cover`,
  'backgroundBlendMode': `darken`, 'backgroundColor': `rgba(23, 8, 228, 0.856)`, 'backgroundAttachment': `fixed`}}>
                
                <h1 className="text-light display-1"  > Nurture Amidst Nature </h1>

            </div>
          </div>
          <div className="each-slide">
            <div className="d-flex align-items-center justify-content-center" style={{'backgroundImage': `url(${slideImages[2]})`, 'height': `100vh`, 'backgroundSize': `cover`,
  'backgroundBlendMode': `darken`, 'backgroundColor': `rgba(23, 8, 228, 0.856)`, 'backgroundAttachment': `fixed`}}>
               
               <h1 className="text-light display-1"  > Wekcome to Andaman and Nicobar Islands </h1>

            </div>
          </div>
          </Fade>


</div>
    )
}
export default Cerosal;