import axios from 'axios';
import { Query } from '../../context/searchContext';

const API_KEY = '633146076f611d56dd03e36c216de625';
const baseUrl = 'https://api.themoviedb.org/3';

const fetch = async (type: string, query: Query, signal: AbortSignal, search?: string) => {
  const response = await axios.get(
    `${baseUrl}/${query}/${type}?sort_by=vote_average.desc&api_key=${API_KEY}&query=${search}`,
    {
      signal,
    }
  );
  return response.data.results.slice(0, 10);
};

export { fetch };
