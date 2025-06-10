// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import CoworkingPage from "layouts/pages/landing-pages/coworking";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "coworking",
            route: "/",
            component: <CoworkingPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
