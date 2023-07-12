import React from 'react'
import { FaSearch, FaCartPlus, FaStar, FaStarHalf} from "../../../node_modules/react-icons/fa";

import "./navstyle.css";


function Navbar() {
  return (
    <div>
        <nav>
          {/* <button className='OpenMenuBtn' id='OpenMenuBtn' onClick={OpenMenuBtn}>menu</button>
              <button className='CloseMenuBtn' id='CloseMenuBtn' onClick={CloseMenuBtn}>close</button> */}
          <div className="div1">
            <span className="logo">
              <a href={'/'}>Avira<span className="logo-edit">Shop</span></a>
            </span>
            <ul id="navItems" className="hidder">
              <li>
                <a href={'/'}>Home</a>
              </li>
              {/* <li>
                <a href="">About</a>
              </li> */}
              <li>
                <a href={'contact'}>Contact</a>
              </li>
            </ul>
          </div>
          <button><i><FaCartPlus/></i>  Cart </button>
        </nav>
    </div>
  )
}

export default Navbar