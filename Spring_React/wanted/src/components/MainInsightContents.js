import "./../styles/Main_Insight_Contents.css";
import MainInsightContent from "./MainInsightContent";
import dummy from "./../db/MainInsightContents.json";

const MainInsightContents = () => {
  const contentsList = dummy.contents.map((content, index) => (
    <MainInsightContent
      key={index}
      src={content.link}
      title={content.title}
      info={content.info}
      writer={content.writer}
    ></MainInsightContent>
  ));

  return <ul className="Main_Insight_Contents">{contentsList}</ul>;
};

export default MainInsightContents;
