

import { Avatar, Button, Flex } from '@chakra-ui/react'
import React from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'



const Profile = () => {
    return (

        <Flex>
            <Menu>
                <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0} >
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </MenuButton>
                <MenuList>
                    <MenuItem>Cart</MenuItem>
                    <MenuItem>LogIn</MenuItem>
                    <MenuItem>LogOut</MenuItem>

                </MenuList>
            </Menu>
        </Flex>




    )
}

export default Profile