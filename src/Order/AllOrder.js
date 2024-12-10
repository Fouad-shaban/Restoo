import React from 'react'
import NavOrder from './NavOrder'
import Footer from '../Footer'
import Order from './Order'
import { CartProvider } from 'react-use-cart'

function AllOrder() {
  return (
    <CartProvider>
        <NavOrder/>
        <Order/>
        <Footer/>
    </CartProvider>
  )
}

export default AllOrder