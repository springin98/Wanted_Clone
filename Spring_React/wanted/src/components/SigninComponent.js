import "./../styles/Signin.css";

import dummy from "./../db/SigninLanguage.json";
import { useEffect, useState } from "react";
import * as Effectiveness from "./../function/EffectivenessTest";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SigninComponent = (props) => {
  const langList = dummy.langs.map((langs, index) => (
    <option key={index}>{langs}</option>
  ));

  //전체동의 구현 이벤트
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [oneIDCheck, setOneIDCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [backgroundColorAll, setBackgroundColorAll] = useState(false);
  const [backgroundColorAge, setBackgroundColorAge] = useState(false);
  const [backgroundColorOneID, setBackgroundColorOneID] = useState(false);
  const [backgroundColorPrivacy, setBackgroundColorPrivacy] = useState(false);

  //전체 동의 눌렀을 때, 다른 체크박스들도 반응하는 이벤트 && 색 바꿔주기
  const allCheckEvent = (allCheck) => {
    if (allCheck === true) {
      setAgeCheck(true);
      setOneIDCheck(true);
      setPrivacyCheck(true);
      setBackgroundColorAll(true);
      setBackgroundColorAge(true);
      setBackgroundColorOneID(true);
      setBackgroundColorPrivacy(true);
    } else {
      setAgeCheck(false);
      setOneIDCheck(false);
      setPrivacyCheck(false);
      setBackgroundColorAll(false);
      setBackgroundColorAge(false);
      setBackgroundColorOneID(false);
      setBackgroundColorPrivacy(false);
    }
  };

  const allCheckBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      allCheckEvent(true);
    } else {
      setAllCheck(false);
      allCheckEvent(false);
    }
  };
  const ageCheckBtEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
      setBackgroundColorAge(true);
    } else {
      setAgeCheck(false);
      setBackgroundColorAge(false);
      setAllCheck(false);
      setBackgroundColorAll(false);
    }
  };
  const oneIDCheckBtEvent = () => {
    if (oneIDCheck === false) {
      setOneIDCheck(true);
      setBackgroundColorOneID(true);
    } else {
      setOneIDCheck(false);
      setBackgroundColorOneID(false);
      setAllCheck(false);
      setBackgroundColorAll(false);
    }
  };
  const privacyCheckBtEvent = () => {
    if (privacyCheck === false) {
      setPrivacyCheck(true);
      setBackgroundColorPrivacy(true);
    } else {
      setPrivacyCheck(false);
      setBackgroundColorAll(false);
      setAllCheck(false);
      setBackgroundColorPrivacy(false);
    }
  };

  //이름 검증
  const [isName, setIsName] = useState("");
  const [nameBoolean, setNameBoolean] = useState("");
  const [nameInputStyle, setNameInputStyle] = useState("");

  const nameOnChange = (e) => {
    setIsName(e.target.value);
    setNameBoolean(Effectiveness.nameEffectiveness(isName));
  };

  useEffect(() => {
    if (isName.length === 0) {
    } else {
      nameBoolean
        ? setNameInputStyle("Signin_Input_blueBorder")
        : setNameInputStyle("Signin_Input_redBorder");
    }
  }, [nameBoolean]); //isName을 넣지 않은 이유는 그럼 nameonChange가 될 때마다 실행되기 때문이다.

  function nameWrongText() {
    if (nameBoolean === false) {
      return (
        <span className="Signin_Input_WrongText">
          올바른 이름을 입력해주세요.
        </span>
      );
    } else {
      return null;
    }
  }

  //전화번호 검증
  const [isPhone, setIsPhone] = useState("");
  const [phoneBoolean, setPhoneBoolean] = useState("");
  const [phoneInputStyle, setPhoneInputStyle] = useState("");

  const phoneOnChange = (e) => {
    setIsPhone(e.target.value);
    setPhoneBoolean(Effectiveness.phoneEffectiveness(isPhone));
  };

  useEffect(() => {
    if (isPhone.length === 0) {
    } else {
      phoneBoolean
        ? setPhoneInputStyle("Signin_Input_blueBorder")
        : setPhoneInputStyle("Signin_Input_redBorder");
    }
  }, [phoneBoolean]);

  function phoneWrongText() {
    if (phoneBoolean === false) {
      return (
        <span className="Signin_Input_WrongText">
          올바른 전화번호를 입력해주세요.
        </span>
      );
    } else {
      return null;
    }
  }

  //비밀번호 검증
  const [isPassword, setIsPassword] = useState("");
  const [passwordBoolean, setPasswordBoolean] = useState("");
  const [passwordInputStyle, setPasswordInputStyle] = useState("");

  const passwordOnChange = (e) => {
    setIsPassword(e.target.value);
    setPasswordBoolean(Effectiveness.passwordEffectiveness(isPassword));
  };

  useEffect(() => {
    if (isPassword.length === 0) {
    } else {
      passwordBoolean
        ? setPasswordInputStyle("Signin_Input_blueBorder")
        : setPasswordInputStyle("Signin_Input_redBorder");
    }
  }, [passwordBoolean]);

  function passwordWrongText() {
    if (passwordBoolean === false) {
      return (
        <span className="Signin_Input_WrongText">
          올바르지 않은 비밀번호입니다.
        </span>
      );
    } else {
      return null;
    }
  }

  //비밀번호 일치 검증
  const [isPasswordCollect, setIsPasswordCollect] = useState("");
  const [passwordCollectBoolean, setPasswordCollectBoolean] = useState("");
  const [passwordCollectInputStyle, setPasswordCollectInputStyle] =
    useState("");

  useEffect(() => {
    isPassword === isPasswordCollect
      ? setPasswordCollectBoolean(true)
      : setPasswordCollectBoolean(false);
  }, [isPasswordCollect]);

  useEffect(() => {
    if (isPasswordCollect.length === 0) {
    } else {
      passwordCollectBoolean
        ? setPasswordCollectInputStyle("Signin_Input_blueBorder")
        : setPasswordCollectInputStyle("Signin_Input_redBorder");
    }
  }, [passwordCollectBoolean]);

  function passwordCollectWrongText() {
    if (isPasswordCollect !== "") {
      if (passwordCollectBoolean === false) {
        return (
          <span className="Signin_Input_WrongText">
            비밀번호가 서로 일치하지 않습니다.
          </span>
        );
      } else {
        return (
          <span className="Signin_Input_RightText">
            사용 가능한 비밀번호입니다.
          </span>
        );
      }
    }
  }

  //가입하기 버튼 활성화
  const [signinBtn, setSigninBtn] = useState();

  useEffect(() => {
    if (
      allCheck === true &&
      nameBoolean === true &&
      phoneBoolean === true &&
      passwordBoolean === true &&
      passwordCollectBoolean === true
    ) {
      setSigninBtn(true);
    } else {
      setSigninBtn(false);
    }
  }, [
    allCheck,
    nameBoolean,
    phoneBoolean,
    passwordBoolean,
    passwordCollectBoolean,
  ]);

  return (
    <div className="Signin_Div">
      <div className="Signin_Div_Div">
        <div className="Signin_Header">
          <button
            className="Signin_Header_divStyle"
            onClick={() => props.setModalOpen("1")}
          >
            취소
          </button>
          <h1 className="Signin_Header_Title">회원가입</h1>
          <div className="Signin_Header_divStyle"></div>
        </div>
        <div className="Signin_Body_Div">
          <div className="Signin_Body">
            <div className="Signin_Inputs">
              <div className="Signin_Input_divStyle">
                <label className="Signin_Input_labelStyle">이메일</label>
                <input
                  className="Signin_Input_inputStyle Signin_Input_inputStyle_readOnly"
                  readOnly="readonly"
                  placeholder={props.email}
                ></input>
              </div>
              <div className="Signin_Input_divStyle">
                <label className="Signin_Input_labelStyle">이름</label>
                <input
                  className={`Signin_Input_inputStyle Signin_Input_inputStyle_input ${nameInputStyle}`}
                  placeholder="이름을 입력해주세요."
                  value={isName}
                  type="text"
                  onChange={nameOnChange}
                ></input>
                {nameWrongText()}
              </div>
              <div className="Signin_Input_divStyle">
                <label className="Signin_Input_labelStyle">휴대폰 번호</label>
                <select className="Signin_Input_selectStyle">{langList}</select>
                <div className="Signin_Input_Phone_Div">
                  <div className="Signin_Input_Phone_Div_Div">
                    <input
                      placeholder="(예시) 01012345678"
                      className={`Signin_Input_inputStyle Signin_Input_inputStyle_input ${phoneInputStyle}`}
                      onChange={phoneOnChange}
                      value={isPhone}
                      type="phone"
                    ></input>
                    <div>{phoneWrongText()}</div>
                  </div>
                  <button
                    className="Signin_Input_buttonStyle"
                    disabled={phoneBoolean === true ? "" : "disabled"}
                  >
                    인증번호 받기
                  </button>
                </div>
                <input
                  className="Signin_Input_inputStyle Signin_Input_inputStyle_readOnly"
                  readOnly="readonly"
                  placeholder="인증번호를 입력해주세요."
                ></input>
              </div>
              <div className="Signin_Input_divStyle">
                <label className="Signin_Input_labelStyle">비밀번호</label>
                <input
                  placeholder="비밀번호를 입력해주세요."
                  onChange={passwordOnChange}
                  value={isPassword}
                  className={`Signin_Input_inputStyle Signin_Input_inputStyle_input ${passwordInputStyle}`}
                  type="password"
                ></input>
                {passwordWrongText()}
                <input
                  placeholder="비밀번호를 다시 한번 입력해주세요."
                  onChange={(e) => {
                    setIsPasswordCollect(e.target.value);
                  }}
                  value={isPasswordCollect}
                  className={`Signin_Input_inputStyle Signin_Input_inputStyle_input ${passwordCollectInputStyle}`}
                  type="password"
                ></input>
                {passwordCollectWrongText()}
                <span className="Signin_Input_Password_Text">
                  영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
                  <br />
                  16자 이하로 입력해주세요.
                </span>
              </div>
            </div>
            <div className="Signin_Agree">
              <div className="Signin_Agree_Agree_Div_Div Signin_Agree_All">
                <div
                  className={
                    backgroundColorAll === true
                      ? "Signin_Agree_checkbox_blue Signin_Agree_checkbox_custom"
                      : "Signin_Agree_checkbox_white Signin_Agree_checkbox_custom"
                  }
                >
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <label
                  className="Signin_Agree_TextStyle"
                  style={{ color: "#333", fontWeight: "600" }}
                >
                  <input
                    type="checkbox"
                    className="Signin_Agree_Checkbox"
                    checked={allCheck}
                    onClick={(e) => allCheckBtnEvent()}
                    readOnly="readonly"
                  />
                  전체 동의
                </label>
              </div>
              <div className="Signin_Agree_Agree_Div">
                <div className="Signin_Agree_Agree_Div_Div">
                  <div
                    className={
                      backgroundColorAge === true
                        ? "Signin_Agree_checkbox_blue Signin_Agree_checkbox_custom"
                        : "Signin_Agree_checkbox_white Signin_Agree_checkbox_custom"
                    }
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <label className="Signin_Agree_TextStyle Signin_Argee1_style">
                    <input
                      type="checkbox"
                      className="Signin_Agree_Checkbox Signin_Agree_TextStyle"
                      checked={ageCheck}
                      onClick={(e) => {
                        ageCheckBtEvent();
                      }}
                      readOnly="readonly"
                    />
                    만 14세 이상입니다. (필수)
                  </label>
                </div>
                <div className="Signin_Agree_Agree_Div_Div Signin_Agree_Agree_Div_Div_FlexStyle">
                  <div className="Signin_Agree_Agree_Div_Div_FlexStyle_Div">
                    <div
                      className={
                        backgroundColorOneID === true
                          ? "Signin_Agree_checkbox_blue Signin_Agree_checkbox_custom"
                          : "Signin_Agree_checkbox_white Signin_Agree_checkbox_custom"
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <label className="Signin_Agree_TextStyle">
                      <input
                        type="checkbox"
                        className="Signin_Agree_Checkbox Signin_Agree_TextStyle"
                        checked={oneIDCheck}
                        onClick={(e) => {
                          oneIDCheckBtEvent();
                        }}
                        readOnly="readonly"
                      />
                      oneID 이용약관 동의 (필수)
                    </label>
                  </div>
                  <Link to="/servicecenter" className="Signin_Agree_TextStyle">
                    자세히
                  </Link>
                </div>
                <div className="Signin_Agree_Agree_Div_Div Signin_Agree_Agree_Div_Div_FlexStyle">
                  <div className="Signin_Agree_Agree_Div_Div_FlexStyle_Div">
                    <div
                      className={
                        backgroundColorPrivacy === true
                          ? "Signin_Agree_checkbox_blue Signin_Agree_checkbox_custom"
                          : "Signin_Agree_checkbox_white Signin_Agree_checkbox_custom"
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <label className="Signin_Agree_TextStyle">
                      <input
                        type="checkbox"
                        className="Signin_Agree_Checkbox Signin_Agree_TextStyle"
                        checked={privacyCheck}
                        onClick={(e) => {
                          privacyCheckBtEvent();
                        }}
                        readOnly="readonly"
                      />
                      개인정보 및 수집 이용 동의 (필수)
                    </label>
                  </div>
                  <Link to="/privacy" className="Signin_Agree_TextStyle">
                    자세히
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Signin_Footer">
          <button
            className="Signin_Footer_Btn"
            disabled={signinBtn ? "" : "disabled"}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;
