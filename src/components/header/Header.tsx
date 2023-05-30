import React from "react";
import "./_header.scss";
import NavBar from "../navbar/NavBar";
import Hero from "../hero/Hero";

interface HomeProps {
  title: string;
  subtitle: string;
  tag: string;
  optional?: string;
}

function Header({ title, subtitle, tag, optional }: HomeProps) {
  return (
    <div className="header">
      <NavBar />
      <Hero subtitle={subtitle} title={title} tag={tag} optional={optional} />
    </div>
  );
}

export default Header;
