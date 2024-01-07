import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import leftImage from "../assets/images/leftImage.png";
import rightImage from "../assets/images/rightImage.png";
import backgroundImg from "../assets/images/background.jpg";
import { Spin } from "antd";

const SignInHeader = lazy(() => import("../views/SignInHeader"));
const SignUpForm = lazy(() => import("../views/SignUpForm"));

const HTMLBODY = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  font-family: "Roboto", sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  overflow-y: auto;
`;

const SignUpUi = () => {
  return (
    <HTMLBODY
      className="container-fluid overflow-hidden h-screen text-xl p-0 items-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="row">
        <Suspense
          fallback={
            <div className="text-black text-center text-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
              <Spin className="pr-2" />
              Loading...
            </div>
          }
        >
          <SignInHeader />
        </Suspense>
      </div>
      <div
        className="row align-items-center justify-content-end"
        style={{ position: "relative", zIndex: "1" }}
      >
        <div className="col-lg-6 col-md-2 col-sm-0"></div>

        <div className="col-lg-6 col-md-10 col-sm-12 text-center">
          <Suspense
            fallback={
              <div className="text-black text-center text-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
                <Spin className="pr-2" />
                Loading...
              </div>
            }
          >
            <SignUpForm className="ml-12" />
          </Suspense>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-4 col-sm-2">
          <img
            className="position-absolute bottom-0 start-0 rounded d-block w-25 d-none d-lg-block animate-pulse"
            src={leftImage}
            alt="left_image"
          />
          <img
            className="position-absolute bottom-0 end-50 rounded d-block w-25 d-none d-lg-block animate-pulse "
            src={rightImage}
            alt="right_image"
          />
        </div>
      </div>
    </HTMLBODY>
  );
};

export default SignUpUi;
