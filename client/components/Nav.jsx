import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
 <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/yeah-buddy">Yeah Buddy</Link></li>
      </ul>
 </nav>
  )
}

export default Nav 