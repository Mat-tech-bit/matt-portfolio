"use client";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <Box>
      {isMobile ? (
        <Box>
          {" "}
          <Box sx={{ mx: 4, mt: 6 }}>
            <Typography variant="h4" sx={{}}>
              Hi, i am <span style={{ color: "blue" }}> Matthew Akinyemi </span>
            </Typography>

            <Typography variant="h6">
               I am software Engineer, I develop visually stunning website, user
              interfaces and web applications through carefully crafted code and
              user-centric design
            </Typography>
          </Box>
          <Button
            sx={{ bgcolor: "blue", color: "white", margin: 4 }}
            onClick={() => window.open("https://wa.link/9tkk8l", "_blank")}
          >
            say Hello!
          </Button>
          {/* my image */}
          <Box sx={{ pt: 4, display: "flex", justifyContent: "center" }}>
            <Card>
              <CardMedia
                component="img"
                src="/portfolioPic1.jpg"
                sx={{
                  height: "500px",
                  width: "400px",
                  boxShadow: "inherit",
                  borderRadius: "25px",
                }}
              />
            </Card>
          </Box>
            <Box sx={{ gap: 1, display: "flex", flexDirection: "column", px: 4, pt: 10 }}>
              <Button sx={{ bgcolor: "blue", px: 6 }}>
                <Typography variant="h4" sx={{ color: "white" }}>
                  15 Y.{" "}
                  <Typography sx={{ color: "white" }} textTransform="none">
                    Experience
                  </Typography>
                </Typography>
              </Button>
              <Button  sx={{ bgcolor: "blue", px: 6 }}>
                <Typography variant="h4" sx={{ color: "white" }}>
                  250 +{" "}
                  <Typography textTransform="none" sx={{ color: "white" }}>
                    Projects Completed
                  </Typography>
                </Typography>
              </Button>
              <Button  sx={{ bgcolor: "blue", px: 6 }}>
                <Typography variant="h4" sx={{ color: "white" }}>
                  58<Typography textTransform="none" sx={{ color: "white" }}>Happy Client</Typography>
                </Typography>
              </Button>
            </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", gap: 10, mx: 4, mt: 6 }}>
          <Box>
            <Typography variant="h4" sx={{}}>
              Hi, i am <span style={{ color: "blue" }}> Matthew Akinyemi </span>
            </Typography>

            <Typography variant="h6">
              I am software Engineer, I develop visually stunning website, user
              interfaces and web applications through carefully crafted code and
              user-centric design
            </Typography>
            <Button
              sx={{ bgcolor: "blue", color: "white" }}
              onClick={() => window.open("https://wa.link/9tkk8l", "_blank")}
            >
              say Hello!
            </Button>

            {/* Box of buttons */}
            <Box sx={{ gap: 1, display: "flex", pt: 18 }}>
              <Button sx={{ bgcolor: "blue", px: 6 }}>
                <Typography variant="h4" sx={{ color: "white" }}>
                  15 Y.{" "}
                  <Typography sx={{ color: "white" }} textTransform="none">
                    Experience
                  </Typography>
                </Typography>
              </Button>
              <Button  sx={{ bgcolor: "blue", px: 6 }}>
                <Typography variant="h4" sx={{ color: "white" }}>
                  250 +{" "}
                  <Typography textTransform="none" sx={{ color: "white" }}>
                    Projects Completed
                  </Typography>
                </Typography>
              </Button>
              <Button  sx={{ bgcolor: "blue", px: 6 }}>
                <Typography variant="h4" sx={{ color: "white" }}>
                  58<Typography textTransform="none" sx={{ color: "white" }}>Happy Client</Typography>
                </Typography>
              </Button>
            </Box>
          </Box>

          {/* my image */}
          <Box sx={{ pt: 4, display: "flex", justifyContent: "center" }}>
            <Card>
              <CardMedia
                component="img"
                src="/portfolioPic1.jpg"
                sx={{
                  height: "500px",
                  width: "400px",
                  boxShadow: "inherit",
                  borderRadius: "25px",
                }}
              />
            </Card>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AboutPage;
