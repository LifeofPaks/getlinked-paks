import React from "react";
import "./Prizes.scss";
import Trophy from "../../images/gold-trophy.png";
import Silver from "../../images/silver_medal 1.png";
import Gold from "../../images/gold_medal 1.png";
import Bronze from "../../images/bronze_medal 1.png";
import Liberty from "../../images/Liberty company logo white colour.png";
import Liberty2 from "../../images/liberty2.png";
import Winwise from "../../images/Winwise logo White colour 1.png";
import Whisper from "../../images/wisper logo white.png";
import Padlock from "../../images/padlock.png";
import Checked from "../../images/list terms.png";
import Instagram from "../../images/mdi_instagram.png";
import Vector from "../../images/Vector.png";
import Facebook from "../../images/Vector (1).png";
import LinkedIn from "../../images/ri_linkedin-fill.png";
import Phone from "../../images/phone.png";
import Location from "../../images/location.png";

const Prizes = () => {
  return (
    <article className="prizes">
      <section className="section prizesSection">
        <img src={Trophy} alt="trophy" />
        <div className="prizesContent">
          <div className="pTitle">
            <h1>
              Prizes and <span>Rewards</span>
            </h1>
            <p>
              Highlight of the prizes or rewards for winners and particpants.
            </p>
          </div>

          <div className="medals">
            <div className="medalWapper">
              <img src={Silver} alt="medal" className="silver" />
              <div className="medalContent silverContent">
                <h3>2nd</h3>
                <h4>Runner</h4>
                <h5>N300,000</h5>
              </div>
            </div>

            <div className="medalWapper">
              <img src={Gold} alt="medal" className="gold" />
              <div className="medalContent goldContent">
                <h3>1st</h3>
                <h4>Runner</h4>
                <h5>400,000</h5>
              </div>
            </div>

            <div className="medalWapper">
              <img src={Bronze} alt="medal" className="bronze" />
              <div className="medalContent bronzeContent">
                <h3>3rd</h3>
                <h4>Runner</h4>
                <h5>N150,000</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section partnersSection">
        <div className="title">
          <h2>Partners and Sponsors</h2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="partnersContent">
          <div className="container">
            <div className="top">
              <div className="item">
                <img src={Liberty} alt="image" />
                <div className="vr"></div>
              </div>
              <div className="item">
                <img src={Liberty2} alt="image" />
                <div className="vr"></div>
              </div>

              <div className="item">
                <img src={Winwise} alt="image" />
              </div>
            </div>

            <div className="bottom">
              <div className="item">
                <img src={Whisper} alt="image" />
                <div className="vr"></div>
              </div>
              <div className="item">
                <h4>
                  pay<span>box</span>
                </h4>
                <div className="vr"></div>
              </div>

              <div className="item">
                <div className="vplus">
                  <h5>
                    Vuzual<span>Plus</span>
                  </h5>
                  <p>Design Studios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section privacySection">
        <div className="left">
          <div className="top">
            <h2>
              Privacy Policy and <span>Terms</span>
            </h2>
            <p className="gray">Last updated on September 12, 2023</p>
            <p>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>

          <div className="privacyContent">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h4>Licensing Policy</h4>
            <h5>Here are terms of our Standard License:</h5>

            <div className="box">
              <div className="item">
                <img src={Checked} alt="checked" />
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="item">
                <img src={Checked} alt="checked" />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <div className="btnWrap">
                <button className="primaryBtn">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Padlock} alt="padlock" />
        </div>
      </section>

      <footer>
        <div className="footerContainer">
          <section className="left">
            <div className="title">
            <h2>
              get<span>linked</span>
            </h2>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            </div>
          

            <div className="terms">
              <p>Terms of Use</p> <span className="line"></span>
              <p>Pivacy Policy</p>
            </div>
          </section>

          <div className="side">
          <section className="center">
            <h4>Useful Links</h4>
            <ul>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
              <div className="socials">
                <h5>Follow Us</h5>
                <img src={Instagram} alt="icon" />
                <img src={Facebook} alt="icon" />
                <img src={Vector} alt="icon" />
                <img src={LinkedIn} alt="icon" />
              </div>
            </ul>
          </section>

          <section className="right">
            <h4>Contact Us</h4>
            <div className="contactWrapper">
              <div className="item">
                <img src={Phone} alt="phone" />
                <p>+234 6707653444</p>
              </div>
              <div className="item">
                <img src={Location} alt="phone" />
                <p>27,Alara Street Yaba 100012 Lagos State</p>
              </div>
            </div>
          </section>
          </div>

       
        </div>
        <p className="cr">All rights reserved. © getlinked Ltd.</p>
      </footer>
    </article>
  );
};

export default Prizes;
