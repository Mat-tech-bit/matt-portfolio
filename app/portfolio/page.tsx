"use client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const PortfolioPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      {isMobile ? (
        <Box>
          <Box sx={{ margin: 4 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
              Overview
            </Typography>
            <Typography>
              I am a frontend-focused web developer with over two years of
              hands-on experience building responsive and user-friendly web
              applications. I have worked on multiple projects using HTML, CSS,
              and JavaScript, and I specialize in modern frontend technologies
              including React, Next.js, TypeScript, and Material UI to create
              clean, scalable interfaces. Alongside my frontend expertise, I am
              currently expanding into backend development, learning Node.js,
              Express.js, and MongoDB, with the goal of becoming a well-rounded
              full-stack developer. I am passionate about writing maintainable
              code, solving real-world problems, and continuously improving my
              skills through practical projects.
            </Typography>

            <Box sx={{ mt: 10,}}>
              <Card sx={{mb: 3}}>
                <CardMedia
                  component="img"
                  src="\crystal.jpg"
                  alt="image not found"
                  height="250"
                  sx={{ width: "100" }}
                />
                <CardContent> <Typography fontWeight="bold" variant="h4"> Software Development</Typography></CardContent>
              </Card>

              
              <Card  sx={{mb: 3}}>
                <CardMedia
                  component="img"
                  src="/second crystal.webp"
                  alt="image not found"
                  height="250"
                  sx={{ width: "100" }}
                />
                <CardContent> <Typography fontWeight="bold" variant="h4"> Search Engine Optimization</Typography></CardContent>
              </Card>

              <Card  sx={{mb: 3}}>
                <CardMedia
                  component="img"
                  src="/fourth crystal.jpg"
                  alt="image not found"
                  height="250"
                  sx={{ width: "100" }}
                />
                <CardContent> <Typography fontWeight="bold" variant="h4"> Content Creation</Typography></CardContent>
              </Card>
            </Box>

          {/* Work experience */}
            <Box sx={{pt: 10}}> 
        <Typography sx={{mb: 4}} variant="h4" fontWeight="bold">WORK EXPERIENCE</Typography>
        <Box> 
        <Typography  variant="h6">REACT.JS DEVELOPER</Typography>
        <Typography sx={{mb: 4}} >I am a React.js developer with over 2 years of experience building interactive, responsive, and user-friendly web applications. I focus on creating clean, reusable components, managing state effectively, and implementing dynamic user interfaces that provide seamless user experiences. My projects emphasize performance, maintainability, and modern frontend best practices.</Typography>
        </Box>

        
        <Box> 
        <Typography variant="h6">NEXT.JS DEVELOPER</Typography>
        <Typography sx={{mb: 4}} >As a Next.js developer, I have experience creating server-side rendered (SSR) and statically generated web applications for faster performance and SEO optimization. I work with routing, API integration, and dynamic content rendering to deliver modern, scalable, and maintainable web applications that provide smooth user experiences.</Typography>
        </Box>

        <Box> 
        <Typography variant="h6">NEXT.JS + TYPESCRIPT + MATERIAL UI DEVELOPER</Typography>
        <Typography sx={{mb: 4}} >Specializing in Next.js with TypeScript and Material UI, I develop type-safe, scalable, and visually appealing web applications. My work focuses on building modular components, reusable UI libraries, and responsive designs while leveraging TypeScript’s type safety and Material UI’s design system to ensure consistency and maintainability across projects. I have delivered multiple projects that combine robust functionality with modern, professional user interfaces.</Typography>
        </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box> </Box>
      )}
    </Box>
  );
};

export default PortfolioPage;
