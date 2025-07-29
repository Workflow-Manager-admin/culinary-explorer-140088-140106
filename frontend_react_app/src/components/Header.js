import React from 'react';
import './Header.css';

/**
 * PUBLIC_INTERFACE
 * Header - app header bar; includes search & filter controls.
 */
function Header({
  searchTerm,
  onSearch,
  cuisines,
  selectedCuisine,
  setCuisine,
  mealTypes,
  selectedMealType,
  setMealType
}) {
  return (
    <header className="header-root">
      <div className="header-title">
        <span role="img" aria-label="chef" style={{marginRight: 5}}>🍽️</span>
        <span className="header-appname">Recipe Explorer</span>
      </div>
      <div className="header-controls">
        <input
          className="search-input"
          type="search"
          placeholder="Search by name/ingredient..."
          value={searchTerm}
          onChange={e => onSearch(e.target.value)}
          aria-label="Search recipes"
        />
        <select
          className="select-filter"
          value={selectedCuisine}
          onChange={e => setCuisine(e.target.value)}
          aria-label="Filter by cuisine"
        >
          {cuisines.map(c =>
            <option value={c} key={c}>{c}</option>
          )}
        </select>
        <select
          className="select-filter"
          value={selectedMealType}
          onChange={e => setMealType(e.target.value)}
          aria-label="Filter by meal type"
        >
          {mealTypes.map(m =>
            <option value={m} key={m}>{m}</option>
          )}
        </select>
      </div>
    </header>
  );
}

export default Header;
