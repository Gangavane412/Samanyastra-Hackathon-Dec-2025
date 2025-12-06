import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './components/Navbar'

import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Education from './components/Education'
import Project from './components/Project'
import Footer from './components/Footer'
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero/>
      <About/>
      <Skill/>
      <Education/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
  
    </div>
  )
}

export default App