import React, { useState, useEffect } from 'react'
import { useLoaderData, Link } from 'react-router'
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
          <div className="w-full justify-between flex">
        <div>app number: {data.length}</div>
        <div>
          <input 
            type="text"
            value={query}
            placeholder = "Search by typing title here.."
            onChange={handleSearch}
             />
        </div>
      </div>
  {loading && 
    <div className="flex gap-2 items-center justify-content">

    <h1 className="text-4xl">Loading..</h1>
    <img src="../../src/assets/logo.png" className="animate-spin w-15 h-15"/>
    
    </div>
    }
    {!loading && 
    
    <div className="flex flex-col">
        

      <div className="grid grid-cols-4">
        {query==="" 
          ? data.map(app=>(
            <Link to={`/appDetails/${app.id}}`} key={app.id}>
              <AppCard id={app.id} title={app.title} img= {`../../src/assets/${app.image}`} downloads={app.downloads} ratingAvg={app.ratingAvg}/>
            </Link>
        )) 
          : 
          ( (filtered.length > 0) 
            ?
            filtered.map(app=>(
            <Link to={`/appDetails/${app.id}}`} key={app.id}>

              <AppCard id={app.id} title={app.title} img= {`../../src/assets//${app.image}`} downloads={app.downloads} ratingAvg={app.ratingAvg}/>
            </Link>
              ))
            :
            <div>
              <img src="../../src/assets/App-Error.png" alt="" className="w-full"/>
            </div>
          )
        }        

      </div>
      
    </div>}    
    </>
  )
}
