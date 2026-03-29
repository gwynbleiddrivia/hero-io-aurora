import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout.jsx'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children: [
    {
      index: true,
      path: "/",
      element: <App/>
    },
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
