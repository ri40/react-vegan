import React from 'react';
import { Text, VStack, Box } from '@chakra-ui/react';
const SearchButton = ({ onClick, searchBtn }) => {
	return (
		<button className="search-button" onClick={onClick}>
			{searchBtn}
		</button>
	);
};

export default SearchButton;