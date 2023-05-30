import React from "react";
import "./home.scss";
import { Header } from "../../components";
import { CloudDownload, FileCopy, FileOpen } from "@mui/icons-material";

function Home() {
  return (
    <div className="home">
      <Header
        title="It's time to access your pay early."
        subtitle="Access up to $300 of your wage instantly"
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
        <div className="sections"></div>
      </div>
    </div>
  );
}

export default Home;
