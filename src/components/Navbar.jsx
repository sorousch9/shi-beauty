import styled from "styled-components";
import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Logo1 from "../assets/LOGO.webp"

const Container = styled.div`
  height: 70px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding : 10px; 20px`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const LeftLanguages = styled.select`
border: 0.5px solid lightgray;
padding : 5px; 20px;
font-size: 14px;
  cursor: pointer;
`;
const LeftLanguagesDE = styled.option``;
const LeftLanguagesEN = styled.option``;

const SearchCantainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;

`;
const Input = styled.input`
  border: none;
  padding: 5px;
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
`;
const Logo = styled.img`
  width:180px;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LeftLanguages>
            <LeftLanguagesDE value="DE">DE</LeftLanguagesDE>
            <LeftLanguagesEN value="EN">EN</LeftLanguagesEN>
          </LeftLanguages>
          <SearchCantainer>
            <Input placeholder="Suchen" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchCantainer>
        </Left>
        <Center>
          <Logo src={Logo1}></Logo>
        </Center>
        <Right>
          <MenuItem />
          Registrieren
          <MenuItem />
          Anmelden
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
