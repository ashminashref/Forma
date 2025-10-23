import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Store from './Pages/Store'
import About from './Pages/About'
import { CartProvider } from './Components/Reducer/CartContext'
import { AuthProvider } from './Components/Reducer/Auth/UseAuth' 
import ProductDetail from './Components/Store/ProductDetail'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <AuthProvider> 
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Store' element={<Store />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App