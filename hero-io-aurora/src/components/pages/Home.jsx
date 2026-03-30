import React, { useEffect, useState } from 'react'
import { useLoaderData, Link } from 'react-router'
import AppCard from './AppCard'

export default function Home() {
  const data = useLoaderData()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false), 100)
  },[])  
  return (
  <>
  {loading && 
    <div className="flex gap-2">

    <h1 className="text-4xl">Loading..</h1>
    <img src="/assets/logo.png" className="animate-spin w-15 h-15"/>
    
    </div>
    }
    {!loading && <div>
      
      
    <div className="flex flex-col m-5">
      <div className="Banner1 flex flex-col space-y-5">
        <div className= "items-center flex flex-col">
          <p className="text-7xl font-bold">We Build</p>
          <p className="text-7xl font-bold"> <span className="text-violet-500">Productive</span> Apps</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 font-md">
            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          </p>
          <p className="text-gray-500 font-sm">
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex items-center justify-evenly">
          <a className="flex gap-2 items-center border border-gray-300 px-5 py-2 rounded-md" target="_blank" href="https://play.google.com/store/">
            <img src="/assets/play.jpg" alt="" className="w-10"/>
            <div>Google Play</div>
          </a>
          <a className="flex gap-2 items-center border border-gray-300 px-5 py-2 rounded-md" target="_blank" href="https://www.apple.com/app-store/">
            <img src="/assets/appstore.png" alt="" className="w-10"/>
            <div>App Store</div>
          </a>
        </div>
        <img src="/assets/hero.png" alt="" />
      </div>
      <div className="Banner2 flex flex-col items-center space-y-5 bg-linear-to-r from-homegradient-first to-homegradient-last p-15">
        <div className="text-xl md:text-5xl font-bold text-white whitespace-nowrap">Trusted By Million, Built For You</div>
        <div className="mt-10 flex flex-col gap-10 md:gap-2 md:flex-row justify-between w-full">
          <div className="flex flex-col items-center">
            <p className="text-sm text-white">Total Downloads</p>
            <p className="text-5xl font-bold text-white">29.6M</p>
            <p className="text-sm text-white">21% More Than Last Month</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-white">Total Reviews</p>
            <p className="text-5xl font-bold text-white">906K</p>
            <p className="text-sm text-white">46% More Than Last Month</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-white">Active Apps</p>
            <p className="text-5xl font-bold text-white">132+</p>
            <p className="text-sm text-white">31 More Will Launch</p>
          </div>
        </div>
      </div>
      <div className="Trending flex flex-col items-center mt-5">
        <div className="title flex flex-col items-center">
          <p className="text-5xl mb-5 font-bold">Trending Apps</p>
          <p className="text-sm mb-5">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="appGrid grid grid-cols-1 md:grid-cols-4">
            
            { 
            data.map(app=>(
            <Link to={`/appDetails/${app.id}`} key={app.id}>
              <AppCard id={app.id} title={app.title} img= {`/assets/${app.image}`} downloads={app.downloads} ratingAvg={app.ratingAvg}/>
            </Link>
            ))
            }
        </div>
        <div className="showAll mt-10 bg-linear-to-r from-homegradient-first to-homegradient-last text-white text-xl font-md px-12 py-5 rounded-md">
          <Link to="/apps" className="">
            Show All
          </Link>
        </div>
      </div>
    </div>
     
     
    </div>}
  
  </>
  )
}
