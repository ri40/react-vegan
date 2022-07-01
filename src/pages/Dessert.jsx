import React from 'react';
import Recipe from './Recipe';
import SearchButton from '../components/SearchButton';
import { Box, VStack, Text, SimpleGrid } from '@chakra-ui/react';
const Dessert = ({ recipes, getRecipe }) => {
  return (
    <VStack>
      <Box h="100px">
        <Text
          bgGradient="linear(to-l, #ca7928, #79ca28)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Desserts
        </Text>
      </Box>
      <SearchButton
        onClick={() => {
          getRecipe('dessert');
        }}
        searchBtn="Get Desserts Recipes"
      />
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Recipe recipes={recipes} />
      </SimpleGrid>
    </VStack>
  );
};

export default Dessert;
