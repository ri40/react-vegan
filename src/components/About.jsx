import React from 'react';
import { ChakraProvider, theme, Box, Text, Stack } from '@chakra-ui/react';
const About = () => {
	return (
		<ChakraProvider theme={theme}>
			<Stack>
			<Box>
				<Text noOfLines={[1, 2, 3]} fontSize='4xl'>The vegan diet</Text>
				<Text noOfLines={[1, 2, 3]} fontSize='4xl'>A vegan diet contains only plants (such as vegetables, grains, nuts and fruits) and foods made from plants.
				Vegans do not eat foods that come from animals, including dairy products and eggs.</Text>
		</Box></Stack>
</ChakraProvider>
		
	);
};

export default About;