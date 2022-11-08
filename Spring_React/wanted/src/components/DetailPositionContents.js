import "./../styles/Detail_Position_Contents.css";
import { Link } from "react-router-dom";

import FontAwsomeFaBookmark from "./FontAwsomeFaBookmark";
import FontAwsomeFaBookmarkRegular from "./FontAwsomeFaBookmarkRegular";
import { useRef, useState } from "react";

const DetailPositionContents = (props) => {
  function responseButton() {
    if (95 <= props.response && props.response <= 100) {
      return (
        <div>
          <button className="Detail_Position_li_responseButton">
            응답률 매우 높음
          </button>
        </div>
      );
    }
  }

  //북마크 색 변경
  const bookmarkColor = useRef(null);
  const [bookmarkBoolean, setBookmarkBoolean] = useState(false);
  const changeColor = () => {
    if (bookmarkBoolean === false) {
      bookmarkColor.current.style.color = "#36f";
      bookmarkColor.current.style.opacity = "1";
    } else {
      bookmarkColor.current.style.color = "rgb(80, 80, 80)";
      bookmarkColor.current.style.opacity = "0.5";
    }
  };
  const changeBoolean = () => {
    if (bookmarkBoolean === false) {
      setBookmarkBoolean(true);
    } else {
      setBookmarkBoolean(false);
    }
    changeColor();
  };

  return (
    <li className="Detail_Position_li">
      <button
        onClick={() => {
          changeBoolean();
        }}
      >
        <div className="Detail_Position_li_bookmark_out">
          <FontAwsomeFaBookmarkRegular />
        </div>
        <div className="Detail_Position_li_bookmark_in" ref={bookmarkColor}>
          <FontAwsomeFaBookmark />
        </div>
      </button>
      <Link to={`${props.id}`}>
        <div>
          <img
            src={props.img}
            alt={props.title}
            className="Detail_Position_li_img"
          ></img>
        </div>
        <div className="Detail_Position_li_Text_Div">
          <h3 className="Detail_Position_li_title">{props.title}</h3>
          <span className="Detail_Position_li_company Detail_Position_li_Text_Style">
            {props.company}
          </span>
          {responseButton()}
          <span className="Detail_Position_li_place Detail_Position_li_Text_Style">
            {props.place}
          </span>
          <div className="Detail_Position_li_compensation_Div">
            <span className="Detail_Position_li_compensation_Text_Style">
              채용보상금&nbsp;
            </span>
            <span className="Detail_Position_li_compensation_Text_Style">
              {props.compensation}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default DetailPositionContents;
