import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route , Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ThankYou from './Pages/Thankyou/thankyou'
import Complaint from './Pages/Complaint/Complaint'
import Footer from './component/Footer/Footer'


export const backend ='http://localhost:4000'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
           <Route path='login' element= {<Login/>}/>
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/thankyou" element={<ThankYou />} />
     
      </Routes>
   
    </div>
  )
}

export default App
