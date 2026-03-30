import React, { useState, useEffect } from 'react'

export default function Installation() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false), 100)
  },[])

  const [installedApps, setInstalledApps] = useState([])
  useEffect(()=>{
    const handleStorage = () => {
    const appsStored = localStorage.getItem("installedApps")
    const parsed = appsStored ? JSON.parse(appsStored) : {}
    setInstalledApps(Object.values(parsed))
    
    };
    handleStorage();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);

  },[])
  console.log(installedApps,"eigula")

  const handleUninstall = (e, id) =>{
    e.preventDefault()
    const appsStored = localStorage.getItem("installedApps")
    const parsed = appsStored ? JSON.parse(appsStored) : {}
    delete parsed[String(id)];

    localStorage.setItem("installedApps", JSON.stringify(parsed))
    setInstalledApps(Object.values(parsed))
  }

  return (
    <>
    {loading && 
    <div className="flex gap-2">

    <h1 className="text-4xl">Loading..</h1>
    <img src="../../src/assets/logo.png" className="animate-spin w-15 h-15"/>
    
    </div>
    }
    {!loading && <div>
      
      
    <div>

      <div>Installation</div>
      <div>
        {installedApps.map(app=>(
          <div className="flex w-full justify-between" key={app.id}>

          <div>
            {app.title}
          </div>
          <button className="btn btn-primary" onClick={(e)=>handleUninstall(e, String(app.id))}>Uninstall</button>

          </div>
        ))}
      </div>

    </div>
     
     
    </div>}
    </>
  )
}
