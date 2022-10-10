import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Config from "react-native-config";
export default function useFetch() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const response = await axios.get(Config.API_URL);
      setProducts(response.data);
      setLoading(false)
    } catch (err) {
      setError(err);
      setLoading(false)
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { products, error, loading }
}