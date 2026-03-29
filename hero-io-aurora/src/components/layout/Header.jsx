import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div>
        <ul className="">
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'apps'}>Apps</NavLink>
            <NavLink to={'installation'}>Installation</NavLink>
        </ul>

    </div>
  )
}
