import styled from "styled-components";
import { Badge } from "@mui/material";
import {
  FavoriteBorderOutlined,
  PersonPinOutlined,
  Search,
  ShoppingCartOutlined,
  SmsFailedOutlined,
} from "@mui/icons-material";
import Logo1 from "../assets/LOGO.png";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding : 10px; 20px;
${mobile({ flexWrap: "wrap", padding: "3px 3px" })};
`;
const Center = styled.div`
  display: flex;
  flex: 45%;
  align-items: center;
  ${mobile({ flex: "0", marginTop: "10px" })};
`;

const SearchCantainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  justify-content: space-around;
`;
const Input = styled.input`
  margin-left: 10px;
  border: none;
  padding: 15px;
  background-color: #f0f0f0;
  min-width: 35vw;
`;

const Left = styled.div`
  flex: 15%;
  text-align: center;
  ${mobile({ flex: "0" })};
`;
const Logo = styled.img`
  width: 100px;
`;

const Right = styled.div`
  display: flex;
  flex: 40%;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ marginTop: "13px", justifyContent: "space-between" })};
`;
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  margin: 0px 3px;
  color: gray;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={Logo1}></Logo>
        </Left>
        <Center>
          <SearchCantainer>
            <Input placeholder="Wonach suchst du?" />
            <Search style={{ color: "gray", fontSize: "24px" }} />
          </SearchCantainer>
        </Center>
        <Right>
          <MenuItem>
            <SmsFailedOutlined style={{ color: "gray" }} />
            Service
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={1} color="primary" style={{ color: "gray" }}>
              <FavoriteBorderOutlined />
            </Badge>
            Merkzettel
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="primary" style={{ color: "gray" }}>
              <ShoppingCartOutlined />
            </Badge>
            Warenkorb
          </MenuItem>
          <MenuItem>
            <PersonPinOutlined style={{ color: "gray" }}  />
           <a href="#Login">Mein Konto</a> 
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
