import React from "react";
import faqdata from "../../data/appdata";
import { ExpandLess } from "@mui/icons-material";
import "./faqlist.scss";

let data = faqdata;

function FaqList() {
  return (
    <div className="faqlist">
      <ul>
        <li>
          <div style={{ display: "flex", padding: 20 }}>
            <div className="listtitle">How far my guy</div>
            <div className="listicon">
              <ExpandLess />
            </div>
          </div>
          <div
            style={{
              height: 0.5,
              width: "100%",
              backgroundColor: "grey",
            }}
          />
        </li>
        <li>
          <div style={{ display: "flex", padding: 20 }}>
            <div className="listtitle">How far my guy</div>
            <div className="listicon">
              <ExpandLess />
            </div>
          </div>
          <div
            style={{
              height: 0.5,
              width: "100%",
              backgroundColor: "grey",
            }}
          />
        </li>
        <li>
          <div style={{ display: "flex", padding: 20 }}>
            <div className="listtitle">How far my guy</div>
            <div className="listicon">
              <ExpandLess />
            </div>
          </div>
          <div
            style={{
              height: 0.5,
              width: "100%",
              backgroundColor: "grey",
            }}
          />
        </li>
        <li>
          <div style={{ display: "flex", padding: 20 }}>
            <div className="listtitle">How far my guy</div>
            <div className="listicon">
              <ExpandLess />
            </div>
          </div>
          <div
            style={{
              height: 0.5,
              width: "100%",
              backgroundColor: "grey",
            }}
          />
        </li>
        <li>
          <div style={{ display: "flex", padding: 20 }}>
            <div className="listtitle">How far my guy</div>
            <div className="listicon">
              <ExpandLess />
            </div>
          </div>
          <div
            style={{
              height: 0.5,
              width: "100%",
              backgroundColor: "grey",
            }}
          />
        </li>
        <li>
          <div style={{ display: "flex", padding: 20 }}>
            <div className="listtitle">How far my guy</div>
            <div className="listicon">
              <ExpandLess />
            </div>
          </div>
          <div
            style={{
              height: 0.5,
              width: "100%",
              backgroundColor: "grey",
            }}
          />
        </li>
        <li>
          <div style={{ display: "flex", padding: 20 }}>
            <div className="listtitle">How far my guy</div>
            <div className="listicon">
              <ExpandLess />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FaqList;
