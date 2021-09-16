import React from 'react';

import { SneakersCard, MyLoader } from './';
import { AppContext } from '../../App';

import styles from './Content.module.scss';

function ContentProducts({
  searchInput,
  handleAddProduct,
  handleDeleteProduct,
  handleLikeProduct,
  handleUnlikeProduct,
  productsIsLoaded,
}) {
  const { products } = React.useContext(AppContext);

  return (
    <div className={styles.contentProducts}>
      {productsIsLoaded
        ? products
            .filter((obj) => obj.title.toLowerCase().includes(searchInput.toLowerCase()))
            .map((obj) => (
              <SneakersCard
                handleAddProduct={handleAddProduct}
                handleDeleteProduct={handleDeleteProduct}
                handleLikeProduct={handleLikeProduct}
                handleUnlikeProduct={handleUnlikeProduct}
                {...obj}
                key={obj.id}
              />
            ))
        : Array(12)
            .fill(0)
            .map((_, index) => <MyLoader key={index} />)}
    </div>
  );
}

export default ContentProducts;
