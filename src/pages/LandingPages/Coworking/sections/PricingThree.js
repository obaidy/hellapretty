// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

const categories = [
  {
    title: "Dermatokosmetické služby",
    services: [
      { name: "Mikrojehličkování", price: "od 1490 Kč" },
      { name: "Hydrafacial, dermabraze", price: "od 1490 Kč" },
      { name: "BB Glow", price: "od 1590 Kč" },
      { name: "Rty, Hyaluron", price: "od 5490 Kč" },
      { name: "Konturace obličeje", price: "od 6900 Kč" },
      { name: "Chemický Peeling/Biorepeel", price: "od 1490 Kč" },
      { name: "Inovativní ošetření očního okolí", price: "od 1290 Kč" },
      { name: "Anti Age, odbourání známek stárnutí", price: "od 1490 Kč" },
      {
        name: "Ošetření pleti- čištění, péče dle typu pleti",
        price: "od 1290 Kč",
      },
    ],
  },
  {
    title: "Prodlužování řas",
    services: [
      {
        name: "Prodlužování Řas 1-3d klasické",
        price: "od 1290 Kč",
      },
      {
        name: "Prodlužování Řas s efekty (maskara, foxy..)",
        price: "od 1390 Kč",
      },
      { name: "Pouze zahuštění konečků na konci", price: "od 690 Kč" },
    ],
  },
  {
    title: "Permanentní make-up",
    services: [
      { name: "Permanentní makeup obočí", price: "od 3990 Kč" },
      { name: "Permanentní make-up rtů", price: "od 3990 Kč" },
      { name: "Permanentní make-up očních linek", price: "od 3990 Kč" },
    ],
  },
  {
    title: "Přirozená úprava řas a obočí",
    services: [
      { name: "Natočení řas/trvalá s výživou", price: "790 Kč" },
      { name: "Laminace obočí", price: "790 Kč" },
      { name: "Barvení obočí nebo řas s úpravou", price: "od 300 Kč" },
      { name: "Úpravy voskem ke službě", price: "od 100 Kč" },
      { name: "Maska a péče na řasy a obočí", price: " 100 Kč" },
    ],
  },
  {
    title: "Pedikúra",
    services: [
      { name: "Přístrojová, suchá, mokrá, kombinovaná", price: "od 500 Kč" },
      { name: "S gel lakem", price: "+ 250 Kč" },
      { name: "Dekorace, Malování", price: "od 50 Kč" },
      { name: "Masáž ke službě", price: "od 150 Kč" },
    ],
  },
];

function PricingThree() {
  return (
    <MKBox id="prices" component="section" py={{ xs: 12, lg: 18 }}>
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
            Ceník služeb
          </MKTypography>
        </Grid>
        {categories.map((category) => (
          <MKBox key={category.title} mb={5}>
            <MKTypography variant="h3" textAlign="center" mb={3}>
              {category.title}
            </MKTypography>
            <Grid container spacing={2}>
              {category.services.map((service) => (
                <Grid item xs={12} sm={6} md={4} key={service.name}>
                  <Card sx={{ height: "100%", p: 3 }}>
                    <MKBox textAlign="center">
                      <MKTypography variant="h5" mb={1}>
                        {service.name}
                      </MKTypography>
                      <MKTypography variant="h4" color="info" fontWeight="bold">
                        {service.price}
                      </MKTypography>
                    </MKBox>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </MKBox>
        ))}
      </Container>
    </MKBox>
  );
}
export default PricingThree;
