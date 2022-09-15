import styled from "styled-components";
import { Badge } from "@mui/material";
import {
  AppRegistration,
  FavoriteBorderOutlined,
  PersonPinOutlined,
  Search,
  ShoppingCartOutlined,
  SmsFailedOutlined,
} from "@mui/icons-material";
import Logo1 from "../assets/LOGO.png";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  cursor: pointer;
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
  ${mobile({ fontSize: "12px" })};
`;

export const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)


  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={Logo1} onClick={() => navigate("/")}></Logo>
        </Left>
        <Center>
          <SearchCantainer>
            <Input placeholder="Wonach suchst du?" />
            <Search style={{ color: "gray", fontSize: "24px" }} />
          </SearchCantainer>
        </Center>
        <Right>
          <MenuItem>
            <SmsFailedOutlined
              style={{ color: "gray" }}
              onClick={() => navigate("/")}
            />
            <Link
              to="/redirect"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Service
            </Link>
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={1} color="primary" style={{ color: "gray" }}>
              <FavoriteBorderOutlined onClick={() => navigate("/")} />
            </Badge>
            <Link
              to="/redirect"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Merkzettel
            </Link>
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={quantity} color="primary" style={{ color: "gray" }}>
              <ShoppingCartOutlined onClick={() => navigate("/cart")} />
            </Badge>
            <Link to="/cart" style={{ color: "gray", textDecoration: "none" }}>
              Warenkorb
            </Link>
          </MenuItem>

          <MenuItem>
            <PersonPinOutlined
              style={{ color: "gray" }}
              onClick={() => navigate("/login")}
            />
            <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
              Mein Konto
            </Link>
          </MenuItem>
          <MenuItem>
            <AppRegistration
              style={{ color: "gray" }}
              onClick={() => navigate("/register")}
            />
            <Link
              to="/register"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Registrieren
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
