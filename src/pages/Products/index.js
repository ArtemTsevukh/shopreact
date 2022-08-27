import React from 'react';
import ProductItem from "../../components/ProductItem";
import {useCallback, useEffect, useState} from "react";
import styles from "./products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);

  const getProducts = useCallback(async() => {
    await
      fetch('https://6308c61846372013f58661e2.mockapi.io/products/products')
        .then((response) => response.json())
        .then((data) => setProducts(data?.products || []))
        .catch((err) => {
          console.log(err);
          setProducts([]);
        })
  }, [])

  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value)
  }, [])

  const filterProducts = useCallback(async () => {
    await getProducts();
    setProducts((prevProducts) =>
      prevProducts.filter(product => product.name.toLowerCase().includes(filter.toLowerCase())))
  }, [filter])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <div className={styles.products_wrapper}>
      <input
        type="text"
        id="products_filter"
        className={styles.products_filter}
        onChange={handleFilterChange}
      />
      <button className={styles.products_filter_button} onClick={filterProducts}>Filter products</button>
      <ul className={styles.products}>
        {products.length ?
          products.map(product => <ProductItem product={product} key={product.asin}/>)
          : <li>No items</li>
        }
      </ul>
    </div>
  );
};

export default Products;
