import React from "react";

function About() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 mt-5">
            <h1 className="mt-5">About Us</h1>
            <p className="hp">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corrupti, dicta? Dolores suscipit id nam quae quia. Pariatur
              veniam fugit aliquid.
            </p>
            <img
              src="https://i2.wp.com/viralhare.com/wp-content/uploads/2019/01/converting-about-us-page.jpg"
              alt="home image"
              className="homeImage"
              style={{ boxShadow: "0px 0px 10px #000" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
