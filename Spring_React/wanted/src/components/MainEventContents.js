import MainEventContent from "./MainEventContent";
import "./../styles/Main_Event_Contents.css";
import dummy from "./../db/MainEventContents.json";

const MainEventContents = () => {
  const contentsList = dummy.contents.map((content, index) => (
    <MainEventContent
      key={index}
      src={content.link}
      tag={content.tag}
      tagOnline={content.tagOnline}
      title={content.title}
      date={content.date}
    ></MainEventContent>
  ));

  return <ul className="Main_Event_Contents_ul">{contentsList}</ul>;
};

export default MainEventContents;
