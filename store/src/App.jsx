import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/Navbar'
import { Container } from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Store from './pages/Store'
import Cancel from './pages/Cancel'
import Success from './pages/Success'
import CartProvider from './CartContext'

function App() {
  return (
    <CartProvider>
    <Container>
    <NavbarComponent></NavbarComponent>
    <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='cancel' element={<Cancel />} />
          <Route path='success' element={<Success />} />
        </Routes>
    </BrowserRouter>
    </Container>
    </CartProvider>
  )
}

export default App
