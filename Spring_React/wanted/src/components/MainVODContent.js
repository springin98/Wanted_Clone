import "./../styles/Main_VOD_Content.css";

const MainVODContent = (props) => {
  return (
    <li className="Main_VOD_Content">
      <div className="Main_VOD_Content_ImgDiv">
        <img
          src={props.link}
          alt={props.title}
          className="Main_VOD_Content_Img"
        />
        <div className="Main_VOD_Content_ImgTime">{props.time}</div>
      </div>
      <p className="Main_VOD_Content_Interviewee Main_VOD_Content_TextStyle">
        {props.interviewee}
      </p>
      <h2 className="Main_VOD_Content_Title Main_VOD_Content_TextStyle">
        {props.title}
      </h2>
      <p className="Main_VOD_Content_Info Main_VOD_Content_TextStyle">
        {props.info}
      </p>
    </li>
  );
};

export default MainVODContent;
