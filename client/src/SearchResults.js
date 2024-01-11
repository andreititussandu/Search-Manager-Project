import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <h2 className="results-heading">Search Results</h2>
      <ul className="results-list">
        {results.map((result) => (
          <li key={result.id} className="result-item">
            <h3 className="result-title">{result.title}</h3>
            <p className="result-content">{result.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
