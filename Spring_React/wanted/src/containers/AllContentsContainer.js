import { useDispatch, useSelector } from "react-redux";
import AllContentsList from "../components/AllContentsList";
import { useCallback } from "react";
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";

const AllContentsContainer = () => {
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
    <AllContentsList
      trueArr={trueArr}
      onBookmarkTrue={onBookmarkTrue}
      onBookmarkFalse={onBookmarkFalse}
    />
  );
};

export default AllContentsContainer;
