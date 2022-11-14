import AllContentsContainer from "../containers/AllContentsContainer";

const DetailPosition = () => {
  return (
    <div className="Detail_Position_Div">
      <div className="Detail_Position_Div_Div">
        <h2 className="Detail_Position_Title">이 포지션을 찾고 계셨나요?</h2>
        <ul className="Detail_Position_ul">
          <AllContentsContainer />
        </ul>
      </div>
    </div>
  );
};

export default DetailPosition;
