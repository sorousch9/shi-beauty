import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { Anons } from "../components/Anons";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "4px", flexDirection:"column" ,marginTop:"45px"})}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 30px;
  align-items: center;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  align-items: center;
  display: flex;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  margin: 0px 3px;
  width: 30px;
  height: 20px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 5px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1.5px solid teal;
  background-color: white;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export const Product = () => {
  return (
    <Container>
      <Anons />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.otto.de/i/otto/86156309-62c7-5029-9766-87417a3ea309" />
        </ImgContainer>
        <InfoContainer>
          <Title>Vivance Hosenrock mit Blumendruck</Title>
          <Desc>
            Wie ein Blumenmeer: Der Hosenrock von Vivance zeigt sich mit einem
            floralen Alloverprint und einem verspielten Volantbesatz. Der
            bequeme Gummizugbund und die integrierten Shorts machen den Rock zu
            einem bequemen Begleiter für jeden Tag. Zusätzlichen Komfort sichern
            die leicht ausgestellte Passform und die weiche Jerseyqualität.
            Style das Modell mit Blusenshirts oder Cropped-Tops, fühl dich wohl
            und sieh gut aus – in dem Hosenrock von Vivance!.
          </Desc>
          <Price>€ 29,99</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Farbe:</FilterTitle>
              <FilterColor color="pink" />
              <FilterColor color="Blue" />
              <FilterColor color="purple" />
              <FilterColor color="Red" />
            </Filter>
            <FilterTitle> Größe: </FilterTitle>
            <FilterSize>
              <FilterSizeOption>34</FilterSizeOption>
              <FilterSizeOption>36</FilterSizeOption>
              <FilterSizeOption>38</FilterSizeOption>
              <FilterSizeOption>40</FilterSizeOption>
            </FilterSize>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>In den Warenkorb</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
