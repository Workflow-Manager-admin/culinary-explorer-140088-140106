import React from 'react';
import './RecipeCard.css';

/**
 * PUBLIC_INTERFACE
 * RecipeCard - displays brief info for recipe in grid/list
 */
function RecipeCard({ recipe, onClick }) {
  return (
    <div className="recipe-card" onClick={onClick} tabIndex={0} aria-label={recipe.name}>
      <div className="recipe-card-imgcontainer">
        <img className="recipe-card-img" src={recipe.image} alt={recipe.name} />
      </div>
      <div className="recipe-card-content">
        <div className="recipe-card-title">{recipe.name}</div>
        <div className="recipe-card-meta">
          <span className="chip chip-cuisine">{recipe.cuisine}</span>
          <span className="chip chip-meal">{recipe.mealType}</span>
        </div>
        <div className="recipe-card-desc">{recipe.description}</div>
      </div>
    </div>
  );
}
export default RecipeCard;
