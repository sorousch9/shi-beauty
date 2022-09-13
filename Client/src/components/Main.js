import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";
  import styled from "styled-components";
  import { tablet } from "../responsive";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    ${tablet({ height: "50vh" })}
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 280px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  
    &:hover ${Info} {
      opacity: 1;
      border-radius:10px
    }
    ${tablet({ height: "50vh" })}
  `;
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius:30%;
    background-color: antiquewhite;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 90%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  export const Main = ({ item }) => {
    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };