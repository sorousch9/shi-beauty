import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 24px;
  background-color: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({display:"none"})};
`;

const Span = styled.span`padding-left: 50px;`;

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
