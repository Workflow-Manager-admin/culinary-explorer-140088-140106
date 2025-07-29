import React, { useState, useMemo } from 'react';
import './App.css';
import recipesData from './mockRecipes'; // will define in mockRecipes.js
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail';

/**
 * App - Main entry point for Recipe Explorer
 * Implements app-level view, routing, and global state.
 */
function App() {
  // App-level state
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedMealType, setSelectedMealType] = useState('All');

  // Extract unique cuisines and mealTypes for filters
  const cuisines = useMemo(
    () => ['All', ...Array.from(new Set(recipesData.map(r => r.cuisine)))],
    []
  );
  const mealTypes = useMemo(
    () => ['All', ...Array.from(new Set(recipesData.map(r => r.mealType)))],
    []
  );

  // Filter, then search - in memo for performance
  const visibleRecipes = useMemo(() => {
    return recipesData.filter(recipe => {
      // Filter by cuisine & mealType
      const matchesCuisine =
        selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
      const matchesMeal =
        selectedMealType === 'All' || recipe.mealType === selectedMealType;
      // Search by name or ingredients
      const search = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !search ||
        recipe.name.toLowerCase().includes(search) ||
        recipe.ingredients.some(ing =>
          ing.toLowerCase().includes(search)
        );
      return matchesCuisine && matchesMeal && matchesSearch;
    });
  }, [selectedCuisine, selectedMealType, searchTerm]);

  // Handle recipe card click
  const handleShowDetail = (recipeId) => {
    setSelectedRecipeId(recipeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle category/cuisine in sidebar
  const handleCategoryClick = (cuisine) => {
    setSelectedCuisine(cuisine);
    setSelectedMealType('All');
    setSelectedRecipeId(null);
  };

  // Get single recipe for detail page
  const selectedRecipe = selectedRecipeId
    ? recipesData.find(r => r.id === selectedRecipeId)
    : null;

  // Responsive: Hide sidebar on mobile if on detail page
  // and allow "Back" from detail view.
  const handleBackToList = () => {
    setSelectedRecipeId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      <Header
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        cuisines={cuisines}
        selectedCuisine={selectedCuisine}
        setCuisine={setSelectedCuisine}
        mealTypes={mealTypes}
        selectedMealType={selectedMealType}
        setMealType={setSelectedMealType}
      />
      <div className="app-main">
        <aside className="sidebar-container">
          <Sidebar
            cuisines={cuisines}
            selectedCuisine={selectedCuisine}
            onSelectCuisine={handleCategoryClick}
          />
        </aside>
        <main className="content-container">
          {selectedRecipe ? (
            <RecipeDetail recipe={selectedRecipe} onBack={handleBackToList} />
          ) : (
            <RecipeGrid
              recipes={visibleRecipes}
              onShowDetail={handleShowDetail}
              noResults={visibleRecipes.length === 0}
            />
          )}
        </main>
      </div>
      <footer className="footer">
        <div>
          Recipe Explorer &copy; {new Date().getFullYear()} &ndash; Modern Minimal React App
        </div>
      </footer>
    </div>
  );
}

export default App;
