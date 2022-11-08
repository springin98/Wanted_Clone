import LoginComponent from "../components/LoginComponent";
import SigninComponent from "../components/SigninComponent";
import { useState } from "react";

const Login = (props) => {
  //1일 때 로그인창, 2일 때 회원가입 창 보이기&&로그인 창 없애기
  const [modalOpen, setModalOpen] = useState("1");
  //
  const [email, setEmail] = useState("");

  return (
    <div className="Login_Div">
      {modalOpen === "1" ? (
        <LoginComponent setModalOpen={setModalOpen} setEmail={setEmail} />
      ) : (
        <SigninComponent setModalOpen={setModalOpen} email={email} />
      )}
    </div>
  );
};

export default Login;

/*
함수
Footer의 컴포넌트에 넣기
- 로그인이 안되어 있을 경우, 로그인 페이지로 바로 넘어가는 것

const isLoggedIn = false;

if (!isLoggedIn) {
  return <Navigate to="/login" replace={true} />;
}
*/
