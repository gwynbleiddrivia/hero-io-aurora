import React, { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router'

export default function AppDetails() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false), 100)
  },[])       
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data, "sdsd")
  return (
    <>

{loading && 
    <div className="flex gap-2 items-center justify-content">

    <h1 className="text-4xl">Loading..</h1>
    <img src="../../src/assets/logo.png" className="animate-spin w-15 h-15"/>
    
    </div>
    }
    {!loading && <div>
      
      
    <div>App Id {id} here present!!</div>
    <div>
        {data.title}
    </div>     
     
    </div>}    




    </>
  )
}
