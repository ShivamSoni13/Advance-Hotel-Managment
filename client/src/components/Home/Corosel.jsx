import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../../MejbanHotel/img1.jpg'
import img2 from '../../MejbanHotel/img2.jpg'
import img3 from '../../MejbanHotel/img3.jpg'
import img4 from '../../MejbanHotel/img4.jpg'

export default function Corosel() {
    const images = [
  { url: img1 },
  { url:  img2},
  { url: img3 },
  { url: img4 },
];
  return (
    <>

    <div className='hidden sm:flex'>
          <SimpleImageSlider 
        width={"80vw"}
        height={"100vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={1}
        style={{border:"5px",borderColor:"white"}}
      />
      </div>
    <div className='sm:hidden flex'>
          <SimpleImageSlider 
        width={"90vw"}
        height={"27vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={1}
        style={{border:"5px",borderColor:"white"}}
      />
      </div>
    </>
  )
}
