import React from 'react'

export default function AppCard({id, title, img, downloads, ratingAvg}) {
  return (
    <div className="flex flex-col border border-grey m-2">
        <img src={img} alt="" />
        <div>{title}</div>
        <div className="w-full justify-between flex">
            <div>{downloads}</div>
            <div>{ratingAvg}</div>
        </div>
    </div>
  )
}
