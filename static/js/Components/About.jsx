import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { TrendingUp, Layers, School, MenuBook, CheckCircleOutline } from "@mui/icons-material";
import AnimatedEditorSVG from "./AnimatedEditorSVG";

const About = () => {
  const skills = [
    "Databricks & Delta Lake",
    "Azure Data Factory (ADF)",
    "AWS Glue & Redshift",
    "Apache Spark & PySpark",
    "Real-Time Kafka & Event Hubs",
    "Enterprise Lakehouse Architecture",
    "Data Governance & Schema Versioning",
    "Python, Java & Scala",
    "SQL Optimization & Tuning",
    "CI/CD (GitLab, GitHub, Docker)",
  ];

  const stats = [
    { number: "5+", label: "Years of Experience", icon: <TrendingUp /> },
    { number: "2+", label: "Cloud Ecosystems (AWS & Azure)", icon: <Layers /> },
    { number: "4", label: "Certifications & Credentials", icon: <School /> },
    { number: "1", label: "Peer-Reviewed Publication", icon: <MenuBook /> },
  ];

  const strengths = [
    {
      title: "Analytical Problem-Solving",
      desc: "Methodical root-cause investigation across distributed workloads, complex execution logs, and shifting upstream schemas.",
    },
    {
      title: "Engineering Leadership",
      desc: "Mentoring engineers on ETL design patterns, SQL query performance, and resilient data quality frameworks.",
    },
    {
      title: "Collaborative Ownership",
      desc: "Partnering across Product, QA, and platform owners to codify enforceable data contracts and delivery SLAs.",
    },
    {
      title: "Cross-Cloud Adaptability",
      desc: "Proven execution across AWS and Azure environments, choosing the optimal compute and storage primitives for each workload.",
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: "var(--bg-primary)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 }, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-display)",
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                mb: 2,
                color: "var(--text-primary)",
                textAlign: "center",
              }}
            >
              About
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "var(--text-secondary)",
                maxWidth: "760px",
                mx: "auto",
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              With 5+ years of hands-on data engineering experience, I design, build, and operate resilient cloud data platforms and distributed ETL/ELT pipelines. My approach centers on architecture that delivers dependable results: strictly governed schemas, automated observability, and high compute efficiency.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Image / Graphic */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Background Pattern */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                    borderRadius: "var(--border-radius)",
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                />

                {/* Animated Editor SVG */}
                <Box
                  sx={{
                    width: { xs: 280, sm: 340, md: 400 },
                    height: { xs: 280, sm: 340, md: 400 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                    mx: "auto",
                  }}
                >
                  <AnimatedEditorSVG size={360} />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column - Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "var(--font-display)",
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontWeight: 600,
                  mb: 3,
                  color: "var(--text-primary)",
                }}
              >
                Cloud Data Engineering · Lakehouse Architectures · Streaming Systems
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  color: "var(--text-secondary)",
                  mb: 3,
                  lineHeight: 1.7,
                  textAlign: "left",
                }}
              >
                I specialize in modern lakehouse architectures powered by Azure Databricks, Delta Lake, and AWS ecosystems. From managing schema evolution and time-travel versioning to engineering sub-minute streaming pipelines with Kafka and Event Hubs, I ensure data arrives on time and intact.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  color: "var(--text-secondary)",
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: "left",
                }}
              >
                Based in Frisco / Dallas, Texas, I work closely with product teams, upstream system owners, and analytics stakeholders to establish clear data contracts and SLAs. Beyond writing optimized pipelines in Python, Java, Scala, and SQL, I place high value on team mentorship, reproducible deployments, and automated testing frameworks.
              </Typography>

              {/* Core Competencies */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: "var(--text-primary)",
                    textAlign: "left",
                  }}
                >
                  Core Technical Focus
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Chip
                        label={skill}
                        sx={{
                          backgroundColor: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          border: "1px solid var(--border)",
                          fontWeight: 500,
                          "&:hover": {
                            backgroundColor: "var(--primary)",
                            color: "white",
                          },
                          transition: "var(--transition)",
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Strengths Section */}
        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "var(--font-display)",
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 700,
              mb: 4,
              color: "var(--text-primary)",
              textAlign: "center",
            }}
          >
            Guiding Strengths & Engineering Ethos
          </Typography>
          <Grid container spacing={3}>
            {strengths.map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{ height: "100%" }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid var(--border)",
                      background: "var(--bg-secondary)",
                      transition: "var(--transition)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "var(--shadow-lg)",
                        borderColor: "var(--primary)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5, color: "var(--primary)" }}>
                      <CheckCircleOutline fontSize="small" />
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "var(--text-primary)" }}>
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: "var(--border-radius)",
                      border: "1px solid var(--border)",
                      transition: "var(--transition)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "var(--shadow-lg)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: "var(--primary)",
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
