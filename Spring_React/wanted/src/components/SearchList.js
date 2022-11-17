import "./../styles/BookmarkList.css";
import DetailPositionContents from "./DetailPositionContents";
import dummy from "../db/DeatilMain.json";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";

const SearchList = () => {
  //북마크 확인
  const trueArr = useSelector((state) => state.bookmark.trueID);
  const dispatch = useDispatch();
  const onBookmarkTrue = useCallback(
    (id) => dispatch(bookmarkTrue(id)),
    [dispatch]
  );
  const onBookmarkFalse = useCallback(
    (id) => dispatch(bookmarkFalse(id)),
    [dispatch]
  );

  //키워드 확인
  const searchKeyword = useSelector((state) => state.search.searchWord);

  return (
    <ul className="BookmarkList_ul">
      {dummy.main
        .filter((item) => {
          if (
            item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.company.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.text.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.tag.includes(searchKeyword.toLowerCase()) ||
            item.companyTag.includes(searchKeyword.toLowerCase())
          ) {
            return item;
          }
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

export default SearchList;
