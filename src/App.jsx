import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'
import Layout from './components/layout'
import Home from './pages/home'
import Shop from './pages/shop'
import AboutPage from './pages/aboutpage'
import Contact from './pages/contact'
import Brief from './components/brief'
import Footer from './components/footer'
import Cart from './pages/cart'
import ProductDetails from './pages/productDetails'
import CollectionDetails from './pages/collectionDetails'
import BestsellerDetails from './pages/bestsellerDetails';
import { CartProvider } from './components/cartContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='aboutpage' element={<AboutPage />} />
            <Route path='contact' element={<Contact />} />
            <Route path='cart' element={<Cart />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/collection/:id" element={<CollectionDetails />} />
            <Route path='/bestseller/:productId' element={<BestsellerDetails />} />
          </Routes>
          <Brief />
          <Footer />
        </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
