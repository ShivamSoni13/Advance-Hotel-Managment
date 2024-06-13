import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode';
import { redirect } from 'react-router-dom';

export default function Scanner_Comp() {
    const [scanResult,setScanResult] =useState(null);
    useEffect(()=>{
    const scanner=new Html5QrcodeScanner('reader',{
        qrbox:{
            width:300,
            height:300,
        },
        fps:10,
    })
   
    scanner.render(success,error);

    function success(result){
        scanner.clear();
        setScanResult(result);
    }
    function error(error){
        //alert('Error Scanning QR')
       console.log(error);
    }
    },[])
  return (
    <div className='w-3/4 bg-white font-bold'>
        {
            scanResult
            ? <div>
                Success : <a href={scanResult}>{scanResult}</a>
            </div>
            :<div id='reader'></div>
        }
    </div>
  )
}
