import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/layout/Layout.jsx'
import './index.css'
import App from './App.jsx'
import Home from './components/pages/Home.jsx'
import AppsHalcyon from './components/pages/AppsHalcyon.jsx'
import Installation from './components/pages/Installation.jsx'
import NotFound from './components/pages/NotFound.jsx'
import AppDetails from './components/pages/AppDetails.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import axios from 'axios'
const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children: [
    {
      index: true,
      path: "/",
      element: <App/>
    },
    {
      path: "home",
      element: <Home/>
    },
    {
      path: "apps",
      element: <AppsHalcyon/>
    },
    {
      path: "installation",
      element: <Installation/>
    },
    {
      path: "appDetails/:id",
      element: <AppDetails/>,
      loader: async ({params}) => {
        const res = await axios.get('/data/appsData.json')
        return res.data.find(app=>app.id===parseInt(params.id)); 
      }
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
