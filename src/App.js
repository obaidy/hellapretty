/**
=========================================================

*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import theme from "assets/theme";
// import Presentation from "layouts/pages/presentation";
import Cowrking from "pages/LandingPages/Coworking/index.js";
import "./FloatingButton.css";
import CoworkingPage from "pages/LandingPages/Coworking";
import GDPRConsentDialog from "./pages/LandingPages/Coworking/components/GDPRConsentDialog";
import AboutUsPage from "layouts/pages/company/about-us";

// import routes from "routes";

export default function App() {
  const location = useLocation();
  const { pathname, hash } = location;

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname, hash]);

  // eslint-disable-next-line no-unused-vars
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Cowrking />} />
          <Route path="/" element={<CoworkingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/pages/company/about-us" element={<AboutUsPage />} />
        </Routes>
        <GDPRConsentDialog />
      </ThemeProvider>
      <a
        href="https://calendly.com/hellapretty/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-reserve-btn"
      >
        Reserve
        <br />
        Now
      </a>
    </div>
  );
}
