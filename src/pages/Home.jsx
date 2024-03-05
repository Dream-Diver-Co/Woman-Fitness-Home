import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import Event from '../components/Event/Event'
import Video from '../components/video/Video'


const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Event/>
      <Video/>
      <Footer/>
    </div>
  )
}

export default Home