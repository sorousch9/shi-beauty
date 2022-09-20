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
const Select = styled.ul`
  width: 180px;
  height: 30px;
  margin-right: 20px;
  ${mobile({ margin: "3px", width: "200px" })}
`;
const Option = styled.li``;

export const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Topseller");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Anons />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Producten :</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >Farbe</Option>
            <Option value="green">Grün</Option>
            <Option value="lime">Limette</Option>
            <Option value="red">rot</Option>
            <Option value="gray">Grau</Option>
            <Option value="teal">blaugrün</Option>
            <Option value="brown">braun</Option>
            <Option value="orange">Orange</Option>
            <Option value="yellow">yellow</Option>
            <Option value="purple">Violett</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Größe</Option>
            <Option>30</Option>
            <Option>32</Option>
            <Option>34</Option>
            <Option>36</Option>
            <Option>38</Option>
            <Option>40</Option>
            <Option>42</Option>
            <Option>44</Option>
            <Option>46</Option>
            <Option>48</Option>
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
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="neuheiten"> Neuheiten</Option>
            <Option value="prise-n">Preis : niedrigster zu erst</Option>
            <Option Value="prise-h">Preis : höchster zu erst</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
