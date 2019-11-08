import { useState, useEffect } from 'react';
import discogs, { token } from '../api/discogs';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (query) => {
    try {
      const response = await discogs.get(`/database/search`, {
        params: {
          type: 'release',
          title: query,
          token,
        },
      });

      setResults(response.data.results);
    } catch (err) {
      setErrorMessage(`Something went wrong: ${err.message}`);
      setResults([]);
    }
  }

  // Perform a default search when first enter.
  useEffect(() => {
    searchApi('Violator');
  }, []);

  return [searchApi, results, errorMessage];
};
