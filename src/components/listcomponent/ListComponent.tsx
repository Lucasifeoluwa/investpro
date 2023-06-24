import React from "react";
import "./listcomponent.scss";
import { ExpandLess } from "@mui/icons-material";
import ListItem from "./ListItem";
import faqData from "../../data/appdata";

function ListComponent() {
  return (
    <>
      {[...faqData, ...faqData]?.map((i, index) => {
        return <ListItem key={index} />;
      })}
    </>
  );
}

export default ListComponent;
