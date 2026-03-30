import React from 'react'
import { Link } from 'react-router'
export default function NotFound() {
  return (
    <>

            <div className="w-full flex flex-col justify-center items-center">
              <img className="w-full" src="../../src/assets/error-404.png" alt="" />
              <p className="text-7xl font-bold">OOPS! PAGE NOT FOUND</p>
              <p className="text-xl text-gray-500">The page you are looking for is not available</p>
              <div className="showAll mt-10 bg-linear-to-r from-homegradient-first to-homegradient-last text-white text-xl font-md px-12 py-5 rounded-md">
                <Link to="/home" className="" >
                 Go Back
               </Link>
              </div>
            </div>





    </>
  )
}
