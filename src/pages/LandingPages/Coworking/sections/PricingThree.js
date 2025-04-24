// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function PricingThree() {
  return (
    <MKBox component="section" py={{ xs: 12, lg: 18 }}>
      <Container>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="center"
          sx={{ mx: "auto", mb: 8, textAlign: "center" }}
        >
          <MKTypography variant="h2" mb={1}>
            Ceník služeb <br /> <br />
          </MKTypography>
        </Grid>
        <h3 style={{ textAlign: "center" }}>Dermatokosmetické služby:</h3> <br />
        <Grid container item xs={12}>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Mikrojehličkování
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 1490 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Hydrafacial, dermabraze
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 1290 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    BB Glow
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 1590 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Rty, Hyaluron
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 5490 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Permanentní makeup obočí
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 3990 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Permanentní make-up rtů
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 3990 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Permanentní make-up očních linek
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 3990 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Chemický Peeling/Biorepeel
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 1490 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Inovativní ošetření očního okolí
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 1290 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Anti Age, odbourání známek stárnutí
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 1490 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Ošetření pleti- čištění, péče dle typu pleti
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 1290 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <br /> <h3 style={{ textAlign: "center" }}>Prodlužování řas:</h3> <br />
        <Grid container item xs={12}>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Prodlužování Řas 3-5d led metoda bez lepidla
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 1390 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Prodlužování Řas 1-3d s efekty či klasické
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 1290 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Pouze zahuštění konečků na konci
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 690 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <br /> <h3 style={{ textAlign: "center" }}>Přirozená úprava řas a obočí:</h3> <br />
        <Grid container item xs={12}>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Natočení řas/trvalá s výživou
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 690 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Laminace obočí
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 690 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Barvení obočí nebo řas s úpravou
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 200 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Barvení obočí Hennou
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>od 350 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Trhání obočí voskem ke službě
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>+ 50 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ width: "50%" }}>
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h4" mb={1}>
                    Maska a péče na řasy a obočí
                  </MKTypography>
                  <MKTypography variant="h4">
                    <MKBox component="small"></MKBox>+ 100 Kč
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PricingThree;
