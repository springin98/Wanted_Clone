import "./../styles/Detail.css";
import dummy from "./../db/DeatilMain.json";

import DetailMain from "./../components/DetailMain";
import DetailNav from "./../components/DetailNav";
import DetailPosition from "./../components/DetailPosition";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div className="Detail_Div">
      <div className="Detail_Div_Div">
        <div className="Detail_Div_Div_Div">
          <DetailMain id={id} />
          <DetailNav />
        </div>
        <DetailPosition />
      </div>
    </div>
  );
};

export default Detail;
