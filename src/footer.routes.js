// @mui icons
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Images
import hplogo from "assets/images/hplogo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Hella Pretty",
    image: hplogo,
    route: "/#home",
  },
  socials: [
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/hella_pretty_derma/?igsh=OGh6MnhnZTdkdnlx",
    },
  ],
  menus: [
    {
      name: "Rezervace",
      items: [{ name: "Rezervace Zde", href: "https://calendly.com/hellapretty/" }],
    },
    {
      name: "Cenik",
      items: [{ name: "naš ceník", route: "/#prices" }],
    },
    {
      name: "Služby",
      items: [{ name: "naše služby", route: "/#services" }],
    },
    {
      name: "O nás",
      items: [{ name: "O nás", route: "/pages/company/about-us" }],
    },
  ],

  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Hella Pretty by{" "}
      <MKTypography
        // component="a"
        // href="https://"
        // target="_blank"
        // rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Natalie Redrova
      </MKTypography>
      .
    </MKTypography>
  ),
};
