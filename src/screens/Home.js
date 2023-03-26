import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Header from "../components/Header";

function Home() {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodCategory(response[0]);
    setFoodItem(response[1]);
    console.log(response[0], response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="Main">
        <div>
          <Header />
        </div>

        <div className="Home-carousal" style={{ margin: "5px 0px" }}>
          <Carousal />
        </div>

        <div className="container">
          {foodCategory !== []
            ? foodCategory.map((Data) => {
                return <div>Hi</div>;
              })
            : ""}
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
