import { Add, Remove } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Anons } from "../components/Anons";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px 5px;
  display: flex;
  ${mobile({ padding: "4px", flexDirection: "column", marginTop: "45px" })}
`;

const ImgContainer = styled.div`
  flex: 60wh;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 40%;
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
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  const handleQuantityChange = (type) => {
    if (type === "decrese") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Anons />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>€ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Farbe:</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <FilterTitle> Größe: </FilterTitle>
            <FilterSize onChange={(e) => setSize(e.target.value)}>
              {product.size?.map((s) => (
                <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ))}
            </FilterSize>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantityChange("decrese")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantityChange("increse")} />
            </AmountContainer>
            <Button onClick={handleClick}>In den Warenkorb</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
