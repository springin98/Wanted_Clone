import MainArticleContent from "./MainArticleContent";
import dummy from "./../db/MainArticleContents.json";

const MainArticleContents = () => {
  const contentsList = dummy.contents.map((content, index) => (
    <MainArticleContent
      key={index}
      src={content.link}
      title={content.title}
      tag={content.tag}
    ></MainArticleContent>
  ));

  return <ul className="Main_Insight_Contents">{contentsList}</ul>;
};

export default MainArticleContents;
