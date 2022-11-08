import React from "react";
import "./../styles/Main_Insight.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import MainInsightCategory from "./MainInsightCategory";
import MainInsightContents from "./MainInsightContents";
import MainInsightMore from "./MainInsightMore";

const MainInsight = () => {
  return (
    <div className="Main_Insight_Div">
      <div className="Main_Insight_Div_Div">
        <div className="Main_Insight_Title_Div">
          <h2 className="Main_Insight_Title">나에게 필요한 커리어 인사이트</h2>
          <button>
            <FontAwesomeIcon icon={faQuestion} />
          </button>
        </div>
        <MainInsightCategory />
        <MainInsightContents />
        <MainInsightMore />
      </div>
    </div>
  );
};

export default MainInsight;
