import DetailPositionContents from "./DetailPositionContents";
import "./../styles/Detail_Position.css";
import dummy from "./../db/DeatilMain.json";

const DetailPosition = () => {
  const contentsList = dummy.main.map((content, index) => (
    <DetailPositionContents
      key={index}
      id={content.id}
      img={content.img}
      title={content.title}
      company={content.company}
      response={content.response}
      place={content.place}
      compensation={content.compensation}
    ></DetailPositionContents>
  ));

  return (
    <div className="Detail_Position_Div">
      <div className="Detail_Position_Div_Div">
        <h2 className="Detail_Position_Title">이 포지션을 찾고 계셨나요?</h2>
        <ul className="Detail_Position_ul">{contentsList}</ul>
      </div>
    </div>
  );
};

export default DetailPosition;
