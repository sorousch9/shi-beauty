import styled from "styled-components";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import { sliderItems } from "../Data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  transform: translatex(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease-in-out;
`;

const Sliders = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${(props) => props.backColor};
  align-items: start;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left:30px
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
  
`;
const Title = styled.h1`
  font-size: 70px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;
 
`;
const Button = styled.button`
  padding: 8px 40px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
 
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNew />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Sliders backColor={item.backColor} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Entdecken</Button>
            </InfoContainer>
          </Sliders>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};
