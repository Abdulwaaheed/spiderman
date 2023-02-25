import React from 'react'
import { Link } from 'react-router-dom';
import "./css/navbar.css"
const Navbar = () => {
  return (
    <div>
       <nav>
          <Link to={"/"}><img id="logo" src="https://i.pinimg.com/originals/05/f0/e7/05f0e7541baf6a834905242c1a7aea34.jpg" alt="" /></Link>
          <ul className="ul_list">
            <li><Link to='/' className="list">Home</Link></li>
            <li><Link to="/about" className="list">About</Link></li>
            {/* <li><Link to='/hero' className="list">Hero Spider</Link></li>
            <li><Link to='/cartoon' className="list">Cartoon</Link></li> */}
            <li><Link to='/movie' className="list">Movie</Link></li>
            <li></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
