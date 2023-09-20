import React from "react";
import "./Hero.scss";
import Vector from "../../images/Vector 4.png";
import Globe from '../../images/globel.png'
import ManVar from '../../images/man-wearing-smart-glasses-touching-virtual-screen 1.png'

const Hero = () => {
  return (
    <section className="hero">
      <nav>
        <div className="navContainer">
          <div className="logo">
            <h1>
              {" "}
              get<span>linked</span>
            </h1>
          </div>

          <div className="navLinks">
            <ul>
              <li>Timeline</li>
              <li>Overview</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
            <button className="primaryBtn"> Register</button>
          </div>
        </div>
      </nav>

      <div className="heroSpecial">
        <div className="left">
          <h2>getlinked Tech</h2>
          <h2>
            Hackathon <span>1.0</span>
          </h2>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button className="primaryBtn"> Register</button>
          <div className="countdown">
            <h3>
              00<span>H</span>
            </h3>
            <h3>
              00<span>M</span>
            </h3>
            <h3>
              00<span>S</span>
            </h3>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <h4>
              Igniting a Revolution in HR <span>Innovation</span>
            </h4>
            <img src={Vector} alt="vector" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
