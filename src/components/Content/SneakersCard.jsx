import React from 'react';

import { isAddedContext, isLikedContext } from '../../App';

import styles from './Content.module.scss';

import addSneakers from '../../assets/img/add.svg';
import addedSneakers from '../../assets/img/added-sneakers.svg';

function SneakersCard({
  id,
  title,
  imageUrl,
  price,
  handleAddProduct,
  handleDeleteProduct,
  handleUnlikeProduct,
  handleLikeProduct,
}) {
  const isProductAdded = React.useContext(isAddedContext);
  const isProductLiked = React.useContext(isLikedContext);

  const onAddProduct = () => {
    if (isProductAdded(id)) {
      handleDeleteProduct(id);
    } else {
      handleAddProduct({ id, title, imageUrl, price });
    }
  };

  const onFavoriteSneakers = () => {
    if (isProductLiked(id)) {
      handleUnlikeProduct(id);
    } else {
      handleLikeProduct({ id, title, imageUrl, price });
    }
  };

  return (
    <div className={styles.contentProductsItem}>
      <button
        onClick={onFavoriteSneakers}
        className={`${styles.contentProductsItem__favorite} ${
          isProductLiked(id) ? styles.favorited : ''
        }`}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="29" height="29" rx="6.5" fill="white" stroke="#F3F3F3" />
          <mask id="path-2-inside-1" fill="white">
            <path d="M21.1734 11.4592C20.9639 10.9779 20.6619 10.5418 20.2842 10.1753C19.9063 9.80769 19.4606 9.51555 18.9716 9.31477C18.4644 9.10575 17.9205 8.99876 17.3714 9.00001C16.601 9.00001 15.8493 9.20933 15.1961 9.60472C15.0399 9.6993 14.8914 9.80319 14.7508 9.91638C14.6101 9.80319 14.4617 9.6993 14.3054 9.60472C13.6522 9.20933 12.9006 9.00001 12.1302 9.00001C11.5754 9.00001 11.0378 9.10545 10.53 9.31477C10.0393 9.51634 9.59706 9.80629 9.21733 10.1753C8.83915 10.5414 8.53706 10.9776 8.32816 11.4592C8.11095 11.96 8 12.4918 8 13.0392C8 13.5555 8.10626 14.0935 8.31722 14.6409C8.49381 15.0983 8.74696 15.5727 9.07044 16.0519C9.58299 16.8101 10.2878 17.6008 11.1629 18.4025C12.613 19.7313 14.0491 20.6492 14.1101 20.6864L14.4804 20.9221C14.6445 21.026 14.8555 21.026 15.0196 20.9221L15.3899 20.6864C15.4509 20.6476 16.8854 19.7313 18.3371 18.4025C19.2122 17.6008 19.917 16.8101 20.4295 16.0519C20.753 15.5727 21.0077 15.0983 21.1828 14.6409C21.3937 14.0935 21.5 13.5555 21.5 13.0392C21.5015 12.4918 21.3906 11.96 21.1734 11.4592Z" />
          </mask>
          <path
            d="M21.1734 11.4592C20.9639 10.9779 20.6619 10.5418 20.2842 10.1753C19.9063 9.80769 19.4606 9.51555 18.9716 9.31477C18.4644 9.10575 17.9205 8.99876 17.3714 9.00001C16.601 9.00001 15.8493 9.20933 15.1961 9.60472C15.0399 9.6993 14.8914 9.80319 14.7508 9.91638C14.6101 9.80319 14.4617 9.6993 14.3054 9.60472C13.6522 9.20933 12.9006 9.00001 12.1302 9.00001C11.5754 9.00001 11.0378 9.10545 10.53 9.31477C10.0393 9.51634 9.59706 9.80629 9.21733 10.1753C8.83915 10.5414 8.53706 10.9776 8.32816 11.4592C8.11095 11.96 8 12.4918 8 13.0392C8 13.5555 8.10626 14.0935 8.31722 14.6409C8.49381 15.0983 8.74696 15.5727 9.07044 16.0519C9.58299 16.8101 10.2878 17.6008 11.1629 18.4025C12.613 19.7313 14.0491 20.6492 14.1101 20.6864L14.4804 20.9221C14.6445 21.026 14.8555 21.026 15.0196 20.9221L15.3899 20.6864C15.4509 20.6476 16.8854 19.7313 18.3371 18.4025C19.2122 17.6008 19.917 16.8101 20.4295 16.0519C20.753 15.5727 21.0077 15.0983 21.1828 14.6409C21.3937 14.0935 21.5 13.5555 21.5 13.0392C21.5015 12.4918 21.3906 11.96 21.1734 11.4592Z"
            stroke="#b5b5b5"
            strokeWidth="2"
            mask="url(#path-2-inside-1)"
          />
        </svg>
      </button>
      <img width={132} height={112} src={imageUrl} alt="Sneakers" />
      <p>{title}</p>
      <div className={styles.contentProductsItemBottomInfo}>
        <div className={styles.contentProductsItemPrice}>
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        <img onClick={onAddProduct} src={isProductAdded(id) ? addedSneakers : addSneakers} alt="" />
      </div>
    </div>
  );
}

export default SneakersCard;
