import { useState } from 'react'

import './App.css'
import { Nav } from './components/Nav';
import { Card } from './components/Card';
import { Carousel } from './components/Carousel';
function App() {


  return (
    <>
      <Nav/>
      <Card/>
      <Carousel/>
    </>
  )
}

export default App
