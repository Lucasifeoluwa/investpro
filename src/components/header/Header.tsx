import React from "react";
import "./_header.scss";
import NavBar from "../navbar/NavBar";
import Hero from "../hero/Hero";

interface HomeProps {
  img: string;
  title: string;
  subtitle: string;
  tag: string;
  optional?: string;
  rightwidth?: string;
  leftwidth?: string;
  tagwidth?: string | number;
  imgHeigth?: string | number;
}

function Header({
  title,
  subtitle,
  tag,
  optional,
  img,
  rightwidth,
  leftwidth,
  tagwidth,
  imgHeigth,
}: HomeProps) {
  return (
    <div className="header">
      <NavBar />
      <Hero
        subtitle={subtitle}
        title={title}
        tag={tag}
        optional={optional}
        img={img}
        rightwidth={rightwidth}
        leftwidth={leftwidth}
        tagwidth={tagwidth}
        imgHeigth={imgHeigth}
      />
    </div>
  );
}

export default Header;
