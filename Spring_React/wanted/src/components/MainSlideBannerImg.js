import React from "react";
import PropTyes from "prop-types";
import "./../styles/Main_SlideBannerImg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MainSlideBannerImg = (props) => {
  return (
    <div>
      <img className="Main_SlideBannerImg" src={props.src} alt={props.alt} />
      <div className="Main_SlideBannerImg_Informaiton_Div">
        <div className="Main_SlideBannerImg_Text_Div">
          <h2 className="Main_SlideBannerImg_Title">{props.title}</h2>
          <h3 className="Main_SlideBannerImg_Contents">{props.contents}</h3>
        </div>
        <div className="Main_SlideBannerImg_Address_Button_Div">
          <button className="Main_SlideBannerImg_Address_Button">
            <a href={props.href} className="Main_SlideBannerImg_Address">
              바로가기 &nbsp;
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

MainSlideBannerImg.PropTyes = {
  src: PropTyes.string,
  alt: PropTyes.string,
  title: PropTyes.string,
  contents: PropTyes.string,
  href: PropTyes.string,
};

export default MainSlideBannerImg;
