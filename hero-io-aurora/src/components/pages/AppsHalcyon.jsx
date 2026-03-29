import React, { useState, useEffect } from 'react'

export default function AppsHalcyon() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false), 100)
  },[])    
  return (
    <>
  {loading && 
    <div className="flex gap-2 items-center justify-content">

    <h1 className="text-4xl">Loading..</h1>
    <img src="../../src/assets/logo.png" className="animate-spin w-15 h-15"/>
    
    </div>
    }
    {!loading && <div>
      
      
    <div>Apps</div>
     
     
    </div>}    
    </>
  )
}
