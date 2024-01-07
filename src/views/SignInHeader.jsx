import React from "react";
import styled from "styled-components";
import logo from "../assets/images/hacker.png";

const Navbar = styled.div`
  border-bottom: 1px solid #ccc;
  padding-left: 1%;
  backdrop-filter: blur(50px);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`;

const SignInHeader = () => {
  return (
    <Navbar className="navbar navbar-expand-md sticky-top h-25">
      <div className="container-fluid" style={{ padding: "auto 1% auto" }}>
        <a href="./">
          <img className="navbar-branch pb-1 pt-1 w-14" src={logo} alt="" />
        </a>
        <div className="navbar-option">
          <a
            href="/signin"
            class="header-switch-signin text-lg mx-4 no-underline hover:underline text-white"
          >
            Sign In
          </a>
          <a
            href="/signup"
            class="header-switch-signup text-lg mr-4 no-underline hover:underline text-white"
          >
            Sign Up
          </a>
        </div>
      </div>
    </Navbar>
  );
};

export default SignInHeader;
