// TopButton.jsx
import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  border: 0.1rem solid white;
  width: 50rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  font-size: 1rem;

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

const TopButtonContainer = styled.div`
  display: flex;

  button {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: font-weight 0.3s ease;
    flex-wrap: wrap;

    &:hover {
      border-radius: 0.5rem;
      background-color: rgba(224, 224, 224, 0.5);
    }
  }
`;

const MainTopButton = ({ buttons, openLinkInNewTab }) => {
  return (
    <ContainerStyled>
      <TopButtonContainer
        style={{ flexWrap: "wrap", textShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
      >
        {buttons.map((button, index) => (
          <button key={index} onClick={() => openLinkInNewTab(button.href)}>
            {button.label}
          </button>
        ))}
      </TopButtonContainer>
    </ContainerStyled>
  );
};

export default MainTopButton;
