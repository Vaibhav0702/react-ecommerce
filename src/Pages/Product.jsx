import { Box, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import FilterBox from '../Components/FilterBox'
import ProductSimple from '../Components/ProductSimple'
import { fetchData } from '../Redux/Products/action'


const Product = () => {

    const products = useSelector((store) => store.ecommerceData.products)


    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();

    useEffect(() => {

        if (products?.length === 0) {

            let params = {
                category: searchParams.getAll("category")
            };


            dispatch(fetchData(params))
        }
    }, [dispatch, products?.length, searchParams])

    // console.log("Products", products)


    return (

        <Box>
            <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}  >
                <Box minWidth={"15rem"} >
                    {/* Filterbox */}

                    <FilterBox />

                </Box>
                <Box>

                    {/* Products */}
                    <Heading as="h3">Products</Heading>
                    <Flex flexWrap="wrap" justifyContent="space-around" >
                        {
                            products.map(product => {
                                return <ProductSimple key={product.id}  id={product.id}   image={product.image} title={product.title} price={product.price} />
                            })
                        }
                    </Flex>


                </Box>
            </Stack>
        </Box>
    )
}
















export default Product


