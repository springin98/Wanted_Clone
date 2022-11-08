import React from "react";
import PropTyes from "prop-types";
import "./../styles/Main_InsightCategoryButton.css";

const MainInsightCategoryButton = (props) => {
  return (
    <div>
      <button className="Main_InsightCategoryButton_Button">
        {props.children}
      </button>
    </div>
  );
};

MainInsightCategoryButton.PropTyes = {
  children: PropTyes.string,
};

export default MainInsightCategoryButton;
