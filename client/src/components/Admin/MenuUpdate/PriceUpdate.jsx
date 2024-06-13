import React, { useState } from 'react'

export default function PriceUpdate() {

//const [price,SetPrice]=useState(0);
// const [form,setform]=useState({
//     price:'',
//     id:'',
// });
// const UpdatePriceOnBackend=(e)=>{
//     e.preventDefault();
//     setform(...form,price:)
//     console.log();
// }
  return (
    <div>
        <form action="" className='flex flex-col' >
            <input type="number" placeholder='Enter' className='w-1/2 border'  />
            <button className='border w-1/2  bg-green-500 hover:bg-green-600 mt-2 rounded-md' type='submit'>Submit</button>
        </form>
    </div>
  )
}
