

import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../Redux/Products/action';

const CartCounter = () => {

    const cart = useSelector((store) => store.ecommerceData.cart);

    // console.log("cart : ", cart)


   const dispatch = useDispatch();

   useEffect(()=>{

    if(cart?.length === 0){
        dispatch(fetchCart());
    }

   },[dispatch , cart?.length ])
     


    return (
        <Box textColor="white" borderRadius="50%" width="20px" textAlign="center" paddingBottom="3px" backgroundColor="black" position="absolute" right="0" top="0"   >
            {
                cart?.length ? cart.length : 0
            }
        </Box>
    )
}

export default CartCounter