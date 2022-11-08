import "./../styles/Detail_Nav_Amount.css";

const DetailNavAmount = () => {
  return (
    <div className="Detail_Nav_Amount">
      <div className="Detail_Nav_Amount_Div">
        <span className="Detail_Nav_Amount_TitleStyle">추천인</span>
        <span className="Detail_Nav_Amount_AmountStyle">500,000원</span>
      </div>
      <div className="Detail_Nav_Amount_Div">
        <span className="Detail_Nav_Amount_TitleStyle">지원자</span>
        <span className="Detail_Nav_Amount_AmountStyle">500,000원</span>
      </div>
    </div>
  );
};

export default DetailNavAmount;
