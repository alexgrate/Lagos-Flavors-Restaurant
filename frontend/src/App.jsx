import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HeroSlides from './components/Home/LandingSlides'
import NavBar from './components/Nav/NavBar'
import MobileNavBar from './components/Nav/MobileNavBar'
import StatSection from './components/Home/StatSection'
import TodaysSpecials from './components/Home/TodaySpecials'
import Testimonials from './components/Testimonials/Testimonials'
import Rootedintradition from './components/Home/Rootedintradition'
import CTASection from './components/Home/CtaSection'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Reservations from './components/Reservations/Reservations'
import Cart from './components/Cart/Cart'

const Home = () => {
  
  return (
    <>
      <HeroSlides />
      <StatSection />
      <TodaysSpecials />
      <Testimonials />
      <Rootedintradition />
      <CTASection />
    </>
  )
}


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <BrowserRouter> 
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <MobileNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App