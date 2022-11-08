import "./../styles/Main_Article_Content.css";

const MainArticleContent = (props) => {
  return (
    <li className="Main_Article_Content">
      <img
        src={props.src}
        alt={props.title}
        className="Main_Article_Content_Img"
      />
      <h2 className="Main_Article_Content_Title">{props.title}</h2>
      <p className="Main_Article_Content_Tag">{props.tag}</p>
    </li>
  );
};

export default MainArticleContent;
