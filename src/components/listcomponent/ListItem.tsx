import React, { useState } from "react";
import { ExpandLess } from "@mui/icons-material";

function ListItem() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="list-item">
      <div className="list-item__preview">
        <p className="list-item__preview-text">Lorem ipsum dolor sit ame.</p>

        <button
          onClick={(e) => setShowText((p) => !p)}
          className={`list-item__preview-button ${showText ? "active" : ""}`}
        >
          <ExpandLess style={{ color: "black" }} />
        </button>
      </div>

      {showText && (
        <div className="list-item__details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
          laudantium esse sit aspernatur mollitia, voluptas dolorem fugiat
          ipsam! Eaque deserunt sint eos earum illum!
        </div>
      )}
    </div>
  );
}

export default ListItem;
