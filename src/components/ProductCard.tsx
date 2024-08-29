import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.substring(0, 100)}...
        </Typography>
      </CardContent>
      <div style={{textAlign:'center', backgroundColor:'Highlight'}}>
        <Button
          component={Link}
          to={`/product/${product.id}`}
          size="small"
          color="primary"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
