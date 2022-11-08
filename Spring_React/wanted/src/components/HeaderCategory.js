import React from "react";
import PropTyes from "prop-types";
import "./../styles/Header_Category.css";

const HeaderCategory = (props) => {
  return (
    <div>
      <li className="Header_Category_li">
        <a href={props.href}>{props.children}</a>
      </li>
    </div>
  );
};

HeaderCategory.PropTyes = {
  href: PropTyes.string,
  children: PropTyes.string,
};

export default HeaderCategory;
