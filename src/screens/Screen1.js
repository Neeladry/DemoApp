import React from "react";
import "./Screen.css";
import menuBar from "../assets/menuBar.png";
import bg1 from "../assets/bg1.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import arrow from "../assets/arrow.png";

const Screen1 = () => {
  return (
    <div className="screen1">
      <nav className="navbar">
        <ul className="nav-options">
          <li>Home</li>
          <li>Order</li>
          <li>Food</li>
          <li>Restaurant</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>

        <img className="hamburger-img" src={menuBar} alt="Description" />
      </nav>
      <div className="home-component">
        <div className="left-div">
          <h1>LOREM IPSUM</h1>
          <p>
            Non anim reprehenderit fugiataboris eiusmod. Nostrud occaecat elit
            eu exercitation tempor Lorem sit qui velit. Aliquip officia qui in
            enim veniam amet adipisicing ad excepteur tempor irure officia.
            Mollit pariatur incididunt consectetur xcepteur sint eiusmod
          </p>

          <button className="custom-button">Click Me</button>
        </div>
        <div className="right-div">
          <img className="bgImg" src={bg1} alt="Description" />
        </div>
      </div>

      <div className="home-component" style={{ marginTop: "20px" }}>
        <div style={{ width: "50vw", display: "flex" }} className="left-div1">
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <img
              style={{ width: "90%", height: "calc(34.5vh - 1px)" }}
              src={img1}
              alt="Description"
            />
            <img
              style={{ width: "90%", height: "calc(34.5vh - 1px)" }}
              src={img2}
              alt="Description"
            />
          </div>
          <img
            style={{ width: "50%", height: "70vh", marginLeft: "0px" }}
            src={img3}
            alt="Description"
          />
        </div>
        <div className="right-div1">
          <div className="inner-box">
            <h6>LOREM IPSUM</h6>
            <h1 style={{ fontSize: "50px" }}>LOREM IPSUM SET ADIMIR</h1>
            <div className="btn-box">
              <h6>Click</h6>
              <img className="arrow-img" src={arrow} alt="Description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1;
