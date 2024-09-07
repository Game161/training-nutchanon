// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=" w-full  bg-white border-gray-400  shadow-inner rounded-b-xl border-1 ">
      <div className="flex justify-between items-center max-w-screen-3xl ml-5 py-1 ">
      <div className='flex items-center justify-center'><img className='w-16' src="https://img.freepik.com/premium-vector/planet-earth-logo-icon-graphic-elements-your-design-logo-sign-emblem-sticker-isolated-vector_619989-724.jpg?w=360" alt="" />NVC Training Center</div>
      <ul className=" flex py-4 px-6">
        <li className="flex py-2 px-14  rounded-lg hover:bg-slate-500 transition-all">
          <NavLink to="/"  className="flex gap-4">
            <span className="">หน้าหลัก</span>
          </NavLink>
        </li>
        <li className="flex py-2 px-14 rounded-lg hover:bg-slate-500 transition-all">
          <NavLink to="/Course" className="flex gap-4">
            <span className="">หลักสูตรที่เปิดสอน</span>
          </NavLink>
        </li>
       
        <li className="flex py-2 px-14 rounded-lg hover:bg-slate-500 transition-all">
          <NavLink to="/Contact" className="flex gap-4">
            <span className="">ติดต่อ</span>
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar