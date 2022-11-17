import "./../styles/Search_Company_Content.css";
import dummy from "../db/DeatilMain.json";
import { useSelector } from "react-redux";

const SearchCompanyContent = () => {
  //키워드 확인
  const searchKeyword = useSelector((state) => state.search.searchWord);

  return (
    <ul className="Search_Company_Content_ul">
      {dummy.main
        .filter((item) => {
          if (
            item.company.toLowerCase().includes(searchKeyword.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => (
          <li className="Search_Company_Content_li">
            <div className="Search_Company_Content_Div_Div">
              <img
                src={item.companyImg}
                className="Search_Company_Content_Logo"
                alt={item.company}
              ></img>
              <div className="Search_Company_Content_text_Div">
                <span className="Search_Company_Content_text_company">
                  {item.company}
                </span>
                <span className="Search_Company_Content_text_category">
                  {item.companyTag}
                </span>
              </div>
            </div>
            <div className="Search_Company_Content_FollowBtn_Div">
              <button className="Search_Company_Content_FollowBtn">
                팔로우
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default SearchCompanyContent;
