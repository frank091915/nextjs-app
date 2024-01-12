import React from "react";
import AddToCart from "../AddToCart";
import styles from "./Product.module.css";
const ProductCard = () => {
  console.log(styles, "styles");
  return (
    <>
      <div className={styles.productTitle}>ProductCard</div>
      <AddToCart></AddToCart>
    </>
  );
};

export default ProductCard;
