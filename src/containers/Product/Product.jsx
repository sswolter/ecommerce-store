import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsProvider, {
  ProductsContext,
} from "../../context/ProductsProvider";
import { addItem, getProductById } from "../../services/products";
import Button from "../../components/Button/Button";
import styles from "./Product.module.scss";
import Variant from "../../components/Variant/Variant";
import CartProvider, { CartContext } from "../../context/CartProvider";

const Product = () => {
  // const { products } = useContext(ProductsContext);
  const { id } = useParams();
  // console.log(useParams());
  const [foundProduct, setFoundProduct] = useState(null);
  const [error, setError] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(null);

  const handleAdding = async () => {
    const newItem = {
      name: foundProduct.name,
      price: foundProduct.price,
      image: foundProduct.image,
      quantity: quantity,
      variant: variant,
    };
    addItem(newItem);
    setCart([...cart, newItem]);
  };

  useEffect(() => {
    const wrapper = async () => {
      try {
        const data = await getProductById(id);
        setFoundProduct(data);
      } catch (e) {
        setError(true);
      }
    };

    wrapper();
  }, [id]);

  const handleDec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInc = () => {
    setQuantity(quantity + 1);
  };

  const handleVarClick = (e) => {
    setVariant(e.target.value);
    // setVariant(value);
  };

  // console.log(foundProduct);
  // console.log(foundProduct?.variants);
  //add if else to return loading also
  return !error && foundProduct ? (
    <div className={styles.Page}>
      <img src={foundProduct.image} alt="" className={styles.Img} />
      <section className={styles.Info}>
        <h1>{foundProduct?.name}</h1>
        <p>{foundProduct?.description}</p>
        <p>${foundProduct?.price}</p>
        <div className={styles.Variants}>
          {foundProduct.variants &&
            foundProduct.variants.map((variant) => {
              return (
                <Variant
                  variant={variant}
                  key={variant}
                  onClick={handleVarClick}
                />
              );
            })}
        </div>
        <Button id={foundProduct.id} fav={foundProduct.fav} />
        <div className={styles.Qua}>
          <button onClick={handleDec}>-</button>
          <p>{quantity}</p>
          <button onClick={handleInc}>+</button>
        </div>
        <button onClick={handleAdding}>Add to cart</button>
      </section>
    </div>
  ) : (
    <p>No product found</p>
  );
};

export default Product;
