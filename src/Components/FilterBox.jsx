
import { Box, Button, IconButton, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { fetchData } from '../Redux/Products/action'
import { useDispatch } from 'react-redux'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'





const FilterBox = () => {

  const [searchParams, setSearchParems] = useSearchParams();

  const [categoryValue, setCategoryValue] = useState(searchParams.getAll("category") || []);

  const dispatch = useDispatch();

  const categoryHandler = (value) => {

    console.log(value);
    setCategoryValue(value);


  }

  useEffect(() => {

    if (categoryValue) {
      setSearchParems({ category: categoryValue });

      let params = {
        category: searchParams.getAll("category")
      };


      dispatch(fetchData(params));

    }




  }, [categoryValue, setSearchParems, searchParams, dispatch])
















  return (

    <Box>
      <Box display={{ base: "none", md: "block" }} p="1rem 2rem" >
        <Text fontSize="2xl">Filters</Text>
        <Text>Category</Text>
        <CheckboxGroup colorScheme='green' defaultValue={categoryValue} onChange={categoryHandler} >
          <VStack alignItems={"baseline"}>
            <Checkbox value="men's clothing">Men's Clothing</Checkbox>
            <Checkbox value="women's clothing">Women's Clothing</Checkbox>
            <Checkbox value='jewelery'>Jewelery</Checkbox>
            <Checkbox value='electronics'>Electronics</Checkbox>
            <Checkbox value='bags'>Bags</Checkbox>

          </VStack>
        </CheckboxGroup>
      </Box>



      <Box display={{ base: "block", md: "none" }} p="0rem 2rem"     >

        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme='blue'>
             Menu
          </MenuButton>
          <MenuList minWidth='240px'  zIndex={1000} >
            <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
              <MenuItemOption value='asc'>Ascending</MenuItemOption>
              <MenuItemOption value='desc'>Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title='Country' type='checkbox'>
              <MenuItemOption value='email'>Email</MenuItemOption>
              <MenuItemOption value='phone'>Phone</MenuItemOption>
              <MenuItemOption value='country'>Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>


      </Box>
    </Box>
  )
}

export default FilterBox