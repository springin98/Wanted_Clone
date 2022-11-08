import React from "react";
import "./../styles/Main.css";
import MainSlideBanner from "./../components/MainSlideBanner";
import MainInsight from "./../components/MainInsight";
import MainArticle from "../components/MainArticle";
import MainVOD from "../components/MainVOD";
import MainEvent from "../components/MainEvent";
import MainSubscribe from "../components/MainSubscribe";
import MainEmployment from "../components/MainEmployment";

const Main = () => {
  return (
    <div className="Main">
      <MainSlideBanner />
      <MainInsight />
      <MainArticle />
      <MainVOD />
      <MainEvent />
      <MainSubscribe />
      <MainEmployment />
    </div>
  );
};

export default Main;
