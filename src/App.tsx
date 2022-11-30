import React from 'react';
import Navbar from './components/shared/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Searchbar from './components/shared/Searchbar';
import MoviesList from './pages/movies/MoviesList';
import ShowsList from './pages/shows/ShowsList';
import { SearchContext } from './context/searchContext';
import ShowView from './pages/shows/ShowView';
import MovieView from './pages/movies/MovieView';

const App: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');

  const updateSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <SearchContext.Provider value={{ search, updateSearch }}>
      <Router>
        <div>
          <Navbar />
          <Searchbar />
        </div>
        <Routes>
          <Route path="/" element={<ShowsList />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/shows/:id" element={<ShowView />} />
          <Route path="/movies/:id" element={<MovieView />} />
        </Routes>
      </Router>
    </SearchContext.Provider>
  );
};

export default App;
