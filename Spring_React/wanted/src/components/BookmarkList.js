import "./../styles/BookmarkList.css";
import DetailPositionContents from "./DetailPositionContents";
import dummy from "./../db/DeatilMain.json";

const BookmarkList = ({ trueArr, onBookmarkTrue, onBookmarkFalse }) => {
  return (
    <ul className="BookmarkList_ul">
      {dummy.main
        .filter((item) => {
          return trueArr.includes(String(item.id));
        })
        .map((item) => (
          <DetailPositionContents
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            company={item.company}
            response={item.response}
            place={item.place}
            compensation={item.compensation}
            trueArr={trueArr}
            onBookmarkTrue={onBookmarkTrue}
            onBookmarkFalse={onBookmarkFalse}
          ></DetailPositionContents>
        ))}
    </ul>
  );
};

export default BookmarkList;
