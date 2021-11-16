import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
// import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { grey } from "@mui/material/colors";
// import { fontSize } from "@mui/system";
//Main Navigation Div
const Container = styled.div`
  max-width: 90vw;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//Left part of navigation
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

//Center part of navigation
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

//Right part of navigation
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Lily Jewellery</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge color="secondary" badgeContent={4}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
