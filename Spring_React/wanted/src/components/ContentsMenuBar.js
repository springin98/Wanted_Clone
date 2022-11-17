import FontAwsomeCaretDown from "./FontAwsomeCaretDown";
import FontAwsomeChevronLeft from "./FontAwsomeChevronLeft";
import FontAwsomeChevronRight from "./FontAwsomeChevronRight";

import "./../styles/All_Contents_Nav_Sticky_Nav.css";
import dummy from "./../db/AllContentsNavCategory.json";

const ContentsMenuBar = () => {
  const welfareList = dummy.welfare.map((welfare) => (
    <button
      key={welfare.id}
      className={`All_Contents_Nav_Welfare_Btn All_Contents_Nav_Welfare_Btn_${welfare.color}`}
    >
      {welfare.title}
      <img
        key={welfare.id}
        src={welfare.img}
        alt={welfare.title}
        className="All_Contents_Nav_Welfare_Btn_img"
      />
    </button>
  ));

  return (
    <div className="All_Contents_Nav_Sticky_Div_Div All_Contents_Nav_Sticky_Div_Div_transparent">
      <div className="All_Contents_Nav_Category_Div">
        <div>
          <button className="All_Contents_Nav_Category_BtnStyle">
            <span className="All_Contents_Nav_Category_Btn_TextStyle_Basic">
              지역
            </span>
            <span className="All_Contents_Nav_Category_Btn_TextStyle_Blue">
              한국
            </span>
          </button>
          <button className="All_Contents_Nav_Category_BtnStyle">
            <span className="All_Contents_Nav_Category_Btn_TextStyle_Basic">
              경력
            </span>
            <span className="All_Contents_Nav_Category_Btn_TextStyle_Blue">
              전체
            </span>
            <FontAwsomeCaretDown />
          </button>
          <button className="All_Contents_Nav_Category_BtnStyle">
            <span className="All_Contents_Nav_Category_Btn_TextStyle_Basic All_Contents_Nav_Category_Btn_Skill_Margin">
              기술스택
            </span>
            <FontAwsomeCaretDown />
          </button>
        </div>
        <div className="All_Contents_Nav_Select_Div">
          <button className="All_Contents_Nav_Category_BtnStyle All_Contents_Nav_Select_BtnStyle">
            <span className="All_Contents_Nav_Select">응답률순</span>
            <FontAwsomeCaretDown />
          </button>
        </div>
      </div>
      <div className="All_Contents_Nav_Welfare_Div">
        <button className="All_Contents_Nav_Welfare_SlideBtn_Style All_Contents_Nav_Welfare_SlideBtn_Left">
          <FontAwsomeChevronLeft />
        </button>
        {welfareList}
        <button className="All_Contents_Nav_Welfare_SlideBtn_Style All_Contents_Nav_Welfare_SlideBtn_Right">
          <FontAwsomeChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ContentsMenuBar;
