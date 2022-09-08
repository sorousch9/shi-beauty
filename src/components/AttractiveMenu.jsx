import {
  CardGiftcard,
  AutoModeOutlined,
  SavingsOutlined,
  LocalShippingOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ marginTop: "60px" })}
`;
const Section = styled.div`
  display: flex;
  margin: auto;
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8
  );
  position: relative;
  padding: 5px 5px 5px 5px;
  border-radius: 7px;
  align-items: center;
  justify-content: space-around;
  ${mobile({ display: "none"})}
`;

const SContainer = styled.div`
display:flex;
width:230px;
align-items: center;
padding:18px 10px;
background: #fff;
color: black;
border-radius: 5px;
font-size: 1rem;

}`;
const Topic = styled.div`
  margin-left: 5px;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const AttractiveMenu = () => {
  return (
    <Container>
      <Section>
        <SContainer>
          <CardGiftcard style={{ fontSize: 50 }} />
          <Topic>50€ für Neukund*innen</Topic>
        </SContainer>
      </Section>
      <Section>
        <SContainer>
          <SavingsOutlined style={{ fontSize: 50 }} />
          <Topic>0% Finanzierung</Topic>
        </SContainer>
      </Section>
      <Section>
        <SContainer>
          <AutoModeOutlined style={{ fontSize: 50 }} />
          <Topic>10% auf Pre-owned</Topic>
        </SContainer>
      </Section>
      <Section>
        <SContainer>
          <LocalShippingOutlined style={{ fontSize: 50 }} />
          <Topic>Kostenlose Versandkosten</Topic>
        </SContainer>
      </Section>
    </Container>
  );
};
