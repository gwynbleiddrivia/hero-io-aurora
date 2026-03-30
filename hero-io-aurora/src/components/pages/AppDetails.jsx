import React, { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'

export default function AppDetails() {
  
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false), 100)
  },[])       
  const { id } = useParams();
  const app = useLoaderData();
  console.log(app, "sdsd")


  const [installed, setInstalled] = useState(false)
  useEffect(()=>{
    const appsStored = localStorage.getItem("installedApps")
    const parsed = appsStored ? JSON.parse(appsStored) : {}
    parsed[id] ? setInstalled(true) : setInstalled(false) 
  },[id])

  const handleInstall = (e) => {
    e.preventDefault()
    
    const appsStored = localStorage.getItem("installedApps")
    const parsed = appsStored ? JSON.parse(appsStored) : {}
    
    parsed[id] = app;
    localStorage.setItem("installedApps", JSON.stringify(parsed))
    setInstalled(true);

    toast(`${app.title} installed!`)
  }


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
    <div className="">
        <div>
          {app.title}
        </div>
        <button 
          onClick={handleInstall} 
          className={`btn ${installed? "btn-disabled":"btn-primary"}`}>
          {installed? "Installed" : `Install Now (${app.size} MB)`}
        </button>


    </div>  
    <ToastContainer/>   
     
    </div>}    




    </>
  )
}
