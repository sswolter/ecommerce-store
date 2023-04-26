import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UpdateContext } from "../../context/UpdateProvider";
import { ProductsContext } from "../../context/ProductsProvider";
import { getProductByID, updateFavValue } from "../../services/products";
import { CartContext } from "../../context/CartProvider";
import { addItem } from "../../services/cart";

const Product = () => {
  const { id } = useParams();
  const { updated, setUpdated } = useContext(UpdateContext);
  const { product, setProduct } = useContext(ProductsContext);
  const { quantity, setQuantity, cartVar, setCartVar, btnAdded, setBtnAdded } =
    useContext(CartContext);

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
      console.log(product);
    };
    wrapper();
  }, [id, updated]);

  const handleClick = async () => {
    await updateFavValue(id, product.fav);
    setUpdated(updated + 1);
  };

  const handleVariant = (e) => {
    const variantVal = e.target.value;
    setCartVar(variantVal);
    console.log(variantVal);
  };

  const handleInc = () => {
    setQuantity(quantity + 1);
  };
  const handleDec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
    setBtnAdded(!btnAdded);
    setUpdated(updated + 1);
  };

  return (
    <div>
      <img src={product?.image} alt="" />
      <h1>{product?.name}</h1>
      <p>{product?.brand}</p>
      <p>${product?.price}</p>
      {product?.variants &&
        product?.variants.map((v) => {
          return (
            <button key={v} onClick={handleVariant} value={v}>
              {v}
            </button>
          );
        })}
      <button onClick={handleDec}>-</button>
      <p>{quantity}</p>
      <button onClick={handleInc}>+</button>
      {btnAdded ? (
        <button disabled>Added to cart</button>
      ) : (
        <button onClick={handleAdd}>Add to cart</button>
      )}

      <button onClick={handleClick}>
        {product?.fav === true ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default Product;
