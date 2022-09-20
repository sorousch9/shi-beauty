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
import { useDispatch } from "react-redux";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  calculateTax,
  getTotalAmount,
} from "../redux/cartRedux";

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
  flex-direction: column;
  align-items: flex-start;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  margin: 0px 5px;
  width: 30px;
  height: 20px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const FilterSize = styled.div`
  margin-top: 5px;
  display: flex;
`;
const FilterSizeOption = styled.li`
  list-style-type: none;
  cursor: pointer;
  margin-right: 10px;
  border:1px solid #ececec;
  border-radius 5px;
  background-color: #ececec;
  padding: 8px 20px;
`;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  ${mobile({ width: "100%" })}
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
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addProduct({ ...product, color, size }));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(calculateTax());
    dispatch(getTotalAmount());
  };
  useEffect(() => {}, [dispatch]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  return (
    <Container>
      <Anons />
      <Navbar />
      <Wrapper key={product.id}>
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
            <FilterTitle> Größe (Normalgrößen) </FilterTitle>
            <FilterSize>
              {product.size?.map((s) => (
                <FilterSizeOption key={s} onClick={() => setSize(s)}>
                  {s}
                </FilterSizeOption>
              ))}
            </FilterSize>
          </FilterContainer>

          <AddContainer>
            <Button
              onClick={() => {
                addToCart(product);
              }}
            >
              In den Warenkorb
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
