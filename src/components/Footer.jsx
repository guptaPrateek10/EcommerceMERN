import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: White;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
// const ContactItem= styled.div``
// const ContactItem= styled.div``
// const ContactItem= styled.div``
const Payment = styled.img`
  width: 100%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LiLy Jewellery</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          repudiandae aperiam officiis modi recusandae labore quibusdam beatae,
          similique praesentium expedita aliquam sed mollitia quod eum odit
          cumque reprehenderit, amet repellendus.
        </Desc>
        <SocialContainer>
          <SocialIcon color="364fc7">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="748ffc">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="d6336c">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 10/24 Vishwnath Gali,
          Varanasi 221001
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 9960860411
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          Guptaprateek10@gmail.com
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
