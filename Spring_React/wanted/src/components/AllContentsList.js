import "./../styles/All_Contents_List.css";
import DetailPositionContents from "./../components/DetailPositionContents";
import dummy from "./../db/DeatilMain.json";

const AllContentsList = ({
  trueArr,
  idCheckBoolean,
  onBookmarkTrue,
  onBookmarkFalse,
}) => {
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
      trueArr={trueArr}
      onBookmarkTrue={onBookmarkTrue}
      onBookmarkFalse={onBookmarkFalse}
      idCheckBoolean={idCheckBoolean}
    ></DetailPositionContents>
  ));

  return <ul className="AllContentsList_ul">{contentsList}</ul>;
};

export default AllContentsList;
