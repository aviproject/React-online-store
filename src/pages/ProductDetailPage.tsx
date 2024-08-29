import React from 'react';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage: React.FC = () => {
  return (
    <div>
      <h1 style={{display:'flex', justifyContent:'center'}}>Product Details</h1>
      <ProductDetail />
    </div>
  );
};

export default ProductDetailPage;
