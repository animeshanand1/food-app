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
    setFoodCategory(response[1]);
    // console.log(response[1]);
    setFoodItem(response[0]);
    // console.log(response[0]);
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
            ? foodItem.map((Data) => {
                return (
                  <div className="row mb-3">
                    <div key={Data.id} className="fs-3 m-3">
                      {Data.CategoryName}
                    </div>
                    <hr />
                    {foodItem!==[]?
                    foodItem.filter((item)=>Data.CategoryName).map(filterItems=>{
                      return(
                        <div>
                          <Card/>
                        </div>
                      )
                    }):<h3>No such items</h3>}
                  </div>
                );
              })
            : ""}
          
        </div>
      </div>
    </>
  );
}

export default Home;
