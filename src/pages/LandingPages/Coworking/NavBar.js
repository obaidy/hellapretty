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
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const navLinks = (
    <>
      {isHome ? (
        <ScrollLink to="services" smooth duration={500}>
          <Button color="inherit">Služby</Button>
        </ScrollLink>
      ) : (
        <Button component={RouterLink} to="/#services" color="inherit">
          Služby
        </Button>
      )}
      {isHome ? (
        <ScrollLink to="prices" smooth duration={500}>
          <Button color="inherit">Cenik</Button>
        </ScrollLink>
      ) : (
        <Button component={RouterLink} to="/#prices" color="inherit">
          Cenik
        </Button>
      )}
      <Button component={RouterLink} to="/pages/company/about-us" color="inherit">
        O nás
      </Button>
    </>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#F2F2F2", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {isHome ? (
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
        ) : (
          <RouterLink to="/#home" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", cursor: "pointer" }}>
              Hella Pretty
            </Typography>
          </RouterLink>
        )}

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={toggleDrawer}>
                <Stack spacing={2} alignItems="flex-start">
                  {navLinks}
                  <IconButton
                    component="a"
                    href="https://www.instagram.com/hella_pretty_derma/?igsh=OGh6MnhnZTdkdnlx"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "black" }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Stack direction="row" spacing={3}>
              {navLinks}
            </Stack>
            <IconButton
              component="a"
              href="https://www.instagram.com/hella_pretty_derma/?igsh=OGh6MnhnZTdkdnlx"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "black" }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
