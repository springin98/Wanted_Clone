import BookmarkContainer from "../containers/BookmarkContainer";
import "./../styles/Bookmark.css";

const Bookmark = () => {
  return (
    <div className="Bookmark_Div">
      <div className="Bookmark_Div_Div">
        <h1 className="Bookmark_Head">북마크</h1>
        <BookmarkContainer />
      </div>
    </div>
  );
};

export default Bookmark;
