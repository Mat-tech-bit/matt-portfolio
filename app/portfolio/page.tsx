"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";

const PortfolioPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      {isMobile ? (
        /* ================= MOBILE MODE ================= */

        <Box>
          <Box sx={{ margin: 4 }}>
            {/* Overview */}
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
              Overview
            </Typography>

            <Typography>
              I am a frontend-focused web developer with over two years of
              hands-on experience building responsive and user-friendly web
              applications. I have worked on multiple projects using HTML, CSS,
              and JavaScript, and I specialize in modern frontend technologies
              including React, Next.js, TypeScript, and Material UI to create
              clean, scalable interfaces.
            </Typography>

            {/* Services */}
            <Box sx={{ mt: 10 }}>
              <Card sx={{ mb: 3 }}>
                <CardMedia
                  component="img"
                  src="/crystal.jpg"
                  alt="Software Development"
                  height="250"
                  sx={{ width: "100%" }}
                />

                <CardContent>
                  <Typography fontWeight="bold" variant="h5">
                    Software Development
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ mb: 3 }}>
                <CardMedia
                  component="img"
                  src="/secondcrystal.webp"
                  alt="SEO"
                  height="250"
                  sx={{ width: "100%" }}
                />

                <CardContent>
                  <Typography fontWeight="bold" variant="h5">
                    Search Engine Optimization
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ mb: 3 }}>
                <CardMedia
                  component="img"
                  src="/fourthcrystal.jpg"
                  alt="Content Creation"
                  height="250"
                  sx={{ width: "100%" }}
                />

                <CardContent>
                  <Typography fontWeight="bold" variant="h5">
                    Content Creation
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Work Experience */}
            <Box sx={{ pt: 10 }}>
              <Typography
                sx={{ mb: 4 }}
                variant="h4"
                fontWeight="bold"
              >
                WORK EXPERIENCE
              </Typography>

              <Typography variant="h6">
                REACT.JS DEVELOPER
              </Typography>

              <Typography sx={{ mb: 4 }}>
                I am a React.js developer with over 2 years of experience
                building interactive, responsive, and user-friendly web
                applications.
              </Typography>

              <Typography variant="h6">
                NEXT.JS DEVELOPER
              </Typography>

              <Typography sx={{ mb: 4 }}>
                As a Next.js developer, I create server-side rendered and
                statically generated applications optimized for performance.
              </Typography>

              <Typography variant="h6">
                NEXT.JS + TYPESCRIPT + MATERIAL UI
              </Typography>

              <Typography sx={{ mb: 4 }}>
                I build scalable and visually consistent web applications using
                modern UI systems and type-safe architecture.
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        /* ================= DESKTOP MODE ================= */

        <Box sx={{ px: 10, py: 8 }}>
          {/* Overview Section */}
          <Grid container spacing={6} alignItems="center">
            {/* LEFT TEXT */}
            <Grid size ={{xs: 12, md: 6}}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ mb: 3 }}
              >
                Overview
              </Typography>

              <Typography sx={{ fontSize: "1.1rem" }}>
                I am a frontend-focused web developer with over two years of
                hands-on experience building responsive and user-friendly web
                applications. I specialize in React, Next.js, TypeScript, and
                Material UI to create scalable, high-performance applications
                that deliver excellent user experiences.
              </Typography>
            </Grid>

            {/* RIGHT SERVICES GRID */}
         
              <Grid  container spacing={3}>
                {/* Card 1 */}
                <Box sx={{display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", gap: 4}}>
                <Grid >
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      src="/crystal.jpg"
                      alt="Software Development"
                    />

                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                      >
                        Software Development
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Card 2 */}
                <Grid >
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      src="/secondcrystal.webp"
                      alt="SEO"
                    />

                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                      >
                        Search Engine Optimization
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Card 3 */}
                <Grid >
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      src="/fourthcrystal.jpg"
                      alt="Content Creation"
                    />

                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                      >
                        Content Creation
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                </Box>
              </Grid>
              
            </Grid>
         

          {/* Work Experience Section */}
          <Box sx={{ mt: 12 }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ mb: 6 }}
            >
              Work Experience
            </Typography>

            <Grid container spacing={6}>
              {/* React */}
              <Grid >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  React.js Developer
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Built responsive web applications using reusable components,
                  efficient state management, and modern frontend practices.
                </Typography>
              </Grid>

              {/* Next */}
              <Grid  >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  Next.js Developer
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Developed high-performance SSR and static web applications
                  optimized for SEO and scalability.
                </Typography>
              </Grid>

              {/* Stack */}
              <Grid  >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  Next.js + TypeScript + Material UI
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Delivered scalable UI systems using type-safe architecture
                  and reusable design components.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PortfolioPage;