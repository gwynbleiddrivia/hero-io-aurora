import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import { useLoaderData } from 'react-router'

function App() {
  const data = useLoaderData();
  console.log(data,"App data eita")
  return (
    <>
    <Home/>

    </>
  )
}

export default App
