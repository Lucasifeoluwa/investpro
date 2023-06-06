import React from "react";
import "./_hero.scss";
import { Apple, ArrowForward, ArrowRight, Google } from "@mui/icons-material";
import { Colors } from "../../utils";

interface HeroProps {
  title: string;
  subtitle: string;
  tag: string;
  optional?: string;
}

function Hero({ title, subtitle, tag, optional }: HeroProps) {
  return (
    <div className="hero">
      <div className="left">
        <div className="tag">{tag}</div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        {optional && (
          <div>
            <div className="optional">{optional}</div>
            <div>
              <div className="mobile">
                +234 <span>X-XXX-XXX</span>
                <div className="icon">
                  <div style={{ color: "black", fontSize: 14 }}>Send</div>
                  <ArrowForward style={{ fontSize: 20, color: "black" }} />
                </div>
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
              <div className="links">
                <div className="link">
                  <div className="linkIcon">
                    <Apple />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="linkTag">Download on the</span>
                    <span className="linkTitle">App store</span>
                  </div>
                </div>
                <div className="link">
                  <div className="linkIcon">
                    <Google />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="linkTag">Get in on</span>
                    <span className="linkTitle">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="right">
        <img alt="" src={require("../../assets/images/phone3.png")} />
      </div>
    </div>
  );
}

export default Hero;
