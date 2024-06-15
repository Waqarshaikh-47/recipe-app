import React from 'react';
import './RecipeDetails.css';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h1 className="title">{recipe.title}</h1>
      <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      {/* <p className="summary" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p> */}
      
      <div className="tags">
        <span className={`tag ${recipe.vegetarian ? 'active' : ''}`}>Vegetarian</span>
        <span className={`tag ${recipe.vegan ? 'active' : ''}`}>Vegan</span>
        <span className={`tag ${recipe.glutenFree ? 'active' : ''}`}>Gluten Free</span>
        <span className={`tag ${recipe.dairyFree ? 'active' : ''}`}>Dairy Free</span>
      </div>
      
      <div className="details">
        <p><strong>Health Score:</strong> {recipe.healthScore}</p>
        <p><strong>Weight Watcher Smart Points:</strong> {recipe.weightWatcherSmartPoints}</p>
        <p><strong>Price per Serving:</strong> ${recipe.pricePerServing}</p>
      </div>

      <h2>Ingredients</h2>
      <ul className="ingredients">
        {recipe.extendedIngredients.map(ingredient => (
          <li key={ingredient.id}>
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
            <p>{ingredient.original}</p>
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol className="instructions">
        {recipe.analyzedInstructions[0].steps.map(step => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
