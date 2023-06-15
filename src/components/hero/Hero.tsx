import React from "react";
import "./_hero.scss";
import { Apple, Google } from "@mui/icons-material";

interface HeroProps {
  title: string;
  subtitle: string;
  tag: string;
  tagwidth?: string | number;
  img?: string;
  optional?: string;
  rightwidth?: string | number;
  leftwidth?: string | number;
  imgHeigth?: string | number;
}

function Hero({
  img,
  title,
  subtitle,
  tag,
  tagwidth,
  optional,
  rightwidth,
  leftwidth,
  imgHeigth,
}: HeroProps) {
  return (
    <div className="hero">
      <div className="left" style={{ width: leftwidth }}>
        <div className="tag" style={{ width: tagwidth }}>
          {tag}
        </div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        {optional && (
          <div>
            <div className="optional">{optional}</div>
            <div>
              <div className="mobile">
                +234 <span>X-XXX-XXX</span>
                <button className="subicon">Send</button>
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
      <div className="right" style={{ width: rightwidth }}>
        <img alt="" src={img} style={{ height: imgHeigth }} />
      </div>
    </div>
  );
}

export default Hero;
