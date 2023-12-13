import React from 'react'
import './navbar.css';
const Navbar = () => {
  return (
    <nav className='nav'>
      <a href="/" className='title'><h1>Maurya Society</h1></a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li className='active'>
            <a href='/notices'>Notices</a>
        </li>
        <li>
            <a href='/information'>Information</a>
        </li>
        <li >
            <a href='/amenities'>Amenities</a>
        </li>
        <li>
            <a href='/forms'>Forms</a>
        </li>

      </ul>
    </nav>
  )
}
export default Navbar;
