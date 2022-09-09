import styled from "styled-components";
import { Badge } from "@mui/material";
import {
  FavoriteBorderOutlined,
  PersonPinOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 70px;
  
`;
const Wrapper = styled.div`
margin-top: 10px;
display: flex;
flex-direction: row;
${mobile({ flexWrap: "wrap", padding: "3px 3px" })};
`;
const Left = styled.div`
  flex: 15%;
  text-align: center;
  ${mobile({ flex: "0" })};
`;
const Logo = styled.h1`
color:white;
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
  padding: 5px  10px;
  ${mobile({ marginTop: "13px", justifyContent: "space-between" })};
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  padding: 0px  5px;
  ${mobile({ fontSize: "12px" })};
`;

export const SmallNavi = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo onClick={() => navigate("/")}>Shi Beauty</Logo>
        </Left>
        <Right>
          <MenuItem>
            <Badge badgeContent={1} color="primary" style={{ color: "white" }}>
              <FavoriteBorderOutlined onClick={() => navigate("/")} />
            </Badge>
            <Link
              to="/redirect"
              style={{ color: "white" , textDecoration: "none" }}
            >
              Merkzettel
            </Link>
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={3} color="primary" style={{ color: "white" }}>
              <ShoppingCartOutlined onClick={() => navigate("/cart")} />
            </Badge>
            <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
              Warenkorb
            </Link>
          </MenuItem>
          <MenuItem>
            <PersonPinOutlined style={{ color: "white" }} onClick={() =>navigate("/login")} />
            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
              Mein Konto
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
