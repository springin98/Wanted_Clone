import "./../styles/Main_Event_Content.css";

const MainEventContent = (props) => {
  function tagInfo() {
    if (props.tag === "교육") {
      return (
        <button className="Main_Event_content_Tag_Education Main_Event_Tag_style">
          {props.tag}
        </button>
      );
    } else if (props.tag === "아티클") {
      return (
        <button className="Main_Event_content_Tag_Article Main_Event_Tag_style">
          {props.tag}
        </button>
      );
    } else if (props.tag === "VOD") {
      return (
        <button className="Main_Event_content_Tag_VOD Main_Event_Tag_style">
          {props.tag}
        </button>
      );
    } else if (props.tag === "네트워킹") {
      return (
        <button className="Main_Event_content_Tag_Networking Main_Event_Tag_style">
          {props.tag}
        </button>
      );
    }
  }

  function tagOnline() {
    if (props.tagOnline === "온라인") {
      return (
        <button className="Main_Event_content_Tag_Online Main_Event_Tag_style">
          <div className="Main_Event_content_Tag_Online_svg_Div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="12"
              viewBox="0 0 11 12"
            >
              <path
                fill="currentColor"
                d="M5.98.9A5.09 5.09 0 00.32 6.54l1.03-.1a4.07 4.07 0 014.52-4.53L5.98.89zm4.57 4.56l-1.03.1A4.07 4.07 0 015 10.1l-.11 1.03a5.1 5.1 0 005.66-5.66zM5.76 2.94c-.9-.1-1.84.18-2.53.86a3.06 3.06 0 00-.86 2.54l1.02-.11c-.07-.6.12-1.24.57-1.7a2.05 2.05 0 011.7-.57l.1-1.02zM8.5 5.68l-1.04.12a2 2 0 01-2.24 2.24L5.1 9.06a3.06 3.06 0 003.4-3.4zm-2.53-.22c-.3-.3-.8-.3-1.1 0-.3.3-.29.78.02 1.08.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08z"
              ></path>
            </svg>
          </div>
          <span className="Main_Event_content_Tag_Online_span">
            {props.tagOnline}
          </span>
        </button>
      );
    } else {
      return <></>;
    }
  }

  return (
    <li className="Main_Event_Content_li">
      <img
        src={props.src}
        alt={props.title}
        className="Main_Event_Content_Img"
      ></img>
      <div className="Main_Event_Content_Tag_Div">
        {tagOnline()}
        {tagInfo()}
      </div>
      <h2 className="Main_Event_Content_Title">{props.title}</h2>
      <p className="Main_Event_Content_Date">{props.date}</p>
    </li>
  );
};

export default MainEventContent;
