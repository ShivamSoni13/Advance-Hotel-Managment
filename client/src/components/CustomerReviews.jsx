import React from 'react'
import r1 from '.././Reviews/r1.png'
import r2 from '.././Reviews/r2.png'
import r3 from '.././Reviews/r3.png'
import r4 from '.././Reviews/r4.png'
import r5 from '.././Reviews/r5.png'
import SimpleImageSlider from "react-simple-image-slider";

export default function CustomerReviews() {
     const images = [
  { url: r1 },
  { url: r2},
  { url: r3 },
  { url: r4 },
  { url: r5 },
];
  return (
    <>
        <div className='hidden sm:flex'>
           <SimpleImageSlider 
        width={"50vw"}
        height={"40vh"}
        images={images}
        showBullets={true}
        //showNavs={true}
        autoPlay={true}
        slideDuration={1}
        style={{border:"5px",borderColor:"white"}}
      />
        </div>
        <div className='flex sm:hidden'>
         <SimpleImageSlider 
        width={"90vw"}
        height={"15vh"}
        images={images}
        showBullets={true}
        //showNavs={true}
        autoPlay={true}
        slideDuration={1}
        style={{border:"5px",borderColor:"white"}}
        />
        </div>
    </>
  )
}
