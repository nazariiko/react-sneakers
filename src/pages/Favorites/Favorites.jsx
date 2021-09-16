import React from 'react';

import { FavoritesProducts } from './';

import styles from './Favorites.module.scss';

function Favorites({
  handleAddProduct,
  handleDeleteProduct,
  handleLikeProduct,
  handleUnlikeProduct,
}) {
  return (
    <div className={styles.content}>
      <div className={styles.contentInfo}>
        <h1>Мои желания</h1>
      </div>

      <FavoritesProducts
        handleAddProduct={handleAddProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleLikeProduct={handleLikeProduct}
        handleUnlikeProduct={handleUnlikeProduct}
      />
    </div>
  );
}

export default Favorites;
