import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' 
import Hero from './components/Hero'
import Projects from './components/Projects'
import Info from './components/infoPage'
import Resume from './components/Resume'
import Footer from './components/Footer'  // Add this

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Hero/>
            <Info/>
            <Projects/>
            <Footer/>  {/* Add Footer here */}
          </>
        }/>
        <Route path='/resume' element={
          <>
            <Resume/>
            <Footer/>  {/* Add Footer here too */}
          </>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App