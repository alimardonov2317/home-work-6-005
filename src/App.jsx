import './App.css'
import "./reset/reset.css"
import React from 'react'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  )
}

export default App
