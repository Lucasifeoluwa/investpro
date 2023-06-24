import React from "react";
import "./wageadvance.scss";
import { Divisor, Footer, Header } from "../../components";

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
      <div className="section">
        <div className="sectionhead">
          <div className="title">How it works</div>
          <div className="subtitle">
            Once approved, it takes less than a minute for your money to get
            into your account.
          </div>
        </div>
        <div className="sectioncontent">
          <div className="sections">
            <div className="section1">
              <img
                alt=""
                src={require("../../assets/images/wage5.png")}
                className="image"
              />
            </div>
            <div className="section2">
              <Divisor
                lineColor="#bec4d1"
                lineCount={15}
                lineSpacing={40}
                strokeLength={15}
                value={"01"}
              />
            </div>
            <div className="section3">
              <div className="sectiontitle">Choose your amount</div>
              <div className="sectionsubtitle">
                The easiest way to get the money you've earned ahead of payday.
                Get up to $500 of your pay as soon as you're approved with us.
                Once your actual payday arrives, you’ll get the rest of your
                paycheck without any fees to worry about! Also, if you don’t
                need the full $500, you can always choose the amount you’d like
                to get advanced to your account.
              </div>
            </div>
          </div>
          <div className="sections">
            <div className="section3">
              <div style={{ paddingLeft: 30 }}>
                <div className="sectiontitle">Get paid instantly</div>
                <div className="sectionsubtitle">
                  No long wait times; we know you need your cash pronto. As soon
                  as you've hit withdraw, we send you the cash direct to your
                  bank account. There isn't a faster way to get your pay now.
                  While there are other fast cash options out there, like payday
                  loans, they don’t get approved as quickly. Also, these loans
                  often come with high fees, and Wagetap simply provides you
                  with the money you’ve already earned.
                </div>
              </div>
            </div>

            <div className="section2">
              <Divisor
                lineColor="#bec4d1"
                lineCount={15}
                lineSpacing={40}
                strokeLength={15}
                value={"02"}
              />
            </div>
            <div className="section1">
              <img
                alt=""
                src={require("../../assets/images/wage4.png")}
                className="image"
              />
            </div>
          </div>
          <div className="sections">
            <div className="section1">
              <img
                alt=""
                src={require("../../assets/images/wage3.png")}
                className="image"
              />
            </div>
            <div className="section2">
              <Divisor
                lineColor="#bec4d1"
                lineCount={15}
                lineSpacing={40}
                strokeLength={15}
                value={"03"}
              />
            </div>
            <div className="section3">
              <div className="sectiontitle">Repay on your next pay day</div>
              <div className="sectionsubtitle">
                We pride ourselves on being transparent and fair with our
                repayments. No late or hidden fees. Cash out today, and repay on
                your next pay day! Repayment doesn’t have to be a stressful
                situation with Wagetap. Get the money you need, pay your
                expenses, and pay us back with no worries.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WageAdvance;
