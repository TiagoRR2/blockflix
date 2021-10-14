import React from "react";
import { useUserContext } from "common/context/User";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "assets/images/logo.png";
import { ReactComponent as ProfileSVG } from "assets/svgs/profile.svg";
import { ReactComponent as CartSVG } from "assets/svgs/shoppingCart.svg";
import { accent } from "ui/colorPalette";

const StyledHeader = styled.div`
  height: 75px;
  background-color: ${({ theme }) => theme.second};
  width: 100vw;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
const Navbar = styled.nav`
  min-width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  const { isLoggedIn } = useUserContext();

  return (
    <StyledHeader>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="Blockflix logo" height="100%" />
        </Link>
        <Navbar>
          {isLoggedIn 
            ? (
            <>
              <Link to="register">Cadastrar</Link>
              <Link to="login">Login</Link>
            </>
            ) 
            : (
              <>
                <Link to="cart">
                  <CartSVG 
                    width="50px"
                    height="50px"
                    fill={accent}
                  />
                </Link>
                <Link to="user">
                  <ProfileSVG
                    width="50px"
                    height="50px"
                    fill={accent}
                  />
                </Link>
              </>
          )}
        </Navbar>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
