import React from 'react'
import { NavLink } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <div className='w-full justify-center font-bold text-center'>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
       <NavLink to={"/"} className="my-5 text-blue-300">Return back to home page</NavLink>
    </div>
  )
};
  