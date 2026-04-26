"use client";
import React from "react";
import {
  Box,
  Card,
  Typography,
  Container,
  Grid,
  Stack,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Code2, Search, Palette } from "lucide-react";

const services = [
  {
    title: "Software Development",
    description: "Building scalable, high-performance web applications using modern frameworks and best practices.",
    icon: <Code2 size={32} />,
    color: "#3b82f6",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user interfaces with a focus on user experience and accessibility.",
    icon: <Palette size={32} />,
    color: "#10b981",
  },
  {
    title: "SEO Optimization",
    description: "Optimizing web applications for search engines to increase visibility and drive organic traffic.",
    icon: <Search size={32} />,
    color: "#f59e0b",
  },
];

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechNova Solutions",
    period: "2023 - Present",
    description: "Leading the frontend team in building a next-generation healthcare platform using Next.js and TypeScript.",
  },
  {
    role: "React Developer",
    company: "Digital Pulsar",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client projects, focusing on responsive design and state management.",
  },
];

const PortfolioPage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }} id="portfolio">
      {/* Services Section */}
      <Box sx={{ mb: { xs: 10, md: 15 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            What I <span style={{ color: "#3b82f6" }}>Do</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              mb: 8,
              maxWidth: "600px",
              mx: "auto",
              fontWeight: 400,
            }}
          >
            I provide a wide range of services to help businesses grow and 
            succeed in the digital world.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      bgcolor: service.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      bgcolor: isDark ? `${service.color}20` : `${service.color}10`,
                      color: service.color,
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 8,
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Work <span style={{ color: "#3b82f6" }}>Experience</span>
          </Typography>
        </motion.div>

        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <Box
              component={motion.div}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card 
                sx={{ 
                  p: { xs: 4, md: 5 },
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                }}
              >
                <Grid container spacing={3} alignItems="center">
                  <Grid size={{ xs: 12, md: 3 }}>
                    <Typography variant="h6" fontWeight={800} color="primary">
                      {exp.period}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>
                      {exp.company}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 9 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {exp.role}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {exp.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default PortfolioPage;