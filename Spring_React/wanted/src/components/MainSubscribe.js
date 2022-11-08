import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import logo from "./../assets/imgs/logo.png";

import "./../styles/Main_Subscribe.css";

const MainSubscribe = () => {
  return (
    <div className="Main_Subscribe_Div">
      <div className="Main_Subscribe_Div_Div">
        <div className="Main_Subscribe_Text_Div">
          <div className="Main_Subscribe_Text_Title_Div">
            <div className="Main_Subscribe_Title">
              <img src={logo} alt="wanted logo" />
              <FontAwesomeIcon
                icon={faPlus}
                className="Main_Subscribe_Title_PlusIcon"
              />
              <h2>구독해야 하는 이유</h2>
            </div>
            <span>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</span>
          </div>
          <button className="Main_Subscribe_Subscribe_Button">
            <span>
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;첫 구독 0원 신청하기
            </span>
          </button>
        </div>
        <div className="Main_Subscribe_Img_Div">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90"
            alt="wanted를 구독해야 하는 이유"
            className="Main_Subscribe_Img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MainSubscribe;
