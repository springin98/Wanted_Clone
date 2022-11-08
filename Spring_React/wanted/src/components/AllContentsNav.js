import "./../styles/All_Contents_Nav.css";
import FontAwsomeChevronDown from "./FontAwsomeChevronDown";

const AllContentsNav = () => {
  return (
    <div className="All_Contents_Nav_Component_Div">
      <div className="All_Contents_Nav_Title_Div">
        <button className="All_Contents_Nav_Title_Div_Div">
          <span className="All_Contents_Nav_Title_CategoryTitle">전체</span>
          <div className="All_Contents_Nav_Title_Arrow_Div">
            <div className="All_Contents_Nav_Title_Arrow">
              <FontAwsomeChevronDown />
            </div>
          </div>
        </button>
        <h1 className="All_Contents_Nav_Title_Text">직군을 선택해주세요.</h1>
      </div>
    </div>
  );
};

export default AllContentsNav;
