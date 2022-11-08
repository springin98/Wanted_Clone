import MainArticleContents from "./MainArticleContents";
import MainContentsTitle from "./MainContentsTitle";
import "./../styles/Main_Article.css";

const MainArticle = () => {
  return (
    <div className="Main_Article_Div">
      <div className="Main_Article_Div_Div">
        <MainContentsTitle
          name="3분만에 읽는 Wanted+ 아티클"
          more="아티클 전체보기&nbsp;"
        />
        <ul>
          <MainArticleContents />
        </ul>
      </div>
    </div>
  );
};

export default MainArticle;
