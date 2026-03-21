
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Brand from './pages/Brand'
import Ourteam from './pages/Ourteam'



function App() {
  return (
<>
<Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>}/>
  <Route path='/brand' element={<Brand/>}/>
<Route path='/ourteam' element={<Ourteam/>}/>
</Routes>

<Footer/>

</>
  )
}

export default App
