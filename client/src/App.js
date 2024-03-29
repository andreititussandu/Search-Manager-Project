import React, { useState } from 'react';
import Login from './Login';
import Search from './Search';
import SearchResults from './SearchResults';
import './Title.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState(null);

  const handleLogin = (authToken) => {
    setToken(authToken);
  };

  const handleSearch = (results) => {
    setSearchResults(results);
  };
 

  return (
    <div>
      <div className="title-container">
        <h1 className="title">Search Manager App</h1>
      </div>
      {!token ? <Login onLogin={handleLogin} /> : <Search onSearch={handleSearch} token={token} />}
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
