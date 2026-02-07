import { Header } from "@components/Header/Header";
import { menuItems } from "@consts/const";
import { Outlet } from "react-router";
import { Grid, Container, Box } from "@mui/material";
import "./style.css";

export const RootLayout = () => {
  return (
    <Grid>
      <Header menuItems={menuItems} />
      <Container maxWidth="xl" className="panel__container">
        <Outlet />
      </Container>
      <Box className="footer" width="100%">
        <p>footer</p>
      </Box>
    </Grid>
  );
};
