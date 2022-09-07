import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Einfach registrieren</Title>
        <Form>
          <Input placeholder="Vorname" required />
          <Input placeholder="Name" required />
          <Input placeholder="Username" required />
          <Input placeholder="Email" required />
          <Input placeholder="Password" required />
          <Input placeholder="Password wiederholen" required />
          <Agreement>
            Ich möchte den Newsletter der Plattform Shi Beauty.de, betrieben von
            der Shi Beauty (GmbH & Co. KG.), erhalten und über Angebote, Trends
            und Aktionen, die auf der Plattform angeboten werden, per E-Mail
            informiert werden.
          </Agreement>
          <Button>Registrieren</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
