import React from 'react';

import CartProduct from './CartProduct';
import { AppContext } from '../../App';
import { CartEmpty } from './'

import styles from './Overlay.module.scss';

import arrow from '../../assets/img/arrow.svg';

function Overlay({ onCloseCart, handleDeleteProduct }) {
  const { cartProducts } = React.useContext(AppContext);

  const getTotalCost = () => {
    let cost = 0;
    cartProducts.forEach(obj => cost += +obj.price)
    return cost;
  }

  const getTotalTax = () => {
    return Math.round(getTotalCost() * 0.05 * 100) / 100
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.sideCart}>
        <div className={styles.sideCartHeading}>
          <h1>Корзина</h1>
          <svg
            onClick={onCloseCart}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 0.5H8C3.85786 0.5 0.5 3.85786 0.5 8V24C0.5 28.1421 3.85786 31.5 8 31.5H24C28.1421 31.5 31.5 28.1421 31.5 24V8C31.5 3.85786 28.1421 0.5 24 0.5Z"
              fill="black"
            />
            <path d="M19.5 9L12 16.5L19.5 24" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        {!!cartProducts.length ?
          <div className={styles.sideCartItems}>
            {cartProducts &&
              cartProducts.map((obj, index) => (
                <CartProduct {...obj} onDeleteProduct={handleDeleteProduct} key={index} />
              ))}
          </div> :
          <CartEmpty onCloseCart={onCloseCart}/>
        }
        
        {!!cartProducts.length &&
          <div className={styles.placeOrder}>
            <div className={styles.placeOrderInfo}>
              <p>Итого:</p>
              <div className={styles.dashedBlock}></div>
              <b>{getTotalCost()} грн.</b>
            </div>
            <div className={styles.placeOrderInfo}>
              <p>Налог 5%:</p>
              <div className={styles.dashedBlock}></div>
              <b>{getTotalTax()} грн.</b>
            </div>

            <button>
              Оформить заказ
              <img src={arrow} alt="Arrow"></img>
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default Overlay;
