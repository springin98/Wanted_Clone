import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { searchEnter } from "../modules/search";
import HeaderSearch from "../components/HeaderSearch";

const SearchContainer = ({ closePortal }) => {
  const searchKeyword = useSelector((state) => state.search.searchWord);
  console.log("searchKeyword : " + searchKeyword);

  const dispatch = useDispatch();
  const onSearchEnter = useCallback(
    (word) => dispatch(searchEnter(word)),
    [dispatch]
  );

  return (
    <HeaderSearch
      searchKeyword={searchKeyword}
      onSearchEnter={onSearchEnter}
      closePortal={closePortal}
    />
  );
};

export default SearchContainer;
