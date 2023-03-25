import React from "react";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <div className="Main">
        <div>
          <Header />
        </div>

        <div className="Home-carousal" style={{margin:'5px 0px'}}>
          <Carousal />
        </div>

        <div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
