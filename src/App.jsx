import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='w-fll overflow-hidden'>
    
      <Header/>
      <About/>
      <Project/><Testimonials/><Contact/>
    </div>
  )
}

export default App