import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./../styles/Main_Contents_Title.css";

const MainContentsTitle = (props) => {
  return (
    <div className="Main_Contents_Title_Div">
      <button className="Main_Contents_ArrowButton">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="Main_Contents_Title_Div_Div">
        <h2 className="Main_Contents_Title">{props.name}</h2>
        <button className="Main_Contents_MoreButton">
          {props.more}
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <button className="Main_Contents_ArrowButton">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default MainContentsTitle;
