import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import "../styles/Header.css";

import doggoLogo from "../assets/doggoLogo.png";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  isOpen,
  onOpen,
  onClose,
  Input,
  Button,
} from "@chakra-ui/react";

export default function MenuLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const larguraMonitor = window.innerWidth;

  const HeaderContainer = styled.div`
    background-color: #fff;
    padding: 10px;
    border-bottom: 2px solid #000028;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 16px;
      font-family: "Batangas";
      color: #fe502d;
    }
  `;

  const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
    border: 1px solid black;
    padding: 5px 25px;
    margin: auto 20px;
    display: flex;
    justify-content: center;

    &:hover {
      text-decoration: underline;
    }
  `;

  const MenuIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    p {
      margin: 0;
      margin-left: 10px;
      white-space: nowrap;
      vertical-align: middle;
      margin-top: auto;
      margin-bottom: auto;
      font-size: 20px;
      font-weight: bold;
    }
  `;

  const OptionsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    button {
      margin: 5px 10px;
      border-radius: 8px;
      min-width: 10rem;
      font-weight: bold;
    }
  `;

  if (larguraMonitor <= 768) {
    return (
      <Box className="header-wrapper-mobile">
        <HeaderContainer className="header-container-mobile">
          <MenuIcon className="menu-icon-mobile">
            <img
              src={doggoLogo}
              style={{ width: "50px", height: "50px" }}
              alt="Ícone"
            />
            <p>The Statistic Doggo</p>
          </MenuIcon>

          <>
            <Button
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
              id="menu-mobile-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>

                <div className="mobile-page-button-wrapper">
                  <StyledLink className="mobile-page-button" onClick={onClose} to="/">Home</StyledLink>
                  <StyledLink className="mobile-page-button" onClick={onClose}  to="/statistic">Statistic</StyledLink>
                  <StyledLink className="mobile-page-button" onClick={onClose}  to="/about">About</StyledLink>
                </div>

                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>

          {/* <OptionsHeader>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/statistic">Statistic</StyledLink>
                <StyledLink to="/about">About</StyledLink>
              </OptionsHeader> */}
        </HeaderContainer>
      </Box>
    );
  } else {
    return (
      <Box className="header-wrapper">
        <div className="">
          <HeaderContainer className="header-container">
            <MenuIcon className="menu-icon">
              <img
                src={doggoLogo}
                style={{ width: "50px", height: "50px" }}
                alt="Ícone"
              />
              <p>The Statistic Doggo</p>
            </MenuIcon>

            <OptionsHeader>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/statistic">Statistic</StyledLink>
              <StyledLink to="/about">About</StyledLink>
            </OptionsHeader>
          </HeaderContainer>
        </div>
      </Box>
    );
  }
}
