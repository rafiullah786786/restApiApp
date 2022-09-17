import React from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row mt-5">
          <div className="col-md-12 mt-5">
            <h1 className="mt-5">Contact Us</h1>
            <p className="hp">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corrupti, dicta? Dolores suscipit id nam quae quia. Pariatur
              veniam fugit aliquid.
            </p>
            <p className="hp">Phone Number: +1 (123) 456-7890</p>
            <p className="hp">
              Email:
              <NavLink to="mailto:ullahisjsk@gmail.com"></NavLink>
            </p>
            <p className="hp"> Address: 123 Main St, New York, NY 10001</p>
            <img
              className="homeImage"
              src="https://media.istockphoto.com/photos/closeup-image-of-male-hands-using-smartphone-with-icon-telephone-picture-id1168945108?k=20&m=1168945108&s=612x612&w=0&h=MqKJyjMB1NJ33aRB9kjhxqP_GbPmEVB11saJi9sCuwM="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
