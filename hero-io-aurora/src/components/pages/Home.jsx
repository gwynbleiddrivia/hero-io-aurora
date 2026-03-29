import React, { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false), 100)
  },[])  
  return (
  <>
  {loading && 
    <div className="flex gap-2">

    <h1 className="text-4xl">Loading..</h1>
    <img src="../../src/assets/logo.png" className="animate-spin w-15 h-15"/>
    
    </div>
    }
    {!loading && <div>
      
      
    <div>Home</div>
     
     
    </div>}
  
  </>
  )
}
