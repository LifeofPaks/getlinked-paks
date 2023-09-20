import React from "react";
import "./Prizes.scss";
import Trophy from "../../images/gold-trophy.png";
import Silver from "../../images/silver_medal 1.png";
import Gold from "../../images/gold_medal 1.png";
import Bronze from "../../images/bronze_medal 1.png";

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
                <img src="" alt="" />
                <div className="vr"></div>
              </div>
              <div className="item">
                <img src="" alt="" />
                <div className="vr"></div>
              </div>

              <div className="item">
                <img src="" alt="" />
              </div>
            </div>
            <div className="middle">
              <div className="hr"></div>
              <div className="hr"></div>
              <div className="hr"></div>
            </div>
            <div className="bottom">
              <div className="item">
                <img src="" alt="" />
                <div className="vr"></div>
              </div>
              <div className="item">
                <img src="" alt="" />
                <div className="vr"></div>
              </div>

              <div className="item">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Prizes;
