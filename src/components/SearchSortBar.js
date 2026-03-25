import React from 'react';
import { Search, ArrowUpDown } from 'lucide-react';
import './SearchSortBar.css';

const SearchSortBar = ({ onSearch, onSort, sortConfig }) => {
  return (
    <div className="search-sort-wrapper">
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search by name or email..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="sort-container">
        <button 
          className={sortConfig.key === 'name' ? 'active' : ''} 
          onClick={() => onSort('name')}
        >
          Sort by Name <ArrowUpDown size={14} />
        </button>
        <button 
          className={sortConfig.key === 'company' ? 'active' : ''} 
          onClick={() => onSort('company')}
        >
          Sort by Company <ArrowUpDown size={14} />
        </button>
      </div>
    </div>
  );
};

export default SearchSortBar;