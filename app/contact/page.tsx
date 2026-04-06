"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { useState, ChangeEvent, FormEvent } from "react";

// ✅ Define proper type
type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Proper typing (no any)
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Proper typing
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box
      sx={{
        padding: { xs: 3, md: 8 },
        backgroundColor: "#f9f9f9",
      }}
    >
      
      <Typography sx={{color: "black"}} variant="h4" fontWeight="bold" gutterBottom>
        Contact Me
      </Typography>

      <Typography sx={{ maxWidth: 600, mb: 4, color: "black" }}>
        I’m open to internship and full-time software engineering opportunities.
        Feel free to reach out if you’d like to collaborate or discuss how I can
        contribute to your team.
      </Typography>

      <Grid container spacing={4}>
        {/* LEFT SIDE */}
        <Grid size={{xs: 12, md: 6, lg: 4}}>
          <Paper sx={{ padding: 4 }}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Email: your.email@gmail.com
            </Typography>

            <Typography sx={{ mt: 1 }}>
              GitHub: https://github.com/yourusername
            </Typography>

            <Typography sx={{ mt: 1 }}>
              LinkedIn: https://linkedin.com/in/yourprofile
            </Typography>

            <Typography sx={{ mt: 3 }}>
              Location: Lagos, Nigeria
            </Typography>
          </Paper>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid size={{xs: 12, md: 6, lg: 4}}>
          <Paper sx={{ padding: 4 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, py: 1.5 }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}