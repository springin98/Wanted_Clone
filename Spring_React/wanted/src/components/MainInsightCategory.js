import React from "react";
import "./../styles/Main_InsightCategory.css";
import MainInsightCategoryButton from "./MainInsightCategoryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import dummy from "./../db/MainInsightCategory.json";

const MainInsightCategory = () => {
  const buttonsList = dummy.buttons.map((button, index) => (
    <MainInsightCategoryButton key={index}>{button}</MainInsightCategoryButton>
  ));

  return (
    <div className="Main_InsightCategory_Div">
      <button className="Main_InsightCategory_ActionButton Main_InsightCategory_ActionButton_Left">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="Main_InsightCategory_Buttons">{buttonsList}</div>
      <button className="Main_InsightCategory_ActionButton Main_InsightCategory_ActionButton_Right">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <button className="Main_InsightCategory_ActionButton Main_InsightCategory_ActionButton_more">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
    </div>
  );
};

export default MainInsightCategory;
