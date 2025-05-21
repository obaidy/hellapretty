/*
=========================================================

*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

import microneedling1 from "./microneedling1.png";
import microneedling from "./microneedling.png";
import Lashes from "./lashes.png";
import plet from "./plet.png";
// import StoryViewer from "./StoryViewer";
// import bbglow from "./bbglow.jpg";

// Material Kit 2 PRO React components
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

function Places() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        {/* <StoryViewer /> */}
        <Grid
          container
          item
          flexDirection="column"
          alignItems="center"
          xs={12}
          lg={6}
          sx={{ textAlign: "center", mx: "auto" }}
        >
          <MKTypography variant="h2" mb={1}>
            Prozkoumejte naše profesionální služby.{" "}
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image={microneedling}
                title="Micro-Needling"
                description="Mikrojehličková mezoterapiie, známá také jako microneedling je inovativní metoda navržena tak, aby vaší pleti poskytla optimální zlepšení struktury a celkového stavu obličeje, ale také se může využít na krk, dekolt či ruce.."
                action={{
                  type: "external",
                  route: "https://calendly.com/hellapretty/microneedling", // Path to your page
                  label: "Rezervujte zde",
                  component: (
                    <a
                      href="https://calendly.com/hellapretty/microneedling"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Book Now
                    </a>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image={microneedling1}
                title="BB Glow"
                description="Tato inovativní metoda účinně sjednotí tón pleti, postupně odstraňuje pigmentové skvrny, tmavé kruhy pod očima, pomáhá k prokrvení, a zároveň hydratuje. 
                
                "
                action={{
                  type: "external",
                  route: "https://calendly.com/hellapretty/micro-needling-clone",
                  label: "Rezervujte zde",
                  component: (
                    <a
                      href="https://calendly.com/hellapretty/micro-needling-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }} // Optional styling
                    >
                      Book Now
                    </a>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image={microneedling1}
                title="Chemický Peeling"
                description="Za pomoci špičkových vědeckých postupů Vám přinášíme tuto ověřenou obnovu pleti. Mixy kyselin jsou jako elixír krásy, který účinně odstraňuje odumřelé buňky, jizvy po akné, vrásky a po několika sezení vytváří novou svrchní vrstvu pokožky."
                action={{
                  type: "external",
                  route: "https://calendly.com/hellapretty/micro-needling-clone-1", // Path to your page
                  label: "Rezervujte zde",
                  component: (
                    <a
                      href="https://calendly.com/hellapretty/micro-needling-clone-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Book Now
                    </a>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image={Lashes}
                title="Prodlužování Řas"
                description="Dodejte svým řasám intenzitu a eleganci pomocí našich šikovných odborníků, kteří vám zajistí šetrné a precizní prodlužování řas. Aplikujeme vždy nový a čistý set délky a objemu podle Vašich představ."
                action={{
                  type: "external",
                  route: "https://calendly.com/hellapretty/micro-needling-clone-2", // Path to your page
                  label: "Rezervujte zde",
                  component: (
                    <a
                      href="https://calendly.com/hellapretty/micro-needling-clone-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Book Now
                    </a>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image={microneedling1}
                title="Anti-Age s Masáží"
                description="Zapomeňte na jehly a chirurgické zákroky! Kůže přirozeně stárne a kolem třicátého roku začínáme vnímat prvotní projevy, jako jsou poklesy, vrásky, vaky pod očima a jemné linky."
                action={{
                  type: "external",
                  route: "https://calendly.com/hellapretty/micro-needling-clone-3", // Path to your page
                  label: "Rezervujte zde",
                  component: (
                    <a
                      href="https://calendly.com/hellapretty/micro-needling-clone-3"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }} // Optional styling
                    >
                      Book Now
                    </a>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <SimpleBlogCard
                image={plet}
                title="Ošetření Pleti"
                description="TUžijte si individuální péči přizpůsobenou právě vaší pleti! Vaši pleť očistíme a v případě tvrdší kůže nebo šupinek ji jemně změkčíme, otevřeme póry a poté aplikujeme koncentrát/sérum, masku, tonik a finish krém."
                action={{
                  type: "external",
                  route: "https://calendly.com/hellapretty/micro-needling-clone-4", // Path to your page
                  label: "Rezervujte zde",
                  component: (
                    <a
                      href="https://calendly.com/hellapretty/micro-needling-clone-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }} // Optional styling
                    >
                      Book Now
                    </a>
                  ),
                }}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
