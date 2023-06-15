import "./about.scss";
import { Footer, Header } from "../../components";
import { CallMade } from "@mui/icons-material";

function About() {
  return (
    <div className="about">
      <Header
        subtitle="As an all Australian company, we want to make it fairer and easier for Australians to access their pay on demand"
        tag="About us"
        title="About us & our mission"
        img={require("../../assets/images/ezgif.com-webp-to-png.png")}
        leftwidth="30%"
        rightwidth="70%"
        tagwidth={100}
      />
      <div className="sections">
        <div className="section1">
          <img
            src={require("../../assets/images/ezgif.com-webp-to-png (2).png")}
            className="phone"
          />
          <div className="sectionsContent">
            <div className="her">OUR MISSION</div>
            <div className="title">Why did we start?</div>
            <div className="subtitle">
              We started Wagetap to help Australians access their pay and wages
              more transparently, at a competitive rate.
              <div style={{ marginTop: 20 }}>
                Our mission is to be the financially responsible partner of
                choice for all Australians.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pay">
        <div className="payhero">PAY ON DEMAND AUSTRALIA</div>
        <div className="paytitle">Granting financial independence</div>
        <div className="paysubtitle">
          Download Wagetap now and join Australians just like you getting their
          wage, pay or bills sorted as fast as possible.
        </div>
        <div className="palm">
          <div className="firstpalm">
            <img src={require("../../assets/images/left.png")} alt="" />
            <div>
              <div className="palmtitle">Join over</div>
              <div className="palmnumber">150,000+</div>
              <div className="palmsubtitle">people</div>
            </div>
            <img src={require("../../assets/images/right.png")} alt="" />
          </div>
          <div className="firstpalm">
            <img src={require("../../assets/images/left.png")} alt="" />
            <div>
              <div className="palmtitle">Lent over</div>
              <div className="palmnumber">$100+M</div>
              <div className="palmtitle">in advances</div>
            </div>
            <img src={require("../../assets/images/right.png")} alt="" />
          </div>
          <div className="firstpalm">
            <img src={require("../../assets/images/left.png")} alt="" />
            <div>
              <div className="palmtitle">Rated 4.8</div>
              <img src={require("../../assets/images/stars.png")} alt="" />
            </div>
            <img src={require("../../assets/images/right.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="section1">
          <div className="sectionsContent">
            <div className="her">OUR APPROACH</div>
            <div className="title">How we do it?</div>
            <div className="subtitle">
              Unlike the big banks or pay-day lenders, we assess each
              application on a different set of criteria that gives you access
              to finance in a responsible and fair way.
              <div style={{ marginTop: 20 }}>
                By using Wagetap tech, we can help with your unexpected expenses
                when others can't. We wanted to make a better way to advance
                your wage, without the crazy fees.
              </div>
              <div style={{ marginTop: 20 }}>
                We can help access pay early, up to $300. We can split your
                bills, up to $600.
              </div>
            </div>
          </div>
          <img
            src={require("../../assets/images/ezgif.com-webp-to-png (1).png")}
            className="phone"
          />
        </div>
        <div className="section1">
          <img
            src={require("../../assets/images/ezgif.com-webp-to-png (3).png")}
            className="phone"
          />
          <div className="sectionsContent">
            <div className="her">OUR DESTINATION</div>
            <div className="title">Where are we going?</div>
            <div className="subtitle">
              Pay on demand should be a reality in Australia and we want to help
              make this happen. We want to change the way Australians get paid.
              <div style={{ marginTop: 20 }}>
                We release new features to help you with your finance are
                released often.
              </div>
            </div>
            <div className="icon">
              Get started with investorPro{" "}
              <CallMade style={{ marginLeft: 5 }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
