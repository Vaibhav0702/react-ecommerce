import { Box, Button, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

import { DeleteIcon } from "@chakra-ui/icons"
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, deleteProductCart } from '../Redux/Products/action';
import CheckOut from '../Components/CheckOut';


const Cart = () => {



  const cart = useSelector((store) => store.ecommerceData.cart);

  // console.log("cart : ", cart)

  const dispatch = useDispatch()

  const removeProduct = (id) => {
  
    console.log("Going to remove product" , id)

    dispatch(deleteProductCart(id));


  }

 
  const checkOutHandler = () => {
 
    dispatch(addOrder(cart) )

  


  }






  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center"  >Cart</Heading>

      {
        cart.length && cart.map(product => {
          return <CartItem key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} image={product.image} removeProduct={removeProduct} />
        })
      }


      <CheckOut  cart={cart} checkOutHandler={checkOutHandler}   />

    </Box>
  )
}



function CartItem({ title, image, description, price, removeProduct , id }) {

  return (
    <Box border="1px solid red" rounded="lg" width="fit-content" margin="auto" marginBottom="2rem" >

      <Stack direction={{ base: "column", md: "row" }} justifyContent="center" alignItems={"center"}   >
        <Box height={"300px"} width="300px"
          position="relative"
          padding="0 1rem"
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: '80%',
            h: '80%',
            pos: 'absolute',
            top: '50%',
            left: "50%",
            transform: `translate(-50% , -50%)`,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}



        >

          <Image
            rounded={'lg'}
            height={300}
            width={300}
            objectFit={'contain'}
            src={image}
          />

        </Box>

        <Box height={"300px"} width="350px"   >
          <Stack p={4} >
            <Heading as="h3" size="lg"  >{title}</Heading>
            <Box overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}  >


              <Text  > {description} </Text>

            </Box>



            <Text color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>

              ₹{price}


            </Text>

            <Button variant={"solid"} leftIcon={<DeleteIcon />} onClick={()=> removeProduct(id) }  >Remove</Button>

          </Stack>
        </Box>
      </Stack>









    </Box>
  )


}




export default Cart