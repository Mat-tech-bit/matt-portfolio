"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Container,
  Stack,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, Users, MessageSquare } from "lucide-react";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: "Email", value: "matthew.akinyemi@email.com" },
    { icon: <Phone size={24} />, label: "Phone", value: "+234 812 345 6789" },
    { icon: <MapPin size={24} />, label: "Location", value: "Lagos, Nigeria" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }}>
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
          Get In <span style={{ color: "#3b82f6" }}>Touch</span>
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
          Have a project in mind or just want to say hi? I'd love to hear from 
          you. Feel free to reach out using the form or social links below.
        </Typography>
      </motion.div>

      <Grid container spacing={6}>
        {/* Contact Info */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={4}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box sx={{ display: "flex", gap: 2.5, alignItems: "center" }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      bgcolor: "rgba(59, 130, 246, 0.1)",
                      color: "primary.main",
                      display: "flex",
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      {info.label}
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>
                      {info.value}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}

            <Box sx={{ pt: 4 }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Follow Me
              </Typography>
              <Stack direction="row" spacing={2}>
                {[Globe, Users, MessageSquare].map((Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Icon size={20} />
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>

        {/* Contact Form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper sx={{ p: { xs: 4, md: 6 } }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<Send size={20} />}
                      sx={{ py: 2, fontSize: "1.1rem" }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}