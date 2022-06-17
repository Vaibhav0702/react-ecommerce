

import { Avatar, Button, Flex } from '@chakra-ui/react'
import React from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

import { Link } from "react-router-dom"

const Profile = () => {
    return (

        <Flex>

            <Menu>
                <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0} >
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </MenuButton>
                <MenuList zIndex={1000}   >

                    <Link to="/products"   >  <MenuItem>Products</MenuItem></Link>

                    <Link to="/shoppingcart" ><MenuItem>Cart</MenuItem></Link>



                    <Link to="/orders"   >  <MenuItem>My Orders</MenuItem></Link>

                    <Link to="/login"   >  <MenuItem>LogIn</MenuItem></Link>


                    <MenuItem>LogOut</MenuItem>

                </MenuList>
            </Menu>

        </Flex>




    )
}

export default Profile