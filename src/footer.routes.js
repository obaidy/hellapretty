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
    route: "/",
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
      items: [
        { name: "Rezervace Zde", href: "https://www.creative-tim.com/presentation" },
        // { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        // { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        // { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "Cenik",
      items: [
        { name: "naš ceník", href: "https://iradesign.io/" },
        // { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        // { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "Služby",
      items: [
        { name: "naše služby", href: "https://www.creative-tim.com/contact-us" },
        // { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        // { name: "custom development", href: "https://services.creative-tim.com/" },
        // { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
    //     { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
    //     { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Hella Pretty by{" "}
      <MKTypography
        // component="a"
        // href="https://www.creative-tim.com"
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
