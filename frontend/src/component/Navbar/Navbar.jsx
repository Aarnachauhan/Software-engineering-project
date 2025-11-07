import React from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import {BiUser} from 'react-icons/bi'
import {FaHome} from 'react-icons/fa'
import { FaCentos } from 'react-icons/fa'
import { useState } from 'react'
const Navbar = () => {
  const[loading, setLoading] = useState(false)
  const navigate=useNavigate()

  const logout=()=>{
    navigate("/login")
    setToken("")
  }

  const handleNavigate= (path)=>{
   setLoading(true);
   setTimeout(()=>{
     setLoading(false) 
      },2000)
      navigate(path)
  }
  return (
    <div>
      {
        loading && (
          <div className='loader-container'>
           <div className='loader'>
            <FaCentos className='loader-icon'/>
            </div>
          </div>


        )
      }
      <nav className="navbar">
        <div><Link to='/'>
        <h2>
             <FaHome className="logo-icon" style={{ marginRight: '8px' }} />
            HostelEase
        </h2>
        </Link></div>
        
        <div className='icons'>
            <div className='profile-group'> 
                <BiUser className='icon'/>
                <div className='dropdown-menu'>
                    <Link to='/login' >  <p className='dropdown-item'>Login/Sign up</p></ Link>
                    <Link to='/oldcomplaints' >
                    <p className='dropdown-item'>Complaints</p>
                    </Link>
                    <p onClick={logout} className='dropdown-item'>LogOut</p>
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar
