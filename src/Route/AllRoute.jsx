

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthWrapper from '../Components/AuthWrapper'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Orders from '../Pages/Orders'
import Product from '../Pages/Product'
import ProductDetail from '../Pages/ProductDetail'

const AllRoute = () => {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/products' element={<Product />} />

        <Route path='/cart' element={<AuthWrapper>  <Cart />  </AuthWrapper>} />

        <Route path='/products/:id' element={<ProductDetail />} />

        <Route path='/orders' element={  <AuthWrapper>  <Orders />    </AuthWrapper> } />
        
        <Route path='/login' element={<Login />} />



      </Routes>


    </>
  )
}

export default AllRoute