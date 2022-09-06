import styled from "styled-components";
import Sepa from "../assets/sepa.png";
import Visa from "../assets/Visa.png";
import Giro from "../assets/Giro.png";
import Paypal from "../assets/paypal.png";
import AppStore from "../assets/app-store.svg";
import PlayStore from "../assets/play-store.svg";
import {
  Check,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  margin-left: 20vw;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  margin-top: 20px;
  font-size: 1.6rem;
`;
const Desc = styled.span`
  margin-top: 20px;
  font-weight: 600;
`;

const TelNumber = styled.span`
  margin-top: 20px;
`;

const Link = styled.a`
  margin-top: 10px;
  text-decoration: none;
  color: #090909 ;
`;

const AppLink = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const AppImage = styled.img`
  width: 180px;
  height: 70px;
  margin-top: 10px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 120px;
  height: auto;
  margin-top: 10px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SocialIconContainer = styled.div`
display: flex;
height: 15vh;
border: 10px solid;
width: 80%;
margin-top: 30px;
border-color: antiquewhite white white white;
justify-content: center;
align-items: center;`;

const SocialIcon = styled.div`
margin-right: 15px;
&:hover{font-size:100px}
`;

const DecsContainer = styled.div`
  display: flex;
  height: 8vh;
  border: 5px solid;
  width: 80%;
  margin-top: 30px;
  border-color: antiquewhite white white white;
  justify-content: space-around;
  align-items: center;
`;
const Icon = styled.div`

  align-items: center;
  display: flex;
  cursor: pointer;
  &:hover {
   font-size: 18px;
   font-weight:800}
   
`;

const Text = styled.span`
  margin-left: 8px;
  font-weight: 500;
`;
const WebsiteDescription = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-size:16px;`


export const Footer = () => {
  return (
    <Container>
      <Top>
        <Left>
          <Title>Service</Title>
          <Desc>Wir sind gerne für dich da.</Desc>
          <TelNumber>040 - 1234 4567</TelNumber>
          <Link href="/">Kostenloser Rückrufservice</Link>
          <Link href="/">service@shibeauty.de</Link>
          <AppLink>
            <AppImage src={AppStore} />
            <AppImage src={PlayStore} />
          </AppLink>
        </Left>

        <Center>
          <Title>Zahlungsarten</Title>
          <Image src={Sepa} />
          <Image src={Visa} />
          <Image src={Paypal} />
          <Image src={Giro} />
          <Link href="/">Rechnung</Link>
          <Link href="/">Ratenzahlung</Link>
          <Link href="/">Ratenschutz-Versicherung</Link>
          <Link href="/">Zahlpause</Link>
          <Link href="/">Vorkasse</Link>
        </Center>

        <Right>
          <Title>Über uns</Title>
          <Link href="/">Nachhaltigkeit</Link>
          <Link href="/">Unternehmen</Link>
          <Link href="/">Compliance</Link>
          <Link href="/">Newsroom</Link>
          <Link href="/">Jobs</Link>
          <Title>Blogs</Title>
          <Link href="/">Tech-Blog</Link>
        </Right>
      </Top>
      <Bottom>
        <DecsContainer>
          <Icon>
            <Check />
            <Text> Sicherer Kauf auf Rechnung</Text>
          </Icon>

          <Icon>
            <Check />
            <Text> Kostenlose Rücksendung</Text>
          </Icon>
          <Icon>
            <Check />
            <Text>Einfache Ratenzahlung</Text>
          </Icon>
          <Icon>
            <Check />
            <Text> Ratenschutz-Versicherung </Text>
          </Icon>
        </DecsContainer>
        <SocialIconContainer>
          <SocialIcon>
            <Facebook style={{fontSize:35}} />
          </SocialIcon>
          <SocialIcon>
            <Instagram style={{fontSize:35}} />
          </SocialIcon>
          <SocialIcon>
            <Twitter style={{fontSize:35}} />
          </SocialIcon>
          <SocialIcon>
            <LinkedIn style={{fontSize:35}} />
          </SocialIcon>
          <SocialIcon>
            <YouTube style={{fontSize:35}} />
          </SocialIcon>
        </SocialIconContainer>
      </Bottom>
      <WebsiteDescription>Design by Soroush Safarkhah "Sep 2022"</WebsiteDescription>
    </Container>
  );
};
