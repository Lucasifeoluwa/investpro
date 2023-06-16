import React from "react";
import "./wageadvance.scss";
import { Footer, Header } from "../../components";

function WageAdvance() {
  return (
    <div className="wageadvance">
      <Header
        tag="Wage Advance"
        title="Access your wage early"
        subtitle="Get the money you've earned instantly"
        img={require("../../assets/images/wagehero.png")}
        imgHeigth={500}
        tagwidth={150}
        leftwidth={"50%"}
        rightwidth="50%"
      />
      {/*  <div className="section">
        <div className="sections">
          <div className="section1">
            <img src={require("../../assets/images/wage5.png")} />
          </div>
          <div className="section2">Hi</div>
          <div className="section3">Sup</div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default WageAdvance;
