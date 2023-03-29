import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './contexts/Cartcontext'
import { AppProvider } from './contexts/Productcontext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      
   <CartProvider>

      <App />
    </CartProvider>
      
      
    </AppProvider>
    
  </React.StrictMode>,
)
