import { useState } from "react";
import "./../styles/Detail_Main.css";
import dummy from "./../db/DeatilMain.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import mapImg from "./../assets/imgs/detail_map.png";

const DetailMain = (props) => {
  const mainContentNum = props.id;

  //태그 버튼을 태그의 개수만큼 출력하기 위함
  const tagList = dummy.main[mainContentNum].tag.map((tags, index) => (
    <button className="Detail_Main_Text_TagButton_Style" key={index}>
      #{tags}
    </button>
  ));
  const skillList = dummy.main[mainContentNum].skill.map((skills, index) => (
    <div className="Detail_Main_Text_Skill" key={index}>
      {skills}
    </div>
  ));

  //응답률 %만큼 출력
  function responseButton() {
    if (
      95 <= dummy.main[mainContentNum].response &&
      dummy.main[mainContentNum].response <= 100
    ) {
      return (
        <div className="Detail_Main_Text_Company_Response_Style Detail_Main_Text_Company_Response_Green">
          응답률 매우 높음
        </div>
      );
    } else if (
      75 <= dummy.main[mainContentNum].response &&
      dummy.main[mainContentNum].response <= 95
    ) {
      return (
        <div className="Detail_Main_Text_Company_Response_Style Detail_Main_Text_Company_Response_Blue">
          응답률 평균 이상
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  //Copyright 저작권 버튼 누르면 보이게 하기
  const [copyBool, setCopyBool] = useState(false);

  return (
    <div className="Detail_Main_Div">
      <div className="Detail_Main_ImgSlider">
        <div className="Detail_Main_Button_Div">
          <button className="Detail_Main_Button_Style">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="Detail_Main_Button_Style">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <img
          src={dummy.main[mainContentNum].img}
          alt={dummy.main[mainContentNum].company}
          className="Detail_Main_Img"
        />
      </div>
      <div className="Detail_Main_Text_Div">
        <div className="Detail_Main_Text_Div_Div">
          <h2 className="Detail_Main_Text_Title">
            {dummy.main[mainContentNum].title}
          </h2>
          <div className="Detail_Main_Text_Company_Div">
            <button className="Detail_Main_Text_Company">
              {dummy.main[mainContentNum].company}
            </button>
            {responseButton()}
            <p className="Detail_Main_Text_Company_Place">
              | {dummy.main[mainContentNum].place}
            </p>
          </div>
          <div className="Detail_Main_Text_TagList">{tagList}</div>
          <span className="Detail_Main_Text">
            {dummy.main[mainContentNum].text}
          </span>
          <div className="Detail_Main_Text_Skill_Div">
            <h3>기술스택 툴</h3>
            <div className="Detail_Main_Text_SkillList">{skillList}</div>
          </div>
        </div>
      </div>
      <div className="Detail_Main_SubText_Div">
        <div className="Detail_Main_SubText_Div_Div">
          <p className="Detail_Main_SubText_Head">마감일</p>
          <p className="Detail_Main_SubText_Detail">
            {dummy.main[mainContentNum].date}
          </p>
        </div>
        <div className="Detail_Main_SubText_Div_Div">
          <p className="Detail_Main_SubText_Head">근무지역</p>
          <p className="Detail_Main_SubText_Detail">
            {dummy.main[mainContentNum].companyPlace}
          </p>
        </div>
        <img
          src={mapImg}
          alt={dummy.main[mainContentNum].companyPlace}
          className="Detail_Main_MapImg"
        />
      </div>
      <div className="Detail_Main_CompanyInfo_Div">
        <div className="Detail_Main_CompanyInfo_Div_Div">
          <img
            src={dummy.main[mainContentNum].companyImg}
            alt={dummy.main[mainContentNum].company}
            className="Detail_Main_CompanyLogo"
          />
          <div className="Detail_Main_CompanyInfo_Div_Div_Div">
            <p className="Detail_Main_CompanyInfo_Company">
              {dummy.main[mainContentNum].company}
            </p>
            <p className="Detail_Main_CompanyInfo_CompanyTag">
              {dummy.main[mainContentNum].companyTag}
            </p>
          </div>
        </div>
        <button className="Detail_Main_CompanyInfo_FollowButton">팔로우</button>
      </div>
      <div className="Detail_Main_Copyright_Visible_Div">
        <div className="Detail_Main_Copyright_Div">
          <div className="Detail_Main_Copyright_Div_Div">
            <div className="Detail_Main_Copyright_Svg_Div">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g fill="currentColor" fillRule="evenodd">
                  <path
                    fillRule="nonzero"
                    d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
                  ></path>
                  <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
                  <path
                    fillRule="nonzero"
                    d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="Detail_Main_Copyright_Text">
              본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
              없으며, 구직활동 이외의
              <br />
              용도로 사용할 수 없습니다.
            </p>
          </div>
          <button
            onClick={() => {
              setCopyBool(!copyBool);
            }}
            className="Detail_Main_Copyright_More"
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
      {copyBool ? (
        <div className="Detail_Main_Copyright_More_Div">
          본 채용 정보는 블루비커에서 제공한 자료를 바탕으로 원티드랩에서 표현을
          수정하고 이의 배열 및 구성을 편집하여 완성한 원티드랩의 저작자산이자
          영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는 전부에 대하여
          원티드랩의 동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수
          없으며, 게재된 채용기업의 정보는 구직자의 구직활동 이외의 용도로
          사용될 수 없습니다. 원티드랩은 블루비커 에서 게재한 자료에 대한 오류나
          그 밖에 원티드랩이 가공하지 않은 정보의 내용상 문제에 대하여 어떠한
          보장도 하지 않으며, 사용자가 이를 신뢰하여 취한 조치에 대해 책임을
          지지 않습니다. {"<"}저작권자 (주)원티드랩. 무단전재-재배포금지
          {">"}
        </div>
      ) : null}
    </div>
  );
};

export default DetailMain;
