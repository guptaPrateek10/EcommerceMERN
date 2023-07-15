import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
// import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../Responsive";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/apiCalls";
import LogoutModal from "../pages/Logout/LogoutModal";
import { useState } from "react";
// import { grey } from "@mui/material/colors";
// import { fontSize } from "@mui/system";
//Main Navigation Div

const Navbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  const navigate = useNavigate();
  const currentUserID = useSelector((state) => state.user.currentUser);
  const routeChange = (path) => {
    navigate(path);
  };
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Show the logout modal
    setShowLogoutModal(true);
  };

  const handleCloseModal = () => {
    logout(dispatch, null);
    routeChange("/");
    // Hide the logout modal
    setShowLogoutModal(false);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Lily Jewellery</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => routeChange("/register")}>REGISTER</MenuItem>

          {currentUserID ? (
            <MenuItem onClick={handleLogout}> SIGN OUT</MenuItem>
          ) : (
            <MenuItem onClick={() => routeChange("/login")}> SIGN IN</MenuItem>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge color="secondary" badgeContent={quantity}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
      {showLogoutModal && <LogoutModal onClose={handleCloseModal} />}
    </Container>
  );
};
const Container = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  ${mobile({ height: "80px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
//Left part of navigation
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  ${mobile({ display: "none" })}
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
  ${mobile({ width: "50px" })}
`;

//Center part of navigation
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

//Right part of navigation
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 600;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export default Navbar;
