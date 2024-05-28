import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Plans from '../Components/Pages/Plans/Plans'
import Courses from '../Components/Pages/Courses/Courses'
import AboutUs from '../Components/Pages/AboutUs/AboutUs'
import Contact from '../Components/Pages/ContactUs/Contact'
import Support from '../Components/Pages/SupportUs/Support'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>

            <Route path ='/' element={<Home/>}/>
            <Route path ='/techworld-react' element={<Home/>}/>
            <Route path ='/services' element={<Plans/>}/>
            <Route path ='/courses' element={<Courses/>}/>
            <Route path ='/about' element={<AboutUs/>}/>
            <Route path ='/contact' element={<Contact/>}/>
            <Route path ='/support' element={<Support/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes