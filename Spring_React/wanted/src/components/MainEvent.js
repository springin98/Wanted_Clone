import MainContentsTitle from "./MainContentsTitle";
import MainEventContents from "./MainEventContents";

import "./../styles/Main_Event.css";

const MainEvent = () => {
  return (
    <div className="Main_Event_Div">
      <div className="Main_Event_Div_Div">
        <MainContentsTitle
          name="커리어 성장을 위한 맞춤 이벤트"
          more="이벤트 전체보기&nbsp;"
        />
        <MainEventContents />
      </div>
    </div>
  );
};

export default MainEvent;
