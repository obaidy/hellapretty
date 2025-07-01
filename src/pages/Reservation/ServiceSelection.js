import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import NavBar from "pages/LandingPages/Coworking/NavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

import { services } from "../LandingPages/Coworking/sections/servicesData";

function ServiceSelection() {
  return (
    <>
      <NavBar />
      <MKBox component="section" py={6}>
        <Container>
          <Grid container justifyContent="center" mb={4}>
            <Grid item xs={12} textAlign="center">
              <MKTypography variant="h2">Vyberte službu</MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {services.map(({ image, title, description }) => (
              <Grid item xs={12} sm={6} md={4} key={title}>
                <SimpleBlogCard
                  image={image}
                  title={title}
                  description={description}
                  action={{
                    type: "internal",
                    route: `/reserve?service=${encodeURIComponent(title)}`,
                    label: "Rezervovat",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ServiceSelection;
