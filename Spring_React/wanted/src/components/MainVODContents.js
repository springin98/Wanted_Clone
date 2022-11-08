import MainVODContent from "./MainVODContent";
import "./../styles/Main_VOD_Contents.css";
import dummy from "./../db/MainVODContents.json";

const MainVODContents = () => {
  const contentsList = dummy.contents.map((content, index) => (
    <MainVODContent
      key={index}
      link={content.link}
      time={content.time}
      interviewee={content.interviewee}
      title={content.title}
      info={content.info}
    ></MainVODContent>
  ));

  return <ul className="Main_VOD_Contents_Ul">{contentsList}</ul>;
};

export default MainVODContents;
