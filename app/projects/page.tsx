"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Container,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "../data";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }} id="projects">
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
          Featured <span style={{ color: "#3b82f6" }}>Projects</span>
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
          A selection of my best work, ranging from complex web applications 
          to useful developer tools.
        </Typography>
      </motion.div>

      {/* Filter Buttons */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 6, flexWrap: "wrap", gap: 2 }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "contained" : "outlined"}
            onClick={() => setFilter(cat)}
            sx={{
              borderRadius: "20px",
              px: { xs: 2, sm: 3 },
              py: 1,
              borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
              "&:hover": { borderColor: "primary.main" },
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
            }}
          >
            {cat}
          </Button>
        ))}
      </Stack>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                    border: "1px solid",
                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: isDark 
                        ? "0 20px 40px rgba(0,0,0,0.4)"
                        : "0 20px 40px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={project.image}
                      alt={project.title}
                      sx={{ 
                        transition: "0.5s", 
                        "&:hover": { scale: 1.1 },
                        filter: isDark ? "brightness(0.9)" : "none"
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          bgcolor: "rgba(0, 0, 0, 0.6)",
                          backdropFilter: "blur(8px)",
                          color: "white",
                          fontWeight: 600,
                          fontSize: "0.7rem",
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom sx={{ fontSize: "1.25rem" }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6, minHeight: "3.2em" }}
                    >
                      {project.description}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ 
                            fontSize: "0.65rem", 
                            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                            color: "text.secondary"
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>

                  <Box sx={{ p: 3, pt: 0, display: "flex", gap: 2 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Code2 size={18} />}
                      href={project.github}
                      target="_blank"
                      sx={{ 
                        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                        color: "text.primary"
                      }}
                    >
                      Code
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<ExternalLink size={18} />}
                      href={project.live}
                      target="_blank"
                    >
                      Live
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Container>
  );
};

export default ProjectsPage;