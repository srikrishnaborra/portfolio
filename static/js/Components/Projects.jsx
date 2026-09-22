import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import {
  Close,
  Storage,
  Speed,
  CloudQueue,
  MenuBook,
} from '@mui/icons-material';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect theme from portfolio7-wrapper
  useEffect(() => {
    const checkTheme = () => {
      const wrapper = document.querySelector('.portfolio7-wrapper');
      if (wrapper) {
        const theme = wrapper.getAttribute('data-theme');
        setIsDark(theme === 'dark');

        // Update CSS variables for Dialog
        const root = document.documentElement;
        if (theme === 'dark') {
          root.style.setProperty('--portfolio7-bg-primary', '#0f172a');
          root.style.setProperty('--portfolio7-bg-secondary', '#1e293b');
          root.style.setProperty('--portfolio7-text-primary', '#f8fafc');
          root.style.setProperty('--portfolio7-text-secondary', '#cbd5e1');
          root.style.setProperty('--portfolio7-text-muted', '#94a3b8');
          root.style.setProperty('--portfolio7-border', '#334155');
        } else {
          root.style.setProperty('--portfolio7-bg-primary', '#fff');
          root.style.setProperty('--portfolio7-bg-secondary', '#f8fafc');
          root.style.setProperty('--portfolio7-text-primary', '#0f172a');
          root.style.setProperty('--portfolio7-text-secondary', '#475569');
          root.style.setProperty('--portfolio7-text-muted', '#64748b');
          root.style.setProperty('--portfolio7-border', '#e2e8f0');
        }
      }
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    const wrapper = document.querySelector('.portfolio7-wrapper');
    if (wrapper) {
      observer.observe(wrapper, { attributes: true, attributeFilter: ['data-theme'] });
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Healthcare Medallion Lakehouse',
      subtitle: 'Azure Databricks, Delta Lake & ADF',
      description:
        'Enterprise multi-hop medallion lakehouse architecture on Azure Databricks with Delta Lake, automated schema evolution, and SLA enforcement.',
      fullDescription: `Architected and deployed enterprise-scale ETL/ELT pipelines using Azure Data Factory (ADF) and Azure Databricks. Implemented a multi-hop Medallion Architecture (Bronze, Silver, Gold) with Delta Lake to guarantee data reliability, auditability, and regulatory governance across healthcare business operations. Designed schema enforcement and evolution routines, time-travel audit trails, and automated testing with Katalon.`,
      technologies: ['Azure Databricks', 'Delta Lake', 'Azure Data Factory', 'PySpark', 'ADLS Gen2', 'Azure SQL', 'GitLab'],
      icon: <Storage />,
      color: '#0284c7',
      gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
      features: [
        'Multi-hop Medallion Lakehouse (Bronze, Silver, Gold)',
        'Delta Lake schema enforcement and time-travel versioning',
        'Complex SQL optimization across Azure SQL and MySQL',
        'End-to-end automated testing with Katalon test suites',
      ],
      period: 'Jan 2024 – Present',
      institution: 'Health New England',
    },
    {
      id: 2,
      title: 'Real-Time Telemetry & Event Streaming',
      subtitle: 'Low-Latency Kafka & Spark Streaming',
      description:
        'Distributed real-time streaming pipeline utilizing Apache Kafka and Azure Event Hubs with Spark Structured Streaming for sub-minute ingestion.',
      fullDescription: `Engineered a low-latency event-driven data streaming engine designed to ingest operational telemetry and event feeds at high throughput. Utilized Azure Event Hubs and Apache Kafka for reliable message ingestion, paired with Apache Spark on Azure Databricks (Scala & Python) for distributed stream transformations and curated micro-batch writes to Delta Lake storage.`,
      technologies: ['Apache Kafka', 'Azure Event Hubs', 'Spark Structured Streaming', 'Databricks', 'Scala', 'Python', 'Delta Lake'],
      icon: <Speed />,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      features: [
        'Sub-minute processing latency for operational events',
        'High-throughput Kafka and Event Hubs partitioning',
        'Resilient checkpointing and fault-tolerant consumer groups',
        'Curated analytics-ready Delta Lake persistence',
      ],
      period: 'Enterprise Streaming',
      institution: 'Health New England',
    },
    {
      id: 3,
      title: 'Multi-Source Cloud Data Warehouse',
      subtitle: 'Consolidated Ingestion into Snowflake',
      description:
        'Consolidated heterogeneous enterprise data sources into Snowflake using AWS Glue, EMR, and Talend with automated CI/CD pipelines.',
      fullDescription: `Orchestrated enterprise cloud data ingestion pipelines integrating multiple heterogeneous database feeds into a centralized Snowflake data warehouse. Scaled distributed Apache Spark transformations on AWS EMR and Databricks with Scala and Python, while provisioning reproducible cloud infrastructure using AWS CloudFormation and deploying containerized microservices on Kubernetes.`,
      technologies: ['Snowflake', 'AWS Glue', 'AWS EMR', 'Apache Spark', 'Python', 'Scala', 'Docker', 'Kubernetes', 'CloudFormation'],
      icon: <CloudQueue />,
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      features: [
        'Multi-source ETL consolidation into Snowflake',
        'Distributed Spark compute optimization on AWS EMR',
        'Automated CI/CD pipelines via Jenkins and Bamboo',
        'Infrastructure-as-Code provisioning with CloudFormation',
      ],
      period: 'Feb 2021 – Jul 2022',
      institution: 'Oracle Corporation',
    },
    {
      id: 4,
      title: 'Automated Screening & Public Safety System',
      subtitle: 'Published Research in IJEAT Journal',
      description:
        'Computer vision and edge telemetry processing architecture for automated compliance monitoring, published in IJEAT.',
      fullDescription: `Researched, designed, and authored a peer-reviewed publication on an automated edge-based screening framework. Engineered real-time image and telemetry processing algorithms in Python to monitor safety compliance without contact. Published in the International Journal of Engineering and Advanced Technology (IJEAT), ISSN: 2249-8958, Volume-11 Issue-2.`,
      technologies: ['Python', 'Computer Vision', 'Edge Analytics', 'Machine Learning', 'Sensor Telemetry', 'IJEAT Publication'],
      icon: <MenuBook />,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      features: [
        'Real-time contactless computer vision pipeline',
        'Edge telemetry data collection & processing',
        'Peer-reviewed academic validation in IJEAT',
        'High accuracy compliance tracking algorithms',
      ],
      period: 'Published Dec 2021',
      institution: 'IJEAT Journal (ISSN: 2249-8958)',
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-primary)',
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 6, md: 10 }, flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-display)',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              Selected Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '680px',
                mx: 'auto',
                lineHeight: 1.7,
                textAlign: 'center',
              }}
            >
              Selected projects highlighting architecture and execution across enterprise Medallion Lakehouses, low-latency streaming pipelines, cloud data warehousing, and peer-reviewed technical research.
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4} alignItems="stretch">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    height: '100%',
                    minHeight: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-lg)',
                      '& .project-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Header */}
                  <Box
                    sx={{
                      background: project.gradient,
                      p: 3,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      className="project-icon"
                      sx={{
                        color: 'white',
                        fontSize: '2.5rem',
                        mb: 2,
                        transition: 'var(--transition)',
                      }}
                    >
                      {project.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                  </Box>

                  {/* Project Content */}
                  <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'var(--text-secondary)',
                        mb: 3,
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--text-muted)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          mb: 1,
                          display: 'block',
                        }}
                      >
                        Technologies
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              border: '1px solid var(--border)',
                              fontSize: '0.7rem',
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3}`}
                            size="small"
                            sx={{
                              backgroundColor: 'var(--primary)',
                              color: 'white',
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Period & Institution */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                        }}
                      >
                        {project.period}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {project.institution}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            background: isDark ? '#0f172a' : '#fff',
            border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
            boxShadow: isDark
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                background: selectedProject.gradient,
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px',
                margin: 0,
                maxWidth: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ fontSize: '2rem' }}>
                  {selectedProject.icon}
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {selectedProject.subtitle}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                onClick={handleCloseDialog}
                sx={{ color: 'white' }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{
              p: 4,
              backgroundColor: isDark ? '#0f172a' : '#fff',
              color: isDark ? '#cbd5e1' : '#475569',
            }}>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? '#cbd5e1' : '#475569',
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: 'left',
                  maxWidth: '100%',
                }}
              >
                {selectedProject.fullDescription}
              </Typography>

              {/* Key Features */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: isDark ? '#f8fafc' : '#0f172a',
                  }}
                >
                  Key Features
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {selectedProject.features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: selectedProject.color,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? '#cbd5e1' : '#475569',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Technologies */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: isDark ? '#f8fafc' : '#0f172a',
                  }}
                >
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: isDark ? '#1e293b' : '#f8fafc',
                        color: isDark ? '#cbd5e1' : '#0f172a',
                        border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Project Info */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pt: 2,
                  borderTop: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#94a3b8' : '#64748b',
                      mb: 0.5,
                    }}
                  >
                    Period
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: isDark ? '#f8fafc' : '#0f172a',
                    }}
                  >
                    {selectedProject.period}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#94a3b8' : '#64748b',
                      mb: 0.5,
                    }}
                  >
                    Institution
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: '#6366f1',
                    }}
                  >
                    {selectedProject.institution}
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects; 