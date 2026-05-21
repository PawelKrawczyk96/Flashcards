import { Outlet } from "react-router";
import { Container, Box } from "@mui/material";
import "./style.css";
import { SidebarMenu } from "@components/SidebarMenu";

export const RootLayout = () => {
  return (
    <Box className="layout">
      <Box className="layout__top">
        <SidebarMenu />

        <Box className="layout__content">
          <Container maxWidth="xl" className="panel__container">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
