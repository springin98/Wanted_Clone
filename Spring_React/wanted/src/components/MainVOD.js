import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import MainContentsTitle from "./MainContentsTitle";
import MainVODContents from "./MainVODContents";
import "./../styles/Main_VOD.css";

const MainVOD = (props) => {
  return (
    <div className="Main_VOD_Div">
      <div className="Main_VOD_Div_Div">
        <MainContentsTitle
          name="직장인을 위한 Wanted+ VOD"
          more="VOD 전체보기"
        />
        <MainVODContents />
        <button className="Main_SuggestButton">
          직무/직군을 입력하면 관련 콘텐츠를 추천해 드려요. 👀&nbsp;
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default MainVOD;
