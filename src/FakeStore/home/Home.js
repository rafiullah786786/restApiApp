import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="homeBody">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Welcome to Fake Store</h1>
              <p className="hp">
                Fake store rest API for your e-commerce or shopping website
                prototype
              </p>
              <img
                src="https://img.freepik.com/free-vector/e-commerce-icon-robotic-hand-internet-shopping-online-purchase-add-cart_127544-586.jpg?w=2000"
                alt="home image"
                className="homeImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
