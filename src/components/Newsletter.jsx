import {
  Send,
  PersonPinOutlined,
  CardGiftcardOutlined,
  ForumOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 30px;
`;

const Description = styled.div`
  width: 80vw;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 300;
  text-align: center;
`;

const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  cursor: pointer;
`;
const DecsContainer = styled.div`
  display: flex;
  height: 8vh;
  border: 5px solid;
  width: 80%;
  margin-top: 30px;
  border-color: white antiquewhite white antiquewhite;
  justify-content: space-around;
  align-items: center;

`;
const Icon = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  &:hover {
   font-size: 18px;
   font-weight:800;}
`;

const ShopZertifiedIcon = styled.img`
  height: 50px;
  width: auto;
`;
const Text = styled.span`
  margin-left: 8px;
  font-weight: 500;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter anmelden & Vorteile sichern</Title>
      <Description>
        Ich möchte den Newsletter der Plattform ShiBeauty.de, betrieben von der
        ShiBeauty (GmbH & Co KG), erhalten und über Angebote, Trends und
        Aktionen, die auf der Plattform angeboten werden, per E-Mail informiert
        werden. Diese Einwilligung kann jederzeit mit Wirkung für die Zukunft
        unter www.ShiBeauty.de/abmelden oder am Ende jeder E-Mail widerrufen
        werden.
      </Description>
      <InputContainer>
        <Input placeholder="Email Addresse" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
      <DecsContainer>
        <Icon>
          <PersonPinOutlined />
          <Text> Mein Konto</Text>
        </Icon>

        <Icon>
          <CardGiftcardOutlined />
          <Text> Geschenkgutscheine</Text>
        </Icon>
        <Icon>
          <ForumOutlined />
          <Text> Lob & Kritik</Text>
        </Icon>
        <ShopZertifiedIcon src="https://ehi-siegel.de/fileadmin/ehi/templates/assets/img/ehi-logo.png" />
      </DecsContainer>
    </Container>
  );
};
