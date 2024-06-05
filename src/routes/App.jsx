import './App.css'
import React from 'react'
import Hero from '../components/Hero'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Feature from "../components/Feature"
import MoreFeature from '../components/MoreFeature'
import Testimonials from "../components/Testimonials"
import Unique from '../components/Unique'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
function App() {
  const { isLogin, isSignup, isGenerate } = useSelector((store) => store.loginSignup);

  return (
    <>
      <Navbar />
      {
        !isLogin && !isSignup && !isGenerate ?
          <>
            <Hero />
            <Feature />
            <Unique />
            <MoreFeature />
            <Testimonials />
            <Footer />
          </>
          :
          <Outlet />
      }
    </>
  )
}

export default App

