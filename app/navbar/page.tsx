"use client";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeToggleButton } from "../theme";

const Navbar = () => {
  const navLinks = [
    { label: "HOME", href: "/home" },
    { label: "ABOUT", href: "/about" },
    { label: "PROJECT", href: "/projects" },
    { label: "PORTFOLIO", href: "/portfolio" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ margin: 2 }}>
      {/* logo  */}

      {isMobile ? (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton edge="start" onClick={handleDrawerToggle}>
              {open ?    <CloseIcon /> : <MenuIcon/>}
           
            </IconButton>
          </Box>

          <Drawer anchor="left" open={open} onClose={handleDrawerToggle}   PaperProps={{
    sx: {
      height: "auto",
      maxHeight: "100vh",
      mt: 10,
    },
  }}>
            <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.href}>
                    <Link
                      href={link.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItemText primary={link.label} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box sx={{ display: "flex" }}>
            <Avatar alt="matthew's avatar" src="/portfolioPic1.jpg" />
            <Typography variant="h4" fontWeight="bold">
              MattScript
            </Typography>
          </Box>
          <ThemeToggleButton />
        </Box>
      ) : (
        <Box sx={{ display: "flex", gap: 2, justifyContent: "space-around" }}>
          <Box sx={{display: "flex"}}> 
          <Avatar alt="matthew's avatar" src="/portfolioPic1.jpg" />
          <Typography variant="h4" fontWeight="bold">
            MattScript
          </Typography>
          </Box>

          <Box>
            {navLinks.map((link) => (
                  
              <Button key={link.href}>
                {link.label}
              </Button>
            ))}
                      <ThemeToggleButton />

             </Box>
        </Box>
      )}

      {/* navbar */}
    </Box>
  );
};

export default Navbar;
