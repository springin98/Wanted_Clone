import { useDispatch, useSelector } from "react-redux";
import BookmarkList from "../components/BookmarkList";
import { useCallback } from "react";
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";

const BookmarkCointainer = () => {
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

  return (
    <BookmarkList
      trueArr={trueArr}
      onBookmarkTrue={onBookmarkTrue}
      onBookmarkFalse={onBookmarkFalse}
    />
  );
};

export default BookmarkCointainer;
