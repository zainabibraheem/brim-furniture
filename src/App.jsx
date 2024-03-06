import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'
import Layout from './components/layout'
import Home from './pages/home'
import Shop from './pages/shop'
import AboutPage from './pages/aboutpage'
import Contact from './pages/contact'
import Brief from './components/brief'
import Footer from './components/footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
       <Routes path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='aboutpage' element={<AboutPage/>}/>
        <Route path='contact' element={<Contact/>}/>

       </Routes>
       <Brief />
      <Footer/>
      
      </BrowserRouter>
    </>
  )
}

export default App
