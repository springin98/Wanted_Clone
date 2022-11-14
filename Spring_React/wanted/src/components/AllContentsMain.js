import "./../styles/All_Contents_Main.css";
import { Link } from "react-router-dom";

import FontAwsomeFaBookmark from "./FontAwsomeFaBookmark";
import FontAwsomeChevronRight from "./FontAwsomeChevronRight";

import "./../styles/Detail_Position.css";
import AllContentsContainer from "../containers/AllContentsContainer";

const AllContentsMain = () => {
  return (
    <div className="All_Contents_Main_Component_Div">
      <Link to="/bookmark">
        <button className="All_Contents_Main_Bookmark_Btn">
          <div className="All_Contents_Main_Bookmark_Btn_Div">
            <div className="All_Contents_Main_BookmarkIcon_Div">
              <FontAwsomeFaBookmark />
            </div>
            북마크 모아보기
            <span className="All_Contents_Main_Bookmark_RightIcon">
              <FontAwsomeChevronRight />
            </span>
          </div>
        </button>
      </Link>
      <AllContentsContainer />
    </div>
  );
};

export default AllContentsMain;
