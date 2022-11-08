import "./../styles/Main_Insight_Content.css";

const MainInsightContent = (props) => {
  return (
    <li className="Main_Insight_Content">
      <img
        src={props.src}
        alt={props.title}
        className="Main_Insight_Content_Img"
      />
      <h2 className="Main_Insight_Content_Title">{props.title}</h2>
      <p className="Main_Insight_Content_Info">{props.info}</p>
      <div className="Main_Insight_Content_Writer">
        <img
          src={props.writerImg}
          alt={props.writer}
          className="Main_Insight_Content_WriterImg"
        ></img>
        <p className="Main_Insight_Content_WriterText">{props.writer}</p>
      </div>
    </li>
  );
};

MainInsightContent.defaultProps = {
  writerImg:
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90",
};

export default MainInsightContent;
