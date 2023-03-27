import React from "react";

function Card(props) {
  let options=props.options;
  let priceOptions=Object.keys(options)
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={props.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{color:'red'}}>{props.foodName}</h5>
          
          <div className="container w-100">
            <select className="m-2 h-100  bg-danger rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-danger rounded">
              {priceOptions.map((data)=>{
                return(
                  <option key={data} value={data}>{data}</option>
                )
              })}
            </select>
            <div className="d-in h-100 fs-6 bg-success">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
