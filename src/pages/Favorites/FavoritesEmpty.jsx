import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Favorites.module.scss';

import cryingSmile from '../../assets/img/empty-favorites.jpg';
import arrow from '../../assets/img/arrow.svg';

function FavoritesEmpty() {
  return (
    <div className={styles.favoritesEmpty}>
      <div className={styles.content}>
        <img className={styles.crySmile} src={cryingSmile} alt="crying smile" />
        <h2>Закладок нет :(</h2>
        <p>Вы ничего не добавляли в закладки</p>
        <Link to="/">
          <button>
            Вернуться назад
            <img src={arrow} alt="Arrow"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FavoritesEmpty;
