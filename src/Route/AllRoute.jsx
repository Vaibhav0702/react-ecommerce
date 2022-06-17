

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthWrapper from '../Components/AuthWrapper'
import Cart from '../Pages/Cart'
import ErrorPage from '../Pages/ErrorPage'
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

        <Route path='/shoppingcart' element={<AuthWrapper>  <Cart />  </AuthWrapper>} />

        <Route path='/products/:id' element={<ProductDetail />} />

        <Route path='/orders' element={  <AuthWrapper>  <Orders />    </AuthWrapper> } />
        
        <Route path='/login' element={<Login />} />

        <Route path='/error' element={<ErrorPage/>} />


      </Routes>


    </>
  )
}

export default AllRoute