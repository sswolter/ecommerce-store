import React, { useState } from "react";
import menu from "/burger-menu.svg";
const Nav2 = () => {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <img src={menu} alt="" />
    </div>
  );
};

export default Nav2;
