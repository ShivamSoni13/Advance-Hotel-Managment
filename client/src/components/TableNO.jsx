import React, { useEffect } from 'react'

export default function TableNO({setTableDetails,tableDetails,onSubmit,hotel}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(tableDetails);
    }
  };
    return (
    <form className='bg-white w-full mx-5  rounded-sm py-5 flex flex-col items-center font-Ubuntu' onSubmit={handleSubmit}>
        <header className='text-center text-2xl mb-2 font-bold font-serif'>{hotel?"Room Details":"Table Details"}</header>
        <div>
        <h1>Please Enter Your {hotel?"Room":"Table"} No.</h1>
        <input type="number" name='table' value={tableDetails.table} onChange={handleChange} className='border p-2 border-orange-400 ' placeholder='Tabel no./Room No.'/>
        <h1>Enter Your Name</h1>
        <input type="text" name='name' value={tableDetails.name} onChange={handleChange} className='border p-2 border-orange-400' placeholder='Mr./Mrs.'/>
        <h1>Enter your Phone no.</h1>
        <input type="number" name='phone'  value={tableDetails.phone} onChange={handleChange} className='border p-2 border-orange-400' placeholder='10 digit mobile no.'/>
      </div>

    <div className='my-2 w-full flex justify-center'>
    <button className='bg-orangeD1 p-2' type='submit'>Submit</button>
    </div>
    </form>
  )
}

// export default function TableNO({tableNo,setTableNo,phone,setPhone,name,setName,setshowTable,confirmDetails}) {
//   return (
//     <div className='bg-white w-4/5 px-2'>
//         <header className='text-center'>Table. Details</header>
//         <h1>Please Enter Your Table No.</h1>
//         <input type="text" value={tableNo} onChange={(e)=>{
//             setTableNo(e.target.value);
//         }} className='border'/>
//         <h1>Enter Your Name</h1>
//         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className='border'/>
//         <h1>Enter your Phone no.</h1>
//         <input type="text"  value={phone} onChange={(e)=>{setPhone(e.target.value)}} className='border'/>
    
//     <div className='my-2 w-full flex justify-center'>
//     <button className='bg-orangeD1 p-2' onClick={()=>{confirmDetails()}}>Submit</button>
//     </div>
//     </div>
//   )
// }