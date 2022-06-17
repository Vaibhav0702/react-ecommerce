

import {
  Box,
  Flex,
  Text,
  IconButton,

  Stack,
  Collapse,


  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  Icon,

} from '@chakra-ui/icons';

import { BsCart3 } from "react-icons/bs";
import React from 'react'
import Profile from './Profile';
import CartCounter from './CartCounter';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box>

      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />

          <Drawer onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>

               


              </DrawerBody>
            </DrawerContent>
          </Drawer>








        </Flex>




        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to="/"   >
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Logo
            </Text>


          </Link>


          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            {/* <DesktopNav /> */}
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>


          <Link to="/products"   >
            <Button
              display={{ base: "none", md: "block" }}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}

              color={useColorModeValue('gray.800', 'white')}>
              Products
            </Button>


          </Link>


          <Link to="/shoppingcart"    >

            <Box position="relative" padding="0 0.5rem 0 0" >
              <CartCounter />
              <Icon as={BsCart3} boxSize="2rem" />
            </Box>

          </Link>


          <Profile />



        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
    </Box>
  );
}

export default Navbar