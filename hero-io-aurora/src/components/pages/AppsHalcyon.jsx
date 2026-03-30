import React, { useState, useEffect } from 'react'
import { useLoaderData, Link, NavLink } from 'react-router'
import AppCard from './AppCard'

export default function AppsHalcyon() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false), 100)
  },[])    
  const data = useLoaderData()
  console.log(data)

  const [query, setQuery] = useState("")
  const filtered = data.filter(app=>app.title.toLowerCase().includes(query.toLowerCase()))

  const handleSearch = (e) => {
    const value = e.target.value 
    setQuery(value)
    setLoading(true)

    setTimeout(()=>{setLoading(false)}, 100)
  }

  return (
    <>
    <div className="flex flex-col m-5">

      <div className="flex flex-col items-center gap-5 m-5">
        <p className="text-5xl font-bold">Our All Applications</p>
        <p className="text-gray-500 text-sm">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>      
      <div className="w-full justify-between flex">
        <div className="font-bold">({data.length}) Apps Found</div>
          <div className="">
            <input 
              type="text"
              value={query}
              placeholder = "Search by typing title here.."
              onChange={handleSearch}
              className="px-4 py-2 rounded-md border"
              />
        </div>
      </div>

    </div>
  {loading && 
    <div className="flex gap-2 items-center justify-content">

    <h1 className="text-4xl">Loading..</h1>
    <img src="../../src/assets/logo.png" className="animate-spin w-15 h-15"/>
    
    </div>
    }
{!loading && 
  <div className="flex flex-col m-5">

    {
      query === "" 
        ? (
          <div className="grid md:grid-cols-4 grid-cols-1">
            {data.map(app => (
              <Link to={`/appDetails/${app.id}`} key={app.id}>
                <AppCard 
                  id={app.id} 
                  title={app.title} 
                  img={`../../src/assets/${app.image}`} 
                  downloads={app.downloads} 
                  ratingAvg={app.ratingAvg}
                />
              </Link>
            ))}
          </div>
        )
        : filtered.length > 0 
          ? (
            <div className="grid md:grid-cols-4 grid-cols-1">
              {filtered.map(app => (
                <Link to={`/appDetails/${app.id}`} key={app.id}>
                  <AppCard 
                    id={app.id} 
                    title={app.title} 
                    img={`../../src/assets/${app.image}`} 
                    downloads={app.downloads} 
                    ratingAvg={app.ratingAvg}
                  />
                </Link>
              ))}
            </div>
          )
          : (
            <div className="w-full flex flex-col justify-center items-center">
              <img src="../../src/assets/App-Error.png" alt="" />
              <p className="text-7xl font-bold">OOPS! APP NOT FOUND</p>
              <p>The App you are requesting is not found in our system, please try another apps</p>
              <div className="showAll mt-10 bg-linear-to-r from-homegradient-first to-homegradient-last text-white text-xl font-md px-12 py-5 rounded-md">
                <button className="" onClick={()=>{
                  setQuery("")
                }}>
                 Go Back
               </button>
              </div>
            </div>
          )
    }

  </div>
}   
    </>
  )
}
