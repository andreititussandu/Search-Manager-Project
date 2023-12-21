import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <strong>{result.title}</strong>
            <p>{result.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
