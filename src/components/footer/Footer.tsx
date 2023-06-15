import React from "react";
import { Facebook, LinkedIn } from "@mui/icons-material";
import "./footer.scss";

function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(`The Email you entered was: ${email}`);
    setEmail("");
  };

  return (
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
  );
}

export default Footer;
