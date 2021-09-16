import React from 'react';

import styles from './Overlay.module.scss';

import emptyCartIcon from '../../assets/img/cart-empty.jpg';
import arrow from '../../assets/img/arrow.svg';

function CartEmpty({ onCloseCart }) {
  return (
    <div className={styles.cartEmpty}>
      <img className={styles.cartEmptyIcon} src={emptyCartIcon} alt="Empty cart" />
      <h3>Корзина пустая</h3>
      <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <button onClick={onCloseCart} >
        <img src={arrow} alt="Arrow"></img>
        Вернуться назад
      </button>
    </div>
  );
}

export default CartEmpty;
