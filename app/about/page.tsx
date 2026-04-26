"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  useTheme,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Download, Globe, Users, Mail } from "lucide-react";

const AboutPage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container maxWidth="lg" id="about">
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        sx={{
          minHeight: { xs: "auto", md: "80vh" },
          display: "flex",
          alignItems: "center",
          py: { xs: 10, md: 15 },
        }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Text Content */}
          <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Software Engineer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.8rem", sm: "3.5rem", md: "5rem" },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 3,
                  textAlign: { xs: "center", md: "left" },
                  background: isDark 
                    ? "linear-gradient(135deg, #fff 0%, #3b82f6 100%)"
                    : "linear-gradient(135deg, #0f172a 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Matthew <br /> Akinyemi
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  mb: 5,
                  maxWidth: "600px",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Building high-performance, visually stunning web applications with 
                modern frontend technologies. Specializing in React, Next.js, and 
                scalable UI architectures.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={2} 
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight size={20} />}
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: "1.1rem",
                    boxShadow: isDark ? "0 10px 20px rgba(59, 130, 246, 0.3)" : "none",
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download size={20} />}
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: "1.1rem",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                    color: "text.primary",
                    "&:hover": {
                      borderColor: "primary.main",
                      bgcolor: isDark ? "rgba(59, 130, 246, 0.05)" : "rgba(59, 130, 246, 0.02)",
                    },
                  }}
                >
                  Download CV
                </Button>
              </Stack>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack 
                direction="row" 
                spacing={3} 
                sx={{ mt: 8 }} 
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                {[
                  { icon: <Globe size={24} />, link: "#" },
                  { icon: <Users size={24} />, link: "#" },
                  { icon: <Mail size={24} />, link: "#" },
                ].map((social, i) => (
                  <IconButton
                    key={i}
                    href={social.link}
                    sx={{
                      color: "text.secondary",
                      bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)",
                      border: "1px solid",
                      borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                      transition: "0.3s",
                      "&:hover": { 
                        color: "primary.main", 
                        transform: "translateY(-5px)",
                        bgcolor: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Image / Visual Element */}
          <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: "relative" }}
            >
              {/* Background Shapes */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                  background: isDark 
                    ? "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                  zIndex: -1,
                }}
              />
              
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "240px", sm: "300px", md: "400px" },
                  height: { xs: "300px", sm: "380px", md: "500px" },
                  margin: "0 auto",
                  borderRadius: "30px",
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
                  boxShadow: isDark 
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  component="img"
                  src="/portfolioPic1.jpg"
                  alt="Matthew"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Stats Overlay */}
              <Box
                component={motion.div}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                sx={{
                  position: "absolute",
                  bottom: { xs: 20, md: 40 },
                  right: { xs: 0, sm: 20, md: -30 },
                  p: 3,
                  bgcolor: isDark ? "rgba(30, 30, 30, 0.8)" : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
                  display: { xs: "none", sm: "block" },
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="h4" fontWeight={800} color="primary">
                  2+
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  Years of <br /> Experience
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPage;
