import { FavoriteBorderOutlined, ReadMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(255, 255, 255, 0) 90%
  );
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: end;
  transition: all 0.5s ease;
  cursor: pointer;
  flex-direction: column;
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
    border-radius: 10px;
  }
  ${tablet({ height: "50vh" })}
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 30%;
  background-color: antiquewhite;
  position: absolute;
`;

const Image = styled.img`
  height: 90%;
  z-index: 2;
`;
const Icons = styled.div`
  display: flex;
`;
const Icon = styled.div`
  min-width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  background-color: #ececec;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #white;
    transform: scale(1.2);
  }
`;
const Details = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 20px;
  padding: 0px 10px;
  alien-content: center;
`;
const Title = styled.h2`
  color: white;
  text-align: center;
  font-weight: 400;
`;
const Desc = styled.p`
  color: #ececec;
  text-align: center;
  margin: 20px 60px;
`;
const Price = styled.span`
  color: #ececec;
  text-align: center;
  font-size: 28px;
`;

export const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Desc> {item.desc.substring(0, 100)}...</Desc>
        <Price>{item.price} €</Price>
        <Icons>
          <Icon>
            <Details>
              <Link
                to={`/product/${item._id} `}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Details
              </Link>
              <ReadMore />
            </Details>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Icons>
      </Info>
    </Container>
  );
};
