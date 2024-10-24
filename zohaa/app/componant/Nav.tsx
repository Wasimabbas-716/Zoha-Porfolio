import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <>
      <Link href="/">
        <span className="nav-btn">Home </span>
      </Link>
      <Link href="./about">
        <span className="nav-btn">About </span>
      </Link>
      <Link href="./skills">
        <span className="nav-btn">Skills </span>
      </Link>
      <Link href="./Portfolio">
        <span className="nav-btn">Portfolio </span>
      </Link>
      <Link href="./contact">
        <span className="nav-btn">Contact </span>
      </Link>
    </>
  );
};

export default Nav;
