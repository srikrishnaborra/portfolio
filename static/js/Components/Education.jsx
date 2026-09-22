import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Avatar, Chip } from '@mui/material';
import { School, CalendarToday, LocationOn, WorkspacePremium, MenuBook } from '@mui/icons-material';

const Education = () => {
  const educationData = [
    {
      id: 1,
      type: 'Degree',
      degree: 'Master of Science (M.S.)',
      major: 'Computer Science',
      institution: 'University of North Texas',
      location: 'Denton, Texas, United States',
      duration: 'Aug 2022 – May 2024',
      description:
        'Graduate curriculum focused on distributed computing, advanced data architectures, cloud database systems, and large-scale data processing algorithms.',
      icon: <School />,
      featured: true,
      tag: 'Graduate Degree',
      items: ['Distributed Systems', 'Advanced Database Architecture', 'Cloud Computing', 'Big Data Systems'],
    },
    {
      id: 2,
      type: 'Certifications',
      degree: 'Cloud & AI Certifications',
      major: 'AWS & DeepLearning.AI',
      institution: 'Industry Credentials',
      location: 'Global Accreditation',
      duration: 'Verified Credentials',
      description:
        '• AWS Certified Solutions Architect\n• AWS Certified Cloud Practitioner\n• Machine Learning — Stanford University (Andrew Ng, Coursera)\n• Deep Learning Specialization — DeepLearning.AI (Andrew Ng, Coursera)',
      icon: <WorkspacePremium />,
      featured: false,
      tag: 'Professional Badges',
      items: ['AWS Solutions Architect', 'AWS Cloud Practitioner', 'Stanford Machine Learning', 'Deep Learning Specialization'],
    },
    {
      id: 3,
      type: 'Publication',
      degree: 'Published Research Paper',
      major: 'Computer Vision & Edge Systems',
      institution: 'IJEAT Journal',
      location: 'Volume-11, Issue-2 (Dec 2021)',
      duration: 'ISSN: 2249-8958',
      description:
        '"Automated Screening System for Covid Safety"\nPublished in the International Journal of Engineering and Advanced Technology (IJEAT).\nResearched contactless sensor telemetry, computer vision pipelines, and edge inference for automated safety monitoring.',
      icon: <MenuBook />,
      featured: false,
      tag: 'Peer-Reviewed',
      items: ['Edge Analytics', 'Computer Vision', 'Telemetry Processing', 'Public Safety Tech'],
    },
  ];

  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-primary)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              Education & Credentials
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
              Master's degree from the University of North Texas paired with verified AWS cloud architecture credentials and published technical research.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {educationData.map((education, index) => (
            <Grid item xs={12} md={4} key={education.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={education.featured ? 6 : 2}
                  sx={{
                    p: 3.5,
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: education.featured
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                    ...(education.featured && {
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
                      },
                    }),
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                    <Avatar
                      sx={{
                        width: 52,
                        height: 52,
                        mr: 2,
                        border: '2px solid var(--border)',
                        bgcolor: 'var(--primary)',
                        color: '#fff',
                      }}
                    >
                      {education.icon}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          lineHeight: 1.2,
                          mb: 0.5,
                        }}
                      >
                        {education.institution}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {education.degree}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5, gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday sx={{ fontSize: 15, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="caption"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {education.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: 15, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="caption"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {education.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--text-secondary)',
                      mb: 3,
                      lineHeight: 1.65,
                      textAlign: 'left',
                      whiteSpace: 'pre-line',
                      flex: 1,
                    }}
                  >
                    {education.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto' }}>
                    {education.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border)',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>

                  {education.tag && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 14,
                        right: 14,
                        backgroundColor: education.featured ? 'var(--primary)' : 'var(--bg-secondary)',
                        color: education.featured ? 'white' : 'var(--text-secondary)',
                        border: education.featured ? 'none' : '1px solid var(--border)',
                        px: 1.2,
                        py: 0.3,
                        borderRadius: 'var(--border-radius-sm)',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {education.tag}
                    </Box>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
