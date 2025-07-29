import React from 'react';
import './RecipeDetail.css';

/**
 * PUBLIC_INTERFACE
 * RecipeDetail - detailed info page for a recipe (modal-style for mobile or embedded for desktop)
 */
function RecipeDetail({ recipe, onBack }) {
  if (!recipe) return null;
  return (
    <div className="recipe-detail">
      <button className="back-btn" onClick={onBack} aria-label="Back to recipes">&larr; Back</button>
      <div className="detail-header">
        <img src={recipe.image} alt={recipe.name} className="detail-img" />
        <div className="detail-meta">
          <h2>{recipe.name}</h2>
          <span className="chip chip-cuisine">{recipe.cuisine}</span>
          <span className="chip chip-meal">{recipe.mealType}</span>
          <div className="detail-desc">{recipe.description}</div>
        </div>
      </div>
      <section>
        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
        </ul>
      </section>
      <section>
        <h3>Instructions</h3>
        <ol className="instructions-list">
          {recipe.instructions.map((ins, idx) => <li key={idx}>{ins}</li>)}
        </ol>
      </section>
    </div>
  );
}
export default RecipeDetail;
