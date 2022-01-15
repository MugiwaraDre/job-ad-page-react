import React from "react";
import Header from "./Header";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({
  height: "100vh",
  marginTop: "2em",
});

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default Layout;
