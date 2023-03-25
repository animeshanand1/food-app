import React, { useState } from "react";
import "./carousal.css";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function Carousal() {
  const [index, setIndex] = useState(0);
  const imgs = [
    {
      id: "1",
      value: "images/burg1.jpg",
    },
    {
      id: "2",
      value: "images/burg2.jpg",
    },
    {
      id: "3",
      value: "images/burg3.jpg",
    },
    {
      id: "4",
      value: "images/burg4.jpg",
    },
  ];
  function next() {
    if (index === imgs.length-1) {
      setIndex(0);
    } else {
      setIndex(index+1);
    }
    console.log(index);
  }
  function prev() {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
    console.log(index);
  }

  return (
    <div className="Carousal">
      <div className="carousal-img">{imgs.map((item) => (
        <div className="active-img"><img src={item.value}/></div>
      ))}</div>

      <div>
        <h3 className="react-nextIcon">
          <FcNext onClick={next} />
        </h3>
      </div>
      <div>
        <h3 className="react-prevIcon">
          <FcPrevious onClick={prev} />
        </h3>
      </div>
    </div>
  );
}

export default Carousal;

{
  /* <div className="carou
  value">
  
  value className="active-image" src={burger1}  />
  
  value src={burger1} alt="img1" />
  
  value src={burger1} alt="img1" />
  
  value src={burger1} alt="img1" />
      </div>
      <div className="next-icon">
      <h2 className="react-nextIcon"><FcNext onClick={()=>next()}/></h2>
      </div>
      <div className="prev-icon">
      <h2 className="react-prevIcon"><FcPrevious onClick={()=>prev()}/></h2>
      </div> */
}
