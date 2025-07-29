import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeGrid.css';

/**
 * PUBLIC_INTERFACE
 * RecipeGrid is a flex grid/list of recipe cards
 */
function RecipeGrid({ recipes, onShowDetail, noResults }) {
  if (noResults) {
    return <div className="no-results">No recipes found. Try different filters or search term.</div>;
  }
  return (
    <div className="recipe-grid">
      {recipes.map(recipe =>
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onShowDetail(recipe.id)}
        />
      )}
    </div>
  );
}
export default RecipeGrid;
