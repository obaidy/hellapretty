import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#E7D9D7",
        boxShadow: "none", // Optional: removes the shadow for a cleaner look
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side - Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Hella Pretty
        </Typography>

        {/* Right side - Navigation links */}
        <Stack direction="row" spacing={3}>
          <Link to="services" smooth={true} duration={500}>
            <Button sx={{ color: "#000" }}>Služby</Button>
          </Link>
          <Link to="prices" smooth={true} duration={500}>
            <Button sx={{ color: "#000" }}>Ceny</Button>
          </Link>
          <Link to="about-us" smooth={true} duration={500}>
            <Button sx={{ color: "#000" }}>O nás</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
