import React from 'react';
// import { useNavigate } from 'react-router-dom';
const RecipeCard = ({ title, image, prepTime }) => {
	// const navigate = useNavigate();



	return (
		<div
			className="recipe-card"
			onClick={() => {
				
				// to click card and take user to recipe instructions url
				// `https://api.spoonacular.com/recipes/324694/analyzedInstructions`
				// usenavigate hook
				// (url to details, passing in id)
			}}
		>
			<h1 className="recipe-title">{title}</h1>
			<img src={image} alt="" width="400px"></img>
			<h3>Ready In Minutes: {prepTime}</h3>
			<br />
		</div>
	);
};

export default RecipeCard;