import React from 'react'
import { millify } from 'millify'

export default function AppCard({id, title, img, downloads, ratingAvg}) {
  return (
    <div className="flex flex-col border border-gray-300 rounded-md m-2 p-2">
        <img src={img} alt="" />
        <div className="text-xl font-bold">
          {title}
        </div>
        <div className="w-full justify-between flex">
                <div className="text-green-700 font-bold flex gap-1 items-center">
                  <img src="../../src/assets/icon-downloads.png" alt="" className="w-5 h-5" />
                  <div>
                    {millify(downloads)}
                  </div>
                </div> 

                <div className="text-orange-700 font-bold flex gap-1 items-center">
                <img src="../../src/assets/icon-ratings.png" alt="" className="w-5 h-5" />
                  <div>
                    {ratingAvg}
                  </div>
                </div>  

        </div>
    </div>
  )
}
