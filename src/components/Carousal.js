import React, { useState } from "react";
import "./carousal.css";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, CarouselProps } from "react-responsive-carousel";

function Carousal() {
  const [index, setIndex] = useState(0);
  // const imgs = [
  //   {
  //     id: "1",
  //     value: "images/burg1.jpg",
  //   },
  //   {
  //     id: "2",
  //     value: "images/burg2.jpg",
  //   },
  //   {
  //     id: "3",
  //     value: "images/burg3.jpg",
  //   },
  //   {
  //     id: "4",
  //     value: "images/burg4.jpg",
  //   },
  // ];
  // function next() {
  //   if (index === imgs.length - 1) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  //   console.log(index);
  // }
  // function prev() {
  //   if (index === 0) {
  //     setIndex(imgs.length - 1);
  //   } else {
  //     setIndex(index - 1);
  //   }
  //   console.log(index);
  // }

  return (
    <>
      <Carousel autoPlay>
        <div>
          <img className="carousel-img" src="images/burg1.jpg" />
        </div>
        <div>
          <img className="carousel-img" src="images/burg2.jpg" />
        </div>
        <div>
          <img className="carousel-img" src="images/burg3.jpg" />
        </div>
        <div>
          <img className="carousel-img" src="images/burg4.jpg" />
        </div>
      </Carousel>
    </>
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
