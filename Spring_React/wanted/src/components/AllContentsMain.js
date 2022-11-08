import "./../styles/All_Contents_Main.css";

import FontAwsomeFaBookmark from "./FontAwsomeFaBookmark";
import FontAwsomeChevronRight from "./FontAwsomeChevronRight";

import DetailPositionContents from "./DetailPositionContents";
import "./../styles/Detail_Position.css";
import dummy from "./../db/DeatilMain.json";

const AllContentsMain = () => {
  const contentsList = dummy.main.map((content, index) => (
    <DetailPositionContents
      key={index}
      id={content.id}
      img={content.img}
      title={content.title}
      company={content.company}
      response={content.response}
      place={content.place}
      compensation={content.compensation}
    ></DetailPositionContents>
  ));

  return (
    <div className="All_Contents_Main_Component_Div">
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
      <ul className="Detail_Position_ul">{contentsList}</ul>
    </div>
  );
};

export default AllContentsMain;
