import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import MenuComp from "../../components/MenuComp"; // Import MenuComp component
import SearchBar from "../../components/SearchBar";
import TableNO from "../../components/TableNO";
import { Cart } from '../../context/OrderContext';

export default function OrderFood() {
  const{table,setTable,setOrder,cart,order}=useContext(Cart);
  const address=useLocation();
  const service=address.pathname.split("/")[1]
  const [showTable, setShowTable] = useState(false);
  const [tableDetails, setTableDetails] = useState({
    table: '',
    phone: '',
    name: '',
  });

  
   useEffect(()=>{
     setTable({table:tableDetails,service:service})

    //console.log(table);

     setOrder({table:table,cart:cart})
    //  console.log(order);

   },[cart])

  const handleTableDetails = () => {
    setShowTable(true);
  };

  const handleSubmit = (formData) => {
    setTableDetails(formData);
    //localStorage.setItem()
    //table and details
    setTable({table:tableDetails,service:service})
    setShowTable(false);
    // Do something with the form data
    console.log(table);
  };

  return (
    <div className='bg-hotel bg-cover bg-no-repeat relative h-screen'>
      <header className='text-center text-black  font-Ubuntu text-3xl py-5 bg-orangeD1'>
        MEJBAN <span className='text-4xl font-bold text-black'>Hotel</span>
      </header>
      <div className='h-85% '>
        <SearchBar />
        <MenuComp service={service}/>
      </div>
      {/* Place order */}
      {tableDetails.table !== '' && tableDetails.phone !== '' && tableDetails.name !== '' ? (
        <NavLink to={'/cafe/cart'} className='bg-orange-500 text-white w-full absolute bottom-5 py-2 text-2xl text-center'>
          Cart
        </NavLink>
      ) : (
        <div className='absolute bottom-5 w-full flex justify-center '>
          <button className='bg-orange-500 text-white w-4/5  py-2 text-2xl rounded-md' onClick={handleTableDetails}>
          Select Room
        </button>
        </div>
        
      )}
      {showTable && (
        <div className='absolute top-0 w-full h-full flex items-center justify-center backdrop-brightness-50'>
          <TableNO onSubmit={handleSubmit} setTableDetails={setTableDetails} tableDetails={tableDetails} />
        </div>
      )}
    </div>
  );
}
