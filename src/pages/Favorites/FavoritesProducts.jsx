import React from 'react';

import { SneakersCard } from '../../components/Content/';
import { AppContext } from '../../App';

import styles from './Favorites.module.scss';

function FavoritesProducts({
  handleAddProduct,
  handleDeleteProduct,
  handleLikeProduct,
  handleUnlikeProduct,
}) {
  const { favoritesProducts } = React.useContext(AppContext);

  return (
    <div className={styles.contentProducts}>
      {!!favoritesProducts.length &&
        favoritesProducts.map((obj) => (
          <SneakersCard
            handleAddProduct={handleAddProduct}
            handleDeleteProduct={handleDeleteProduct}
            handleLikeProduct={handleLikeProduct}
            handleUnlikeProduct={handleUnlikeProduct}
            {...obj}
            key={obj.id}
          />
        ))}
    </div>
  );
}

export default FavoritesProducts;
