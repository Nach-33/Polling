import React, { useState } from "react";
import { light, dark } from "../styling/pallete";
import searchIcon from "../resources/icons/sIcon.png"
import searchIconGif from "../resources/icons/sIconGif.gif"

function Homepage() {
  const [scheme, setScheme] = useState(light);
  const mainSectionStyle = {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: `${scheme.primary}`,
  };
  const navStyle = {
    height: "8%",
  };
  return (
    <>
      <section style={mainSectionStyle} className="d-flex flex-column">
        <div
          className="d-flex justify-content-between px-4 py-2 my-3 align-items-center shadow mt-0"
          style={navStyle}
        >
          <div className="col-4 d-flex fw-bold h2">LOGO</div>
          <div className="col-4 d-flex justify-content-end h4">Dashboard</div>
        </div>
        <div className="row justify-content-center my-5">
          <div className="card col-md-5 col-10 d-flex flex-column align-items-center py-3 m-2 shadow-lg">
            <h2 className="mb-md-4 mb-1">Search Any Poll</h2>
            <div className="row col-6 justify-content-between mt-3">
              <input type="text" placeholder="Poll Code" className="col-md-10 col-12 p-2 mb-3"/>
              <div className="col-12 col-md-1 d-flex justify-content-center mb-3">
                <img src={searchIconGif} alt={searchIcon} />
                </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-around p-2" style={{height:"50vh"}}>
          <div className="card d-flex d-md-none col-md-3 my-3 p-2 shadow" style={{borderRadius:"5px"}}>check</div>
          <div className="card col-md-7 p-2 shadow" style={{borderRadius:"5px"}}>check</div>
          <div className="card d-none d-md-flex col-md-3 p-2 shadow" style={{borderRadius:"5px"}}>check</div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
