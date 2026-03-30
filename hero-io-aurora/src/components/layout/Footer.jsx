import React from 'react'

export default function Footer() {
  return (
    <div className="bg-[#001931] flex flex-col text-white w-full p-5">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-1">

          <img src="/assets/logo.png" alt="" className="w-10"/>
          <p className="text-white font-bold">HERO.IO</p>
        </div>
          <div className="flex gap-6">
            <img src="/assets/fb.png" alt="" className="w-6 h-6" />
            <img src="/assets/twitter.png" alt="" className="w-6 h-6" />
          </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="items-center justify-center flex w-full">Copyright © 2025 - All right reserved</div>
    </div>
  )
}
