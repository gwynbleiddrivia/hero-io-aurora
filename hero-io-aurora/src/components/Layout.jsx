import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'


export default function Layout() {
  return (
    <div>
        <Header className="w-full"/>
        <Outlet className="min-h-screen"/>
        <Footer className="w-full"/>
    </div>
  )
}
