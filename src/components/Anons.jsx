import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 25px;
  background-color: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({display:"none"})};
  ${tablet({fontSize:"12px",height:"30px"})};
`;

const Span = styled.span`padding-left: 50px;

${tablet({paddingLeft:"15px"})};
`;
export const Anons = () => {
  return (
    <Container>
      <Span>Kostenloser Versand und Rückversand</Span>
      <Span>90 Tage Rückgaberecht</Span>
      <Span>Kostenfreie Hotline</Span>
      <Span>Abholung und Rückgabe auch in über 60 Filialen</Span>
    </Container>
  );
};
