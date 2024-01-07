import React, { lazy, Suspense } from "react";
import styled from "styled-components";

import leftImage from "../assets/images/leftImage.png";
import rightImage from "../assets/images/rightImage.png";
import backgroundImg from "../assets/images/background.jpg";
import { Spin } from "antd";

const SignInHeader = lazy(() => import("../views/SignInHeader"));
const ForgotForm = lazy(() => import("../views/ForgotForm"));

const HTMLBODY = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  font-family: "Roboto", sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow-y: auto;
`;

const ForgotPassword = () => {
  return (
    <HTMLBODY
      className="container-fluid overflow-hidden h-screen text-xl p-0 items-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="row">
        <Suspense
          fallback={
            <div className="text-black text-center text-lg fixed">
              <Spin className="pr-2" />
              Loading...
            </div>
          }
        >
          <SignInHeader />
        </Suspense>
      </div>
      <div className="row" style={{ position: "relative", zIndex: "1" }}>
        <div className="col-lg-6 col-md-10 col-sm-12">
          <Suspense
            fallback={
              <div className="text-black text-center text-lg fixed">
                <Spin className="pr-2" />
                Loading...
              </div>
            }
          >
            <ForgotForm className="position-absolute bottom-0 start-0" />
          </Suspense>
        </div>

        <div className="col-lg-6 col-md-2 col-sm-0"></div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <img
            className="position-absolute bottom-0 start-50 rounded d-block w-25 d-none d-lg-block animate-pulse"
            src={leftImage}
            alt="left_image"
          />
          <img
            className="position-absolute bottom-0 end-0 rounded d-block w-25 d-none d-lg-block animate-pulse "
            src={rightImage}
            alt="right_image"
          />
        </div>
      </div>
    </HTMLBODY>
  );
};

export default ForgotPassword;
