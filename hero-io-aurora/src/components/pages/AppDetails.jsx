import React, { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';


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
    {!loading && <div className="">
      
      
    <div className="">
      <div className="top-section flex flex-col md:flex-row gap-5 justify-center">
        <img src={`../../src/assets/${app.image}`} alt="" className="h-full object-cover"/>
        <div className="top-right flex flex-col gap-5 space-y-3">
          <div className="text-5xl font-bold">{app.title}</div>
          <p className="text-gray-500 text-sm">Developed by <span className="text-violet-700">productive.io</span></p>
          <hr className="border-t-2 border-gray-300 my-4" />
          <div className="downraterev flex flex-col md:flex-row gap-5 md:gap-2 justify-between w-full">

            <div className="flex flex-col">
              <img src="../../src/assets/icon-downloads.png" alt="" className="w-10"/>
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="text-5xl font-bold">{app.downloads}</p>
            </div>

            <div className="flex flex-col">
              <img src="../../src/assets/icon-ratings.png" alt="" className="w-10"/>
              <p className="text-sm text-gray-500">Average Ratings</p>
              <p className="text-5xl font-bold">{app.ratingAvg}</p>
            </div>

            <div className="flex flex-col">
              <img src="../../src/assets/icon-review.png" alt="" className="w-10"/>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="text-5xl font-bold">{app.reviews}</p>
            </div>



          </div>

          <button 
            onClick={handleInstall} 
            className={`btn ${installed? "btn-disabled":"btn-success"}`}>
            {installed? "Installed" : `Install Now (${app.size} MB)`}
          </button>




        </div>
      </div>

      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="mid-section flex items-center w-full justify-center">
        <BarChart 
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={app.ratings}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}          
        >
          <XAxis dataKey="name"/>
          <YAxis width="auto"/>
          <Tooltip/>
          <Bar dataKey="count" fill="#8884d8" radius={[10, 10, 0, 0]}/>
          <RechartsDevtools/>
        </BarChart>
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="bot-section">
          <p className="text-xl font-bold">Description</p>
          <div className="text-gray-500 text-sm">{app.description}</div>

      </div>
        

    </div>  
    <ToastContainer/>   
     
    </div>}    




    </>
  )
}
