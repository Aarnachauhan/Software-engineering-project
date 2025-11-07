import React from 'react'
//import Sidebar from './components/Sidebar/Sidebar.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Complaints from './pages/complaints/Complaints'
import List from './pages/List/List'
import { Routes,Route } from 'react-router-dom'
import { useState , useEffect} from 'react'
import Login from './components/Login/Login.jsx'
import { ToastContainer } from 'react-toastify'
import AdminDashboard from './pages/admindash/admindash.jsx'
export const backendUrl= "http://localhost:4000"



const App = () => {

  const [token , setToken] = useState(localStorage.getItem('token' || ""))
  useEffect(()=>{
    localStorage.setItem('token', token)
  },[token])
  return (
    <div className='app-container'>
      {/*<hr className="app-divider" /> */}
      <ToastContainer/>
      {
        token ==="" ? (
          <Login setToken={setToken}/>
        ) : (
          <>
      <div className="app_container">
      <Sidebar setToken={setToken}/>
      <div className="page-content">
        <Routes>
          <Route path='/list' element={<List/>} />
          <Route path='/complaintslist' element={<Complaints/>} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
      </div>
    
          </>
          
        )
      }
      
    </div>
  )

}

export default App
