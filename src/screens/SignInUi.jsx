import React, { lazy, Suspense } from "react";
import { Spin } from "antd";
import styled from "styled-components";
import leftImage from "../assets/images/leftImage.png";
import rightImage from "../assets/images/rightImage.png";
import backgroundImg from "../assets/images/background.jpg";

const SignInHeader = lazy(() => import("../views/SignInHeader"));
const SignInForm = lazy(() => import("../views/SignInForm"));

const HTMLBODY = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  font-family: "Roboto", sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  height: 100vh; /* Set a fixed height for the container */
  overflow-y: auto;
`;

const SignInUi = () => {
  return (
    <HTMLBODY
      className="container-fluid overflow-hidden text-xl p-0 items-center"
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
      <div className="row" style={{ position: "relative", zIndex: "3" }}>
        <div className="">
          <Suspense
            fallback={
              <div className="text-black text-center text-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
                <Spin className="pr-2" />
                Loading...
              </div>
            }
          >
            <SignInForm />
          </Suspense>
        </div>
      </div>
      <div className="row" style={{ zIndex: "3" }}>
        <div className="col-lg-3 col-md-2 col-sm-1">
          <img
            className="position-absolute bottom-0 start-0 rounded d-block w-25 animate-bounce"
            src={leftImage}
            alt="left_image"
          />
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 d-flex flex-column justify-content-center align-items-center"></div>
        <div className="col-lg-3 col-md-2 col-sm-1">
          <img
            className="position-absolute bottom-0 end-0 rounded d-block w-25 animate-bounce"
            src={rightImage}
            alt="right_image"
          />
        </div>
      </div>
    </HTMLBODY>
  );
};

export default SignInUi;
