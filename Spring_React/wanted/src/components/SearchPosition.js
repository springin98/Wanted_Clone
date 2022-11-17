import "./../styles/Search_Position.css";
import ContentsMenuBar from "./ContentsMenuBar";
import SearchList from "./SearchList";

const SearchPosition = () => {
  return (
    <div>
      <h1 className="Search_Position_Title">포지션</h1>
      <ContentsMenuBar />
      <SearchList />
    </div>
  );
};

export default SearchPosition;
