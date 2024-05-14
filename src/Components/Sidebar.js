import React from 'react'
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BiSolidCheckCircle } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { HiCog6Tooth } from "react-icons/hi2";
import { GoStarFill } from "react-icons/go";
import { HiMiniFolder } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className='w-64 bg-indigo-950 fixed h-full rounded-3xl'>

      <hr  />
      <ul className='mt-3 text-white'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-1'>
        <Link to="/reportedthreats">
          <a href=""className='px-3'>
          <FiMoreHorizontal className='inline-block w-6 h-6 mr-2 mt-2 bg-yellow-300 rounded text-black'></FiMoreHorizontal>
            Reported Threats
          </a>
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href=""className='px-3'>
          <BiUser className='inline-block w-6 h-6 mr-2 mt-2 bg-indigo-950 rounded text-yellow-300'> </BiUser>
            User Management
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href=""className='px-3'>
          <FiMail className='inline-block w-6 h-6 mr-2 mt-2 bg-indigo-950 rounded text-yellow-300'></FiMail>
            Campaign Creation
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href=""className='px-3'>
          <BiSolidCheckCircle className='inline-block w-6 h-6 mr-2 mt-2 bg-indigo-950 rounded text-yellow-300'> </BiSolidCheckCircle>
            Active Campaign
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href=""className='px-3'>
          <BiSolidDashboard className='inline-block w-6 h-6 mr-2 mt-2 bg-indigo-950 rounded text-yellow-300'> </BiSolidDashboard>
            Leaderboard
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href=""className='px-3'>
          <HiMiniFolder className='inline-block w-6 h-6 mr-2 mt-2 bg-indigo-950 rounded text-yellow-300'> </HiMiniFolder>
            Campaign Results
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href=""className='px-3'>
          <GoStarFill className='inline-block w-6 h-6 mr-2 mt-2 bg-indigo-950 rounded text-yellow-300'> </GoStarFill>
            Previous Campaign
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href=""className='px-3'>
          <HiCog6Tooth className='inline-block w-6 h-6 mr-2 mt-2 bg-indigo-950 rounded text-yellow-300'> </HiCog6Tooth>
            Help
          </a>
        </li>
      </ul>
      <button className='bg-[#EEF7FF] text-[#000000]  rounded-full mt-16 py-3 px-12 m-10 font-bold '>Logout</button>
    </div>
  )
}

export default Sidebar

