import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default LayOut;
