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

  const [sortSetting, setSortSetting] = useState('none')
  const sortedApps = [...installedApps].sort((a,b) =>  
      sortSetting === 'high' ? b.downloads - a.downloads :
      sortSetting === 'low' ? a.downloads - b.downloads : 
      0
    
  );


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

      <div className="flex w-full justify-between">
        <div>
          {installedApps.length} Installed Apps Found
        </div>
        <div>
          <select 
            value={sortSetting}
            onChange={(e) => setSortSetting(e.target.value)}
            className="border rounded p-1"
          >
            <option value="none">Sort by downloads</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>
      </div>
      <div>
        {sortedApps.map(app=>(
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
