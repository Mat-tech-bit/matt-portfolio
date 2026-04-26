"use client";

import { Box, Container } from "@mui/material";
import AboutPage from "../about/page";
import PortfolioPage from "../portfolio/page";
import Contact from "../contact/page";
import ProjectsPage from "../projects/page";

const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 8, md: 15 } }}>
      <Box id="about">
        <AboutPage />
      </Box>
      <Box id="portfolio">
        <PortfolioPage />
      </Box>
      <Box id="projects">
        <ProjectsPage />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  );
};

export default HomePage;
