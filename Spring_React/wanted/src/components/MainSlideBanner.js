import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./../styles/Main_SlideBanner.css";
import MainSlideBannerImg from "./MainSlideBannerImg";
import dummy from "./../db/MainSlideBanner.json";

const MainSlideBanner = () => {
  const imagesList = dummy.images.map((image) => (
    <MainSlideBannerImg
      key={image.id}
      src={image.src}
      alt={image.alt}
      title={image.title}
      contents={image.contents}
      href={image.href}
    />
  ));

  return (
    <div className="Main_SlideBanner_Div">
      <button className="Main_SlideBanner_ArrowButton Main_SlideBanner_LeftButton">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="Main_SlideBanner_Img_Div">{imagesList}</div>
      <button className="Main_SlideBanner_ArrowButton Main_SlideBanner_RightButton">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default MainSlideBanner;
