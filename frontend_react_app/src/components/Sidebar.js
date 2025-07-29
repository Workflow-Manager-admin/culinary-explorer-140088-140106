import React from 'react';
import './Sidebar.css';

/**
 * PUBLIC_INTERFACE
 * Sidebar for cuisine category selection.
 */
function Sidebar({ cuisines, selectedCuisine, onSelectCuisine }) {
  return (
    <nav className="sidebar">
      <h3 className="sidebar-title">Cuisines</h3>
      <ul className="sidebar-list">
        {cuisines.map(cuisine => (
          <li
            key={cuisine}
            className={
              cuisine === selectedCuisine
                ? 'sidebar-item selected'
                : 'sidebar-item'
            }
            onClick={() => onSelectCuisine(cuisine)}
            tabIndex={0}
            aria-label={cuisine}
          >
            {cuisine}
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Sidebar;
