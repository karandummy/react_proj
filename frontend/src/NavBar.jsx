import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <ul>
        <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/article'>Article</Link></li>
        </ul>
    </>
  )
}

export default NavBar