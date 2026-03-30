import React from 'react'
import { NavLink, Link } from 'react-router'

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full m-2 px-5 gap-5 md:gap-2">
        <Link to={'/home'} className="flex items-center gap-1">
          <img src="/assets/logo.png" alt="" className="w-10"/>
          <div className="text-xl font-bold">HERO.IO</div>
        </Link>
        <ul className="flex flex-col md:flex-row w-full gap-1 text-xl font-md justify-evenly">
            <NavLink className="headerLink" to={'home'}>Home</NavLink>
            <NavLink className="headerLink" to={'apps'}>Apps</NavLink>
            <NavLink className="headerLink" to={'installation'}>Installation</NavLink>
        </ul>

        <a href="https://github.com/gwynbleiddrivia" target="_blank" className="flex items-center bg-linear-to-r from-homegradient-first to-homegradient-last gap-2 px-5 py-3 rounded-sm whitespace-nowrap text-white font-bold flex-shrink-0"
        rel="noopener noreferrer">
          <img src="../../src/assets/github.png" alt=""  className="w-4"/>
          Contribute
        </a>

    </div>
  )
}
