import React, { useState } from "react";
import "./home.scss";
import { Header, Swiper } from "../../components";
import {
  CallMade,
  CloudDownload,
  Facebook,
  FileCopy,
  FileOpen,
  LinkedIn,
} from "@mui/icons-material";

function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(`The Email you entered was: ${email}`);
    setEmail("");
  };

  return (
    <div className="home">
      <Header
        title="It's time to access your pay early."
        subtitle="Tired of waiting until payday to get your wages? Get your money when you need it most. Use our instant pay advance to get up to $500 of your wage early"
        tag="Your wage, on demand"
        optional="Enter your mobile number"
      />
      <div className="desc">
        <div className="pay">Pay on demand Austraila</div>
        <div className="access">
          Access your pay early in <br /> under 3 minutes
        </div>
        <div className="process">
          <div className="process1">
            <div className="icon">
              <CloudDownload />
            </div>
            <div>
              <div className="info">Download InvestorPro</div>
              <div className="subInfo">
                Consequat sit tellus tortor mauris
                <br />
                porta risque sed ornare
              </div>
              <div className="num">01</div>
            </div>
          </div>
          <div className="process1">
            <div className="icon">
              <FileOpen />
            </div>
            <div>
              <div className="info">Create your own account</div>
              <div className="subInfo">
                Consequat sit tellus tortor mauris
                <br />
                porta risque sed ornare
              </div>
              <div className="num">02</div>
            </div>
          </div>
          <div className="process1">
            <div className="icon">
              <FileCopy />
            </div>
            <div>
              <div className="info">Withdraw up to $3000</div>
              <div className="subInfo">
                Consequat sit tellus tortor mauris
                <br />
                porta risque sed ornare
              </div>
              <div className="num">03</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="section1">
          <img
            src={require("../../assets/images/phone1.png")}
            className="phone"
          />
          <div className="sectionsContent">
            <div className="her">ACCESS PAY EARLY</div>
            <div className="title">Get Fast Access to Your Wage</div>
            <div className="subtitle">
              My pay now? You betcha. Access your pay whenever you need it, for{" "}
              <br />
              just a small fee when you pay us back. No hidden or late fees, we
              just want to make it easier for you to access your pay now. With
              your wages,
              <br /> you can pay for the things you need. Easily cover mid-month
              bills, get <br /> your groceries or use it toward anything else
              you might need.
              <div style={{ marginTop: 20 }}>
                It's your money! Use it how you'd like. All you need to do is
                pay us back on your next payday to get access to early wage
                advances in the future. Waiting for your wage can be frustrating
                when you need money. With Wagetap, you can leave waiting behind!
              </div>
            </div>
          </div>
        </div>
        <div className="section1">
          <div className="sectionsContent">
            <div className="her">BILLS PAID ON DEMAND</div>
            <div className="title">Bill Split, pay your bills today</div>
            <div className="subtitle">
              Wagetap also provides Bill Split features to make paying bills
              easier. If you need a bit of help with an unexpected bill, our
              Bill Split feature has you covered. No hidden or late fees, we pay
              your bill and you repay us on your next payday.
              <div style={{ marginTop: 20 }}>
                Bill Split can cover up to $600 of your bill, so you don’t have
                to stress about missing a payment or paying late fees. We’ll
                cover your bill instantly and you can pay us back in three
                instalments if the payment is below $300 or four instalments if
                the payment is above $300. Bill repayment is always aligned with
                your payday, so you have money coming in to cover your
                repayments. You can combine our Bill Split with Wage Advance to
                give you even more breathing room!
              </div>
            </div>
            <div className="icon">
              Get started with investorPro{" "}
              <CallMade style={{ marginLeft: 5 }} />
            </div>
          </div>
          <img
            src={require("../../assets/images/phone2.png")}
            className="phone"
          />
        </div>
      </div>
      <div className="payNow">
        <div className="payhero">My pay now</div>
        <div className="paytitle">Why you'll love our Salary Advance App</div>
        <div className="paysubtitle">
          Wagetap helps make money less stressful. When you’re short on money
          for bills or waiting for your wage to pay for groceries, it can be the
          worst feeling in the world. We want to help people take control of
          their finances once and for all.
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
      <div className="swiper">
        <div className="swipeqoute">
          <img src={require("../../assets/images/qoute.png")} alt="" />
        </div>
        <div className="swipetag">See why over 100k people love us</div>
        <Swiper />
      </div>
      <div className="footer">
        <div className="footerFirst">
          <div className="subscribe">
            <div className="subdesc">Download Wage Tap today</div>
            <div className="subTitle">
              Get your pay on demand <br /> with Investpro
            </div>
            <div className="subsSubtitle">Subscribe to our newsletter</div>
            <div className="subLink">
              <div className="textInput">
                <div className="inputfield">
                  <input
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="subicon" onClick={handleSubmit}>
                    Subscribe
                  </button>
                </div>
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#2d486c",
                    height: 3,
                    marginTop: 5,
                    marginBottom: 50,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="footerimg">
            <img src={require("../../assets/images/FooterImg.png")} alt="" />
          </div>
        </div>
        <div className="footerSecond">
          <div className="first">
            <div className="firsttitle">InvestorPro</div>
            <div className="firstsubtitle">
              It's time to get your wage, on demand
            </div>
            <div className="links">
              <img
                src={require("../../assets/images/appstore.png")}
                alt=""
                style={{ marginRight: 20 }}
              />
              <img src={require("../../assets/images/googleplay.png")} alt="" />
            </div>
          </div>
          <div className="second">
            <div className="contact">
              <div className="contacthead">Contact</div>
              <div className="contactbody">hello@investorPro.com</div>
              <div className="contactbody contactIcon">
                <Facebook style={{ fontSize: 14 }} /> Facebook
              </div>
              <div className="contactbody contactIcon">
                <LinkedIn style={{ fontSize: 14 }} /> Facebook
              </div>
            </div>
            <div className="contact">
              <div className="contacthead">Navigation</div>
              <div className="contactbody">About Us</div>
              <div className="contactbody">Wage Advance</div>
              <div className="contactbody">Bill Split</div>
              <div className="contactbody">FAQ</div>
              <div className="contactbody">Blog</div>
            </div>
            <div className="contact">
              <div className="contacthead">Company</div>
              <div className="contactbody">Career</div>
              <div className="contactbody">Privacy</div>
              <div className="contactbody">Target Market Distribution</div>
            </div>
          </div>
        </div>
        <div className="footerThird">
          <div
            style={{
              width: "100%",
              backgroundColor: "#6d717b",
              height: 0.5,
            }}
          />
          <div className="thirdfooter">© 2023 Wagetap All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
