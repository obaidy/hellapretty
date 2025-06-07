import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const navLinks = (
    <>
      <ScrollLink to="services" smooth duration={500}>
        <Button color="inherit">Služby</Button>
      </ScrollLink>
      <ScrollLink to="prices" smooth duration={500}>
        <Button color="inherit">Cenik</Button>
      </ScrollLink>
      <Button component={RouterLink} to="/pages/company/about-us" color="inherit">
        O nás
      </Button>
    </>
  );

  const reservationButton = (
    <Button
      variant="contained"
      color="info"
      href="https://calendly.com/hellapretty/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Rezervace
    </Button>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#F2F2F2", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <ScrollLink
          to="home"
          smooth
          duration={500}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }}>
            Hella Pretty
          </Typography>
        </ScrollLink>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={toggleDrawer}>
                <Stack spacing={2}>
                  {navLinks}
                  {reservationButton}
                </Stack>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Stack direction="row" spacing={3}>
              {navLinks}
            </Stack>
            {reservationButton}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
