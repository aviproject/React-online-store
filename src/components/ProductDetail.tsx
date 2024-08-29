import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetail: React.FC = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  /**
   * @function fetchproduct is fetching product details with API request.
   * @param id 
   * @returns data
   */
  const fetchProduct = async (id: string): Promise<Product> => {
    const { data } = await axios.get(`${API_URL}/products/${id}`);
    return data;
  };

  const { id } = useParams<{ id: string }>();


  // react-query to make call
  const {
    data: product,
    isLoading,
    error,
  } = useQuery<Product>(["product", id], () => fetchProduct(id as string), {
    enabled: !!id,
  });

  if (isLoading) return <div className="loader-container"><CircularProgress /></div>;
  if (error || !product) return <div className="loader-container">Error loading product details</div>;

  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 5 }}>
      <CardMedia
        component="img"
        height="400"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {product.description}
        </Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Typography variant="subtitle1">
          Category: {product.category}
        </Typography>
        <Typography variant="subtitle2">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
