import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'


export default function Layout() {
  return (
    <div className="flex flex-col items-center">
        <Header className="w-full"/>
        <main className="min-h-screen">
          <Outlet className=""/>
        </main>
        <Footer className="w-full"/>
    </div>
  )
}
