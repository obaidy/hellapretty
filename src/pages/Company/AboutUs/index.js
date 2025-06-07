import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import NavBar from "pages/LandingPages/Coworking/NavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-nat1.JPG";

function AboutUs() {
  return (
    <>
      <NavBar />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            md={8}
            justifyContent="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography variant="h1" color="white">
              O nás
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              NATALIE
            </MKTypography>
            <Stack direction="row" spacing={1} mt={2}>
              <a href="https://calendly.com/hellapretty/" target="_blank" rel="noopener noreferrer">
                <MKButton variant="gradient" color="info">
                  Rezervace
                </MKButton>
              </a>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8} textAlign="center">
              <MKTypography variant="h3" mb={2}>
                Naše Mise
              </MKTypography>
              <MKTypography variant="body2" color="text">
                Zaměřujeme se na široké spektrum estetických služeb od microneedlingu a laminace
                obočí až po péči o pleť. Vše poskytujeme s důrazem na profesionalitu a individuální
                přístup ke každému klientovi.
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
