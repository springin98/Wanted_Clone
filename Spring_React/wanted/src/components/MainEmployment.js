import "./../styles/Main_Employment.css";

import MainEmploymentli from "./MainEmploymentli";
import dummy from "./../db/MainEmployment.json";

const MainEmployment = () => {
  const contentsList = dummy.contents.map((content, index) => (
    <MainEmploymentli key={index} title={content.title}></MainEmploymentli>
  ));

  return (
    <div className="Main_Employment_Div">
      <div className="Main_Employment_Div_Div">
        <h1 className="Main_Employment_Title">채용 정보를 찾고 계셨나요?</h1>
        <ul className="Main_Employment_ul">{contentsList}</ul>
      </div>
    </div>
  );
};

export default MainEmployment;
