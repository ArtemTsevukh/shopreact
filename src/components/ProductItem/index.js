import React from 'react';
import styles from './productItem.module.css'

const ProductItem = ({product}) => {
  return (
    <li className={styles.product}>
      <img src={product.img} alt={product.name} className={styles.product_photo}/>

      <p className={styles.product_name}>{product.name}</p>

      <div className={styles.product_info}>
        <div>{product.bsr_category}</div>
        <span>{product.price}</span>
      </div>
    </li>
  );
};

export default ProductItem;
