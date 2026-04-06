
import { Box } from "@mui/material";
import AboutPage from "../about/page";
import PortfolioPage from "../portfolio/page";
import Contact from "../contact/page";
import ProjectsPage from "../projects/page";

const HomePage = () => {
  return (
   <Box>
<AboutPage/>
<PortfolioPage/>
<ProjectsPage/>
<Contact/>
   </Box>
  );
};

export default HomePage;
