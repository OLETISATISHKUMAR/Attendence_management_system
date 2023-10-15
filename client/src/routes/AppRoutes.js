import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Signin from '../pages/Signin'
import SignUp from '../pages/SignUp'
import ForgotPassword from '../pages/ForgotPassword'
import Header from '../components/Header'
import Footer from '../components/Footer'
function AppRoutes() {
  return (
    <div>
      <Header />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default AppRoutes