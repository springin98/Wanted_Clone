import "./../styles/Main_Insight_More.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MainInsightMore = () => {
  return (
    <div className="MainInsightMore">
      <button className="MainInsightMore_Button">
        더 많은 콘텐츠 보기
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
};

export default MainInsightMore;
