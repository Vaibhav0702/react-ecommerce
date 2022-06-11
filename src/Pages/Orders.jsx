
import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductSimple from '../Components/ProductSimple'
import { fetchOrder } from '../Redux/Products/action'

const Orders = () => {

  const orders = useSelector(store => store.ecommerceData.orders)

//   console.log("orders : " , orders)

  const dispatch = useDispatch();

 useEffect(() => {
    
      dispatch(fetchOrder());

 },[dispatch])






  return (
    <Box>

        <Heading  as="h2" size="xl" textAlign="center"  > My Orders </Heading>

        <Box>
            
            {
                orders.map(product => {

                   return  <ProductSimple  key={product.id}    image={product.image} title={product.title} price={product.price}  />
                })
            }

        </Box>

    </Box>
  )
}

export default Orders