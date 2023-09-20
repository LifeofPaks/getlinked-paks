import React from "react";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <article className="timeLine">
      <section className="section timelineSection">
        <div className="title">
          <h1>Timeline</h1>
          <p className="tdetails">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="timelineContainer">
          <div className="left">
            <div className="item t1">
              <h2>Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>

            <div className="item t2">
              <h2>November 18, 2023</h2>
            </div>

            <div className="item t3">
              <h2>Teams Registration ends</h2>
              <p>
                Interested Participants are no longer Allowed to register
              </p>
            </div>

            <div className="item t4">
              <h2>November 18, 2023</h2>
            </div>

            <div className="item t5">
              <h2>Getlinked Hackathon 1.0 Offically Begins</h2>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>

            <div className="item t6">
              <h2>November 18, 2023</h2>
            </div>
          </div>

          <div className="center">
            <div className="line l1"></div>
            <div className="num">1</div>

            <div className="line"></div>
            <div className="num">2</div>

            <div className="line"></div>
            <div className="num">3</div>

            <div className="line"></div>
            <div className="num">4</div>

            <div className="line"></div>
            <div className="num">5</div>

            <div className="line"></div>
            <div className="num">6</div>
            
          </div>

          <div className="right">
            <div className="item t1">
              <h2>November 18, 2023</h2>
            </div>

            <div className="item t2">
              <h2>Teams Registration begins</h2>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>

            <div className="item t3">
              <h2>November 18, 2023</h2>
            </div>

            <div className="item t4">
              <h2>Announcement of the accepted teams and ideas</h2>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>

            <div className="item t5">
              <h2>November 18, 2023</h2>
            </div>

            <div className="item t6">
              <h2>Demo Day</h2>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Timeline;
