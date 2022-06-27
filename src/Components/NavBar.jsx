import React from 'react'
import {
    Outlet,
    Link
  } from "react-router-dom";


const NavBar = () => {
  return (
    <>
    <nav className='nav'>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      </>
  )
}

export default NavBar