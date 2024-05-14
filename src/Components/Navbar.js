import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/Logo.png';

const Navbar = () => {
  return (
    <div>
      <nav className='bg-yellow-400 rounded'>
      <div className="max-w-7xl mx-auto flex justify-between items-center xl:pl-32 lg:pl-24  xl:pr-52 lg:pr-24 md:px-8 sm:4 px-3 ">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" width={50} height={20}/>
            </Link>
          </div>
         <div>
         <ul className="flex space-x-9 m-2">
              <li>
                <Link to="/">
                  <div className="text-black hover:text-gray-300 py-2 font-semibold font-sans mx-1">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Contact">
                  <div className="text-black hover:text-gray-300 py-2 font-semibold font-sans mx-1">
                    Contact
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <div className="text-black hover:text-gray-300 py-2 font-semibold  font-sans mx-1">
                    About
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Pricing">
                  <div className="text-black hover:text-gray-300 py-2 font-semibold font-sans ">
                  Pricing
                  </div>
                </Link>
              </li>
              </ul>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
