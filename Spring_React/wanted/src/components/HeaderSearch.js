import "./../styles/Header_Search.css";
import dummy from "./../db/HeaderSearchTag.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FontAwsomeChevronRight from "./FontAwsomeChevronRight";

const HeaderSearch = () => {
  //태그 버튼 개수만큼 출력하기
  const tagList = dummy.tags.map((tag) => (
    <button key={tag.id} className={`Hearder_Search_Text_Tag_${tag.color}`}>
      #{tag.title}
    </button>
  ));

  return (
    <div className="Hearder_Search_Div">
      <div className="Hearder_Search_Div_Div">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="Header_Search_Input_Icon"
        />
        <input
          className="Hearder_Search_Input"
          type="text"
          placeholder="#태그, 회사, 포지션 검색"
        ></input>
        <div className="Hearder_Search_Text_Div">
          <div className="Hearder_Search_Text_Title_Div">
            <span className="Hearder_Search_Text_Title_Text">
              추천태그로 검색해보세요
            </span>
            <div>
              <button className="Hearder_Search_Text_Title_Btn">
                기업태그 홈 이동하기
                <FontAwsomeChevronRight />
              </button>
            </div>
          </div>
          <div className="Hearder_Search_Text_Tag_Div">{tagList}</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
