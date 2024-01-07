// Container.jsx
import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  border: 0.1rem solid white;
  width: 90rem;
  height: auto;
  margin: 0 auto;
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  font-size: 1rem;
  overflow-x: auto;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 768px) {
    width: 30rem;
  }

  @media screen and (max-width: 991px) {
    width: 40rem;
  }

  @media screen and (max-width: 576px) {
    width: 25rem;
  }
`;

const MainContainer = ({ children }) => {
  return <ContainerStyled className="mt-4">{children}</ContainerStyled>;
};

export default MainContainer;
