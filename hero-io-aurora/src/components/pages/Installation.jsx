import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { millify } from "millify";

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
    toast(`${parsed[id].title} uninstalled!`)
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
    <img src="/assets/logo.png" className="animate-spin w-15 h-15"/>
    
    </div>
    }
    {!loading && <div>
      
      
    <div>
      <div className="flex flex-col items-center gap-5 mb-5">
        <div className="text-5xl font-bold">Your Installed Apps</div>
        <p className="text-gray-500 text-sm">Explore All Trending Apps on Market developed by us</p>
      </div>
      <div className="flex w-full justify-between items-center gap-5 mb-5">
        <div className="font-bold">
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
      <div className="gap-5 flex flex-col w-full">
        {sortedApps.map(app=>(
          <div className="flex w-full justify-between border border-gray-500 rounded-md p-5 items-center" key={app.id}>


          <div className="flex">
            <div>
              <img src={`/assets/${app.image}`} alt="" className="w-12"/>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">{app.title}</p>
              <div className="flex gap-5">
                <div className="text-green-700 font-bold flex gap-1 items-center">
                  <img src="/assets/icon-downloads.png" alt="" className="w-5 h-5" />
                  <div>
                    {millify(app.downloads)}
                  </div>
                </div> 
                <div className="text-orange-700 font-bold flex gap-1 items-center">
                <img src="/assets/icon-ratings.png" alt="" className="w-5 h-5" />
                  <div>
                    {app.ratingAvg}
                  </div>
                </div> 
                <div className="text-gray-500">{app.size}MB</div> 
              </div>
            </div>
          </div>

          <button className="btn btn-primary" onClick={(e)=>handleUninstall(e, String(app.id))}>Uninstall</button>

          </div>
        ))}
      </div>

    </div>
     
     
    </div>}
    <ToastContainer/>
    </>
  )
}
