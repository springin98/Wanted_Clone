import SearchPosition from "../components/SearchPosition";
import "./../styles/Search.css";
import SearchCompany from "../components/SearchCompany";
import { useSelector } from "react-redux";
import SearchMore from "../components/SearchMore";

const Search = () => {
  const searchKeyword = useSelector((state) => state.search.searchWord);

  return (
    <div className="Search_Div">
      <div className="Search_Title_Div">
        <h1 className="Search_Title">{searchKeyword}</h1>
      </div>
      <div className="Search_Content_Div">
        <div className="Search_Content_Div_Div">
          <SearchCompany />
          <SearchPosition />
          <SearchMore />
        </div>
      </div>
    </div>
  );
};

export default Search;
