import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useNavigate } from "react-router-dom";
import { SmallNavi } from "../components/SmallNav";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/1271972/pexels-photo-1271972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  margin-left: 20px;
  border-radius: 8px;
  ${mobile({ width: "75%" })}
  ${tablet({ width: "60%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: gray;
    cursor:not-allowed;
  }
`;

const LinkLogin = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
color:red;
`
//username and password (userName *)
export const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error}=useSelector((state)=> state.user)

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <SmallNavi />
      <Wrapper>
        <Title>Anmelden</Title>
        <Form>
          <Input
            placeholder="Deine E-Mail-Adresse"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Dein Passwort"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>Anmelden</Button>
          {error && <Error>Email oder password stimmt nicht...</Error>}
          <LinkLogin onClick={() => navigate("/register")}>
            Passwort vergessen ?/ Probleme bei der Anmeldung ?
          </LinkLogin>
          <LinkLogin onClick={() => navigate("/register")}>
            Neu beu Shi ? Jetzt registrieren
          </LinkLogin>
        </Form>
      </Wrapper>
    </Container>
  );
};
