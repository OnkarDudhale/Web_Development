import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'


function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </>
  )
}

export default App
