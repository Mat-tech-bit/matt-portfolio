"use client";

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
} from "@mui/material";
import { projects } from "../data";

export default function ProjectsPage() {
  return (
    <Box sx={{ padding: { xs: 3, md: 8 } }}>
      {/* HEADER */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        My Projects
      </Typography>

      <Typography sx={{ maxWidth: 700, mb: 5 }}>
        Here are some of the projects I have worked on. Each project reflects my
        ability to build scalable, responsive, and user-focused applications
        using modern frontend technologies.
      </Typography>

      {/* PROJECT GRID */}
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid size={{xs: 12, sm: 6, md: 4}} key={project.title + index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
            >
              {/* IMAGE */}
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />

              {/* CONTENT */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>

                <Typography sx={{ mt: 1, mb: 2 }}>
                  {project.description}
                </Typography>

                {/* TECH STACK */}
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {project.tech.map((techItem) => (
                    <Chip key={techItem} label={techItem} />
                  ))}
                </Stack>
              </CardContent>

              {/* ACTIONS */}
              <Box sx={{ display: "flex", gap: 2, p: 2 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  href={project.github}
                  target="_blank"
                >
                  GitHub
                </Button>

                <Button
                  variant="contained"
                  fullWidth
                  href={project.live}
                  target="_blank"
                >
                  Live Demo
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}