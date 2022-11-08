import "./../styles/All_Contents.css";

import AllContentsNav from "./../components/AllContentsNav";
import AllContentsNavSticky from "../components/AllContentsNavSticky";

const AllContents = () => {
  return (
    <div className="All_Contents_Div">
      <div className="All_Contents_Nav_Div">
        <div className="All_Contents_Nav_Div_Div">
          <AllContentsNav />
        </div>
      </div>
      <div className="All_Contents_Main_Div">
        <div className="All_Contents_Main_Div_Div">
          <AllContentsNavSticky />
        </div>
      </div>
    </div>
  );
};

export default AllContents;
