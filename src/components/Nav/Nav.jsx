// import React from "react";
// import { NavLink } from "react-router-dom";
// import styles from "./Nav.module.scss";

// const Nav = () => {
//   return (
//     <nav>
//       <NavLink>home</NavLink>
//       <div className={styles.Shop}>
//         <p className={styles.Shop_Link}>shop</p>
//         <ul className={styles.Shop_Cat}>
//           <li>
//             <NavLink>food</NavLink>
//           </li>
//           <li>
//             <NavLink>hay</NavLink>
//           </li>
//         </ul>
//       </div>

//       <NavLink>search</NavLink>
//       <NavLink>cart</NavLink>
//     </nav>
//   );
// };

// export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <div className={styles.nav__shop}>
        <NavLink to="/products" className={styles.nav__shop_link}>
          Shop
        </NavLink>
        <ul className={styles.nav__categories}>
          <li>
            <NavLink to="/products/category/food">Food</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/hay">Hay</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/enrichment">Enrichment</NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/fav">Favourites</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
};

export default Nav;
