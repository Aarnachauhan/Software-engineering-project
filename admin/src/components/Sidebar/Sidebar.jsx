import React from 'react'
import {NavLink} from 'react-router-dom'
import { IoLogOut } from "react-icons/io5";
import {MdAddShoppingCart, MdFormatListBulletedAdd} from 'react-icons/md'
import { Route,Routes } from 'react-router-dom';
import './sidebar.css'

const Sidebar = ({setToken}) => {
  return (
    <div>
      <div className="sidebar-header">
        <h2>HostelEase </h2>
      </div>


      <div className="sidebar-links">
        <NavLink className='sidebar-link'  to='/list'>
            <MdFormatListBulletedAdd className="sidebar-icon" />
            <p className="sidebar-text">
                List
            </p>

        </NavLink>
        <NavLink className='sidebar-link' to='/complaintslist'>
            <MdAddShoppingCart className="sidebar-icon" />
            <p className="sidebar-text">
                Complaints
            </p>

        </NavLink>
        <button onClick={()=>setToken("")} className="sidebar-link">
            <IoLogOut className="sidebar-icon"/>
             <p className="sidebar-text">
                LogOut
            </p>
        </button>
        
      </div>
    </div>
  )
}

export default Sidebar
