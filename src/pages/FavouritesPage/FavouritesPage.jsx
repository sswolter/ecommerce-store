import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getAllProducts, getFavProducts } from "../../services/products";
import styles from "./FavouritesPage.module.scss";

const FavouritesPage = () => {
  const { favProducts, setFaveProducts, updates, setUpdates } =
    useContext(ProductsContext);

  const getFavProducts = async () => {
    const products = await getAllProducts();
    if (products) {
      const favPro = products.filter((product) => product.fav);
      setFaveProducts(favPro);
    }
  };

  useEffect(() => {
    getFavProducts();
  }, []);

  return (
    <div className={styles.Page}>
      <h1>Favourited Products</h1>
      <div className={styles.Cards}>
        {favProducts &&
          favProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.image}
                brand={product.brand}
                name={product.name}
                price={product.price}
                id={product.id}
                fav={product.fav}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FavouritesPage;
