import React from 'react';

import styles from './Slider.module.scss';

import sliderBrands from '../../assets/img/slider-brands.svg';
import slide_1 from '../../assets/img/slide-1.jpg';
import sliderArrow from '../../assets/img/slider-arrow.svg';

function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.rightDescription}>
        <img width={100} height={40} src={sliderBrands} alt="Adidas-Disney" />
        <div className={styles.rightDescriptionContent}>
          <h3><b>Stan Smith</b>,<br /> Forever!</h3>
          <button>Купить</button>
        </div>
      </div>
      <div>
        <img src={slide_1} alt="Stan Smith" />
      </div>
      <img className={styles.sliderArrow} src={sliderArrow} alt="Slider arrow" />
    </div>
  )
}

export default React.memo(Slider);
