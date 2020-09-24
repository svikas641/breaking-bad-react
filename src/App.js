import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import CharacterGrid from './components/CharacterGrid';
import Pagination from './components/Pagination';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, isLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      isLoading(true);
      const res = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(res.data);
      isLoading(false);
    };
    fetchData();
  }, [query]);

  // Get current posts
  const indexOfLastPost = currentPage * charactersPerPage;
  const indexOfFirstPost = indexOfLastPost - charactersPerPage;
  const currentCharacters = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={currentCharacters} isLoading={loading} />
      <Pagination
        charactersPerPage={charactersPerPage}
        items={items.length}
        paginate={paginate}
      />
    </div>
  );
};
export default App;
