import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Anons } from "../components/Anons";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20;
  text-align: center;
  ${mobile({ marginTop: "50px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  ${mobile({ flexDirection: "column" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  width: 180px;
  height: 30px;
  margin-right: 20px;
  ${mobile({ margin: "3px", width: "200px" })}
`;
const Option = styled.option``;

export const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Topseller");

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({ ...filters,[e.target.value]: value });
  };
  console.log(filters);
  return (
    <Container>
      <Anons />
      <Navbar />
      <Title>Mode</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Producten :</FilterText>
          <Select name="Color" onChange={handleFilters}>
            <Option disabled>Farbe</Option>
            <Option>Blau</Option>
            <Option>Lila</Option>
            <Option>Grün</Option>
            <Option>Schwarz</Option>
            <Option>Rosa</Option>
            <Option>Rot</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Größe</Option>
            <Option>34</Option>
            <Option>36</Option>
            <Option>38</Option>
            <Option>40</Option>
            <Option>42</Option>
            <Option>44</Option>
          </Select>
          <Select name="brand" onChange={handleFilters}>
            <Option disabled>Marke</Option>
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
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="Topseller"> Topseller</Option>
            <Option value="Neuheiten">Neuheiten</Option>
            <Option Value="Bewertungen">Bewertungen</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};
