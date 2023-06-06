import React from "react";
import "./home.scss";
import { Header } from "../../components";
import {
  CallMade,
  CloudDownload,
  FileCopy,
  FileOpen,
} from "@mui/icons-material";
import ImgCard from "../../components/imgCard/ImgCard";

function Home() {
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
    </div>
  );
}

export default Home;
