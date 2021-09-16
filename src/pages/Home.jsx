import React from 'react';

import { Slider } from '../components/Slider';
import { Content } from '../components/Content';

function Home({
  handleAddProduct,
  handleDeleteProduct,
  handleLikeProduct,
  handleUnlikeProduct,
  productsIsLoaded,
}) {
  return (
    <div>
      <Slider />
      <Content
        handleAddProduct={handleAddProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleLikeProduct={handleLikeProduct}
        handleUnlikeProduct={handleUnlikeProduct}
        productsIsLoaded={productsIsLoaded}
      />
    </div>
  );
}

export default Home;
