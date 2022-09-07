import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Anons } from "../components/Anons";


const Container = styled.div``;

const Wrapper = styled.div`
 padding:20px;`;

const Title = styled.h1`
font-weight:300;
text-align:center;
`;

const Top = styled.div``;

const Bottom = styled.div``;

export const Cart = () => {
  return (
    <Container>
      <Anons />
      <Navbar />
      <Wrapper>
        <Title>Warenkorb</Title>
        <Top></Top>
        <Bottom></Bottom>

      </Wrapper>
      <Footer />
    </Container>
  );
};
