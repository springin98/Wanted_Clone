import "./../styles/Search_More.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const SearchMore = () => {
  return (
    <div className="Search_More_Div">
      <div>
        <span className="Search_More_Text">
          원티드 이외의 채용공고를 더 확인해 보세요
        </span>
        <button>
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="Search_More_Icon_Info"
          />
        </button>
      </div>
      <div className="Search_More_Text_Text_Div">
        <span className="Search_More_Text_Text">
          아쉽지만 수집된 채용공고가 충분하지 않습니다.
          <br />
          <br />
          매치업에 등록하고 기업에게 먼저 면접제안을 받아보세요.
        </span>
        <button className="Search_More_Matchup_Btn">매치업 등록하기</button>
      </div>
    </div>
  );
};

export default SearchMore;
