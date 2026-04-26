"use client";
import React from "react";
import { Box, Container, Grid, Typography, Stack, IconButton, Divider, useTheme } from "@mui/material";
import { Globe, Users, Mail, X, MessageSquare } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.default",
        pt: { xs: 8, md: 10 },
        pb: 6,
        borderTop: "1px solid",
        borderColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4 }} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography 
              variant="h5" 
              fontWeight={800} 
              sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}
            >
              MATTHEW<span style={{ color: "#3b82f6" }}>.</span>
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                mb: 4, 
                maxWidth: { xs: "none", md: "300px" }, 
                textAlign: { xs: "center", md: "left" } 
              }}
            >
              Building the future of the web with passion and precision. Let's create something extraordinary together.
            </Typography>
            <Stack 
              direction="row" 
              spacing={1.5} 
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {[Globe, Users, X, MessageSquare].map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    color: "text.secondary",
                    bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)",
                    border: "1px solid",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                    "&:hover": { 
                      color: "primary.main", 
                      bgcolor: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)",
                      transform: "translateY(-3px)",
                    },
                    transition: "0.3s",
                  }}
                >
                  <Icon size={18} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3 }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ "&:hover": { color: "primary.main" }, transition: "0.2s" }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3 }}>
              Services
            </Typography>
            <Stack spacing={2}>
              {["Web Development", "UI/UX Design", "SEO Optimization", "Mobile Solutions"].map(
                (item) => (
                  <Typography key={item} variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                )
              )}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3 }}>
              Contact Info
            </Typography>
            <Stack spacing={2.5}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Mail size={18} color="#3b82f6" />
                <Typography variant="body2" color="text.secondary">
                  matthew.akinyemi@email.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Globe size={18} color="#3b82f6" />
                <Typography variant="body2" color="text.secondary">
                  www.matthewdak.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)", mb: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
            © {new Date().getFullYear()} Matthew Akinyemi. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with Next.js & MUI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
