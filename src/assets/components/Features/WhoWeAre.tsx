import React from "react";
import styled from "styled-components";

import ExampleVideo from "../../images/icons/exampleVideo.jpg";
import iconPlay from "../../images/icons/iconPlay.svg";

const BgGradient = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #fff 65%, rgba(23, 33, 60, 1) 65%);
`;
const ContainerWhoWeAre = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 80px 10px;
  gap: 80px;
  width: 90%;
  min-width: 328px;
`;
const MainContent = styled.div`
  text-align: center;
`;
const CustomP = styled.p`
  margin: 20px auto;
  max-width: 470px;
  width: 90%;
`;
const ContainerVideo = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
`;
const ContainerExampleVideo = styled.img`
  width: 100%;
`;

const CustomIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  color: #fff;
  background-color: #0d5c63;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
`;

export const WhoWeAre: React.FC = () => {
  return (
    <>
      <BgGradient>
        <ContainerWhoWeAre>
          <MainContent>
            <h2>Who We Are</h2>
            <CustomP>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </CustomP>
          </MainContent>
          <ContainerVideo>
            <ContainerExampleVideo src={ExampleVideo} alt="Example Video" />
            <CustomIcon src={iconPlay} />
          </ContainerVideo>
        </ContainerWhoWeAre>
      </BgGradient>
    </>
  );
};

WhoWeAre.displayName = "WhoWeAre";
