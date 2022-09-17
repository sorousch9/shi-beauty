import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Anons } from "../components/Anons";
import Icons from "../assets/singleV3.png";
import { Add, Remove } from "@mui/icons-material";
import { mobile, minitablet } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  ${mobile({ marginTop: "20px" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;
const TopButton = styled.button`
  padding: 2px;
  outline: 0;
  font-size: 17px;
  color: rgb(0, 0, 0);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fdde5c),
    color-stop(#f8ab5e),
    color-stop(#f56a62),
    color-stop(#a176c8),
    color-stop(#759beb),
    color-stop(#65beb3),
    to(#70db96)
  );
  background: linear-gradient(
    to right,
    #fdde5c,
    #f8ab5e,
    #f56a62,
    #a176c8,
    #759beb,
    #65beb3,
    #70db96
  );
  border-radius: 15px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  margin-bottom: 10px;
  ${mobile({ display: "none" })};
`;
const ButtenText = styled.span`
  display: block;
  padding: 10px 40px;
  font-size: 17px;
  font-weight: 500;
  background: ${(props) => (props.type === "filled" ? "#ebebeb" : "#white")};
  border-radius: 15px;
  ${minitablet({ padding: "5px 20px" })};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
  ${minitablet({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 110px;
  ${mobile({ margin: "10px" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.div``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border:1px solid #ececec;
  border-radius 5px;
  background-color: #ececec;
  padding: 0px 10px;
  cursor: pointer;
  ${mobile({ margin: "10px" })}
`;
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Gap = styled.hr`
  background-color: #bebebe;
  border: none;
  height: 1px;
  margin: 10px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  text-align: center;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;

  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 2px;
  outline: 0;
  font-size: 17px;
  color: rgb(0, 0, 0);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fdde5c),
    color-stop(#f8ab5e),
    color-stop(#f56a62),
    color-stop(#a176c8),
    color-stop(#759beb),
    color-stop(#65beb3),
    to(#70db96)
  );
  background: linear-gradient(
    to right,
    #fdde5c,
    #f8ab5e,
    #f56a62,
    #a176c8,
    #759beb,
    #65beb3,
    #70db96
  );
  border-radius: 15px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  margin-bottom: 10px;
`;
const SummaryButtonText = styled.span`
  display: block;
  padding: 10px 40px;
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && "500"};
  background: #ebebeb;
  border-radius: 15px;
`;

const UnderBottom = styled.div``;
const IconsContainerTitle = styled.h3`
  margin-bottom: 10px;
`;
const IconsContainer = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const Cart = ({id, img, title, price, quantity=0}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  console.log(cart);

  return (
    <Container>
      <Anons />
      <Navbar />
      <Wrapper>
        <Title>Warenkorb</Title>
        <Top>
          <TopButton>
            <ButtenText type="filled">Weiter einkaufen</ButtenText>
          </TopButton>
          <TopTexts>
            <TopText>Warenkorb ({cart.quantity})</TopText>
            <TopText>Merkzettel (0) </TopText>
          </TopTexts>
          <TopButton>
            <ButtenText type="filled">Zur Kasse</ButtenText>
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product :</b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID :</b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} €
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Gap />
          </Info>
          <Summary>
            <SummaryTitle>Ihr Einkauf</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Warenwert</SummaryItemText>
              <SummaryItemPrice> {cart.total} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Versandkosten</SummaryItemText>
              <SummaryItemPrice>3.99 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Versandkosten Rabatt</SummaryItemText>
              <SummaryItemPrice>-3.99 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Gesamtsumme</SummaryItemText>
              <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>
              <SummaryButtonText>ZUR KASSE</SummaryButtonText>
            </SummaryButton>
            <UnderBottom>
              <IconsContainerTitle>WIR AKZEPTIEREN:</IconsContainerTitle>
              <IconsContainer src={Icons} />
            </UnderBottom>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
