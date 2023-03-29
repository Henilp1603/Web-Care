
import './App.css'
import AboutPage from './components/AboutPage'
import Contact from './components/Contact'
import FacilityPage from './components/FacilityPage'
import Fotter from './components/Fotter'
import HomePage from './components/HomePage'
import NavB from './components/NavB'
import Post from './components/Post'
import Product from './components/Product'
import ProductList from './components/ProductList'
import ProductSection from './components/ProductSection'
import ReviewPage from './components/ReviewPage'
import products from './data/product.json'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import ProductsPage from './components/ProductsPage'
import DoctorsPage from './components/DoctorsPage'
import DonationPage from './components/DonationPage'
import CartPage from './components/CartPage'
import SingleProduct from './components/SingleProduct'
import SignInPage from './components/SignInPage'
import SignupPage from './components/SignupPage'


function App() {
 

  return (

    <Router  >
      <NavB/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/doctors' element={<DoctorsPage/>} />
        <Route path='/donation' element={<DonationPage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/:id' element={<SingleProduct/>} />
        <Route path='/products/:id' element={<SingleProduct/>} />
        <Route path='/signin' element={<SignInPage/>} />
        <Route path='/signup' element={<SignupPage/>} />

  
      </Routes>
      
      
      {/* <ProductSection/> */}
      
      {/* <Fotter/> */}
      {/* <SignInPage/> */}
      {/* <SignupPage/> */}
    </Router>
    
    

  )
}

export default App
