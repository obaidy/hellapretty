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
// import microneedling111 from "./microneedling111.png";
import peeling from "./peeling.png";
import rty from "./rty.png";
// import Lashes from "./lashes.png";
import plet from "./plet.png";
import Ras from "./ras.jpeg";
import hydra from "./hydra.png";
// import StoryViewer from "./StoryViewer";
// import bbglow from "./bbglow.jpg";

// Material Kit 2 PRO React components
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

const services = [
  {
    image: microneedling1,
    title: "Micro-Needling",
    description:
      "Mikrojehličková mezoterapiie, známá také jako microneedling je inovativní metoda navržena tak, aby vaší pleti poskytla optimální zlepšení struktury a celkového stavu obličeje, ale také se může využít na krk, dekolt či ruce..",
    route: "https://calendly.com/hellapretty/microneedling",
  },
  {
    image: rty,
    title: "Zvětšení rtů",
    description:
      "Řešíme zvětšení, hydrataci a zlepšení tvaru rtů – ať už vás trápí asymetrie, spadené koutky nebo vrásky kolem rtů, máme pro vás řešení! Požíváme pouze kvalitní certifikované materiály, které jsou šetrné k vašemu tělu. Aplikace je bezpečná a výsledek vydrží přibližně jeden rok.",
    route: "https://calendly.com/hellapretty/micro-needling-clone",
  },
  {
    image: peeling,
    title: "Chemický Peeling",
    description:
      "Za pomoci špičkových vědeckých postupů Vám přinášíme tuto ověřenou obnovu pleti. Mixy kyselin jsou jako elixír krásy, který účinně odstraňuje odumřelé buňky, jizvy po akné, vrásky a po několika sezení vytváří novou svrchní vrstvu pokožky.",
    route: "https://calendly.com/hellapretty/micro-needling-clone-1",
  },
  {
    image: Ras,
    title: "Prodlužování Řas",
    description:
      "Dodejte svým řasám intenzitu a eleganci pomocí našich šikovných odborníků, kteří vám zajistí šetrné a precizní prodlužování řas. Aplikujeme vždy nový a čistý set délky a objemu podle Vašich představ.",
    route: "https://calendly.com/hellapretty/micro-needling-clone-2",
  },
  {
    image: hydra,
    title: "Hydrafacial - dermabraze",
    description:
      "Kombinace jemné exfoliace, hloubkového čištění pórů, hydratace pomocí aktivních sér v jednom ošetření. Pleť je po dermohydrabrazi okamžitě svěží, hladká a rozjasněná bez podráždění nebo nutnosti rekonvalescence. Vyzkoušejte tento Hollywoodský trend.",
    route: "https://calendly.com/hellapretty/micro-needling-clone-3",
  },
  {
    image: plet,
    title: "Ošetření Pleti",
    description:
      "Užijte si individuální péči přizpůsobenou právě vaší pleti! Vaši pleť očistíme a v případě tvrdší kůže nebo šupinek ji jemně změkčíme, otevřeme póry a poté aplikujeme koncentrát/sérum, masku, tonik a finish krém.",
    route: "https://calendly.com/hellapretty/micro-needling-clone-4",
  },
];

function Places() {
  return (
    <MKBox id="services" component="section" py={3}>
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
            Prozkoumejte naše profesionální služby.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {services.map(({ image, title, description, route }) => (
            <Grid item xs={12} md={6} lg={4} key={title}>
              <MKBox mt={3} height="100%" display="flex">
                <SimpleBlogCard
                  image={image}
                  title={title}
                  description={description}
                  action={{
                    type: "external",
                    route: route,
                    label: "Rezervujte zde",
                  }}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
