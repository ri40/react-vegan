import React from 'react';
import Recipe from './Recipe';
import SearchButton from '../components/SearchButton';
import { Box, VStack, Text, SimpleGrid } from '@chakra-ui/react';
const MainCourse = ({ recipes, getRecipe }) => {
  return (
    <VStack>
      <Box h="100px">
        <Text
          bgGradient="linear(to-l, #ca7928, #79ca28)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Main Course
        </Text>
      </Box>
      <SearchButton
        onClick={() => {
          getRecipe('lunch');
        }}
        searchBtn="Get Main Course Recipes"
      />
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Recipe recipes={recipes} />
      </SimpleGrid>
    </VStack>
  );
};

export default MainCourse;
