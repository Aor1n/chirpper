import { useState, useEffect } from 'react';
import axios from 'axios';

export default url => {
  const baseUrl = 'https://conduit.productionready.io/api'
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };
  useEffect(() => {
    if (!isLoading) return;

    axios(baseUrl + url, options)
    .then(res => {
      console.log('success', res);
      setIsLoading(false);
      setResponse(res.data);
    })
    .catch(err => {
      console.error('error', err);
      setIsLoading(false);
      setError(err.response.data);
    })
  }, [isLoading, options, url]);

  return [{isLoading, response, error}, doFetch];
};