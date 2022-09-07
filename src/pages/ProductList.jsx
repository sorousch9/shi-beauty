import styled from "styled-components";
import { Anons } from "../components/Anons";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin-right: 20px;
`;
const Select = styled.select`
  width: 180px;
  height: 30px;
  margin-right: 20px;
`;
const Option = styled.option``;

export const ProductList = () => {
  return (
    <Container>
      <Anons />
      <Navbar />
      <Title>Mode</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Producten :</FilterText>
          <Select>
            <Option disabled selected>
              Farbe
            </Option>
            <Option>Blau</Option>
            <Option>Lila</Option>
            <Option>Grün</Option>
            <Option>Schwarz</Option>
            <Option>Rosa</Option>
            <Option>Rot</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Größe
            </Option>
            <Option>34</Option>
            <Option>36</Option>
            <Option>38</Option>
            <Option>40</Option>
            <Option>42</Option>
            <Option>44</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Marke
            </Option>
            <Option>Tommy Hilfiger</Option>
            <Option>HalYS</Option>
            <Option>Rich & Royal</Option>
            <Option>Taifan</Option>
            <Option>MarJo</Option>
            <Option>Marc Cain</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sortriren nach:</FilterText>
          <Select>
            <Option selected> Topseller</Option>
            <Option>Neuheiten</Option>
            <Option>Bewertungen</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
