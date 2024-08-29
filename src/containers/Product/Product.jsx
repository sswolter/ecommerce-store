import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UpdateContext } from "../../context/UpdateProvider";
import { ProductsContext } from "../../context/ProductsProvider";
import { getProductByID, updateFavValue } from "../../services/products";
import { CartContext } from "../../context/CartProvider";
import { addItem } from "../../services/cart";
import styles from "./Product.module.scss";
import cart from "/cart.svg";

const Product = () => {
  const { id } = useParams();
  const { updated, setUpdated } = useContext(UpdateContext);
  const { product, setProduct } = useContext(ProductsContext);
  const { quantity, setQuantity, cartVar, setCartVar } =
    useContext(CartContext);
  const [selectedVariant, setSelectedVariant] = useState("");

  useEffect(() => {
    const wrapper = async () => {
      //   try {
      //     if (error) {
      //       setError(false);
      //     }
      const data = await getProductByID(id);
      setProduct(data);
      //   } catch (e) {
      //     console.log(e);
      //     setError(true);
      //   }
      //   console.log(product);
    };
    wrapper();
  }, [id, updated, selectedVariant]);

  const handleClick = async () => {
    await updateFavValue(id, product.fav);
    setUpdated(updated + 1);
  };

  const handleVariant = (e) => {
    const variantVal = e.target.value;
    setCartVar(variantVal);
    setSelectedVariant(variantVal);
  };

  const handleClear = () => {
    setSelectedVariant("none");
  };

  const handleAdd = async () => {
    const newCartItem = {
      name: product.name,
      price: product.price,
      variants: cartVar,
      image: product.image,
      quantity: quantity,
    };

    if (!cartVar) {
      alert("Please select a variant");
      return;
    }

    addItem(newCartItem);
    setQuantity(1);
    setUpdated(updated + 1);
  };

  return (
    <div>
      <div className={styles.Page}>
        <img src={product?.image} alt="" height="500px" />
        <article className={styles.Info}>
          <h1>{product?.name}</h1>
          <p>{product?.brand}</p>

          <p>${product?.price}</p>

          <p className={styles.Desc}>{product?.description}</p>
          <div className={styles.Type}>
            {product?.variants && (
              <select
                name="variant"
                id="variant"
                value={selectedVariant}
                onChange={handleVariant}
              >
                <option value="none">Please select</option>
                {product.variants.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            )}

            {selectedVariant != "none" && (
              <button onClick={handleClear} className={styles.Clear}>
                Clear
              </button>
            )}
          </div>

          <div className={styles.Quantity}>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleAdd} className={styles.Button}>
              Add to cart <img src={cart} alt="" />
            </button>
          </div>

          <button onClick={handleClick}>
            {product?.fav === true
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </article>
      </div>
    </div>
  );
};

export default Product;
