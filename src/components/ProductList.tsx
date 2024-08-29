import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProductList: React.FC = () => {

  const API_URL = process.env.REACT_APP_API_URL

/**
 * @function fetchProducts
 * @description Function will make API call to get all prodictList
 * @returns productList
 */
const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get(`${API_URL}/products`);
  return data;
};

  const { data, isLoading, error } = useQuery<Product[]>('products', fetchProducts);

  if (isLoading) return <div className="loader-container"><CircularProgress /></div>;
  if (error) return <div>Error loading products</div>;

  return (
    <Grid container spacing={2}>
      {data?.map((product) => (
        <Grid item xs={12} sm={4} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
