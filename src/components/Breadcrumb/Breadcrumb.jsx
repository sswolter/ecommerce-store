import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import { getProductByID } from "../../services/products";
import styles from "./Breadcrumb.module.scss";
const Breadcrumb = () => {
  const location = useLocation();
  const { id } = useParams();
  const { product, setProduct } = useContext(ProductsContext);
  useEffect(() => {
    const wrapper = async () => {
      const data = await getProductByID(id);
      setProduct(data);
    };
    wrapper();
  }, [id]);

  return (
    <div className={styles.Main}>
      <Link to={"/"}>Home</Link>

      {location.pathname.includes("/favourites") && (
        <>
          <span className={styles.Slash}>\</span>
          <Link to={"favourites"}>Favourites</Link>
        </>
      )}
      {location.pathname.includes("/products") && (
        <>
          <span className={styles.Slash}>\</span>
          <Link to={"products"}>Products</Link>
        </>
      )}
      {location.pathname.includes(`/products/`) && (
        <>
          <span className={styles.Slash}>\</span>
          <Link>{product?.name}</Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
