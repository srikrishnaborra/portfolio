import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { KeyboardArrowDown, LinkedIn, Email, Instagram } from '@mui/icons-material';
import AnimatedTechSVG from './AnimatedTechSVG';
import profilePhoto from '../../../Photo/dp.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Data Engineer', 'Cloud Data Architect', 'Big Data Specialist', 'ETL/ELT Engineer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, var(--primary) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--secondary) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, var(--accent) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={7} sx={{ textAlign: 'left' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '100px' }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'var(--text-secondary)',
                  mb: 2,
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Hello — I'm
              </Typography>

              {/* Profile Image (Small Circle) */}
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  border: '4px solid var(--primary)',
                  boxShadow: 'var(--shadow-lg)',
                  overflow: 'hidden',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src={profilePhoto}
                  alt="Sri Krishna Borra"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.2rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  mb: 2,
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'left',
                  whiteSpace: 'nowrap',
                }}
              >
                Sri Krishna Borra
              </Typography>

              <Box sx={{ mb: 3, minHeight: '3rem' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  I'm a{' '}
                  <motion.span
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      color: 'var(--primary)',
                      fontWeight: 700,
                    }}
                  >
                    {texts[currentText]}
                  </motion.span>
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  mb: 4,
                  maxWidth: '600px',
                  lineHeight: 1.7,
                  textAlign: 'left',
                }}
              >
                Data Engineer with 5+ years of experience architecting and operating resilient cloud data platforms, high-throughput ETL/ELT pipelines, and governed lakehouses across AWS and Azure. Specialized in Databricks, Delta Lake, real-time streaming, and building audit-ready data products that scale reliably.
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', mt: { xs: 4, sm: 0 }, justifyContent: 'flex-start' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                    borderRadius: 'var(--border-radius-sm)',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: 'var(--shadow-md)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 'var(--shadow-lg)',
                    },
                    transition: 'var(--transition)',
                  }}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection('about')}
                  sx={{
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                    borderRadius: 'var(--border-radius-sm)',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: 'var(--primary)',
                      backgroundColor: 'var(--bg-secondary)',
                    },
                    transition: 'var(--transition)',
                  }}
                >
                  View My Work
                </Button>
              </Box>

              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start' }}>
                <motion.a
                  href="https://www.linkedin.com/in/sri-krishna-borra-b67711a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'var(--transition)',
                      '&:hover': {
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        borderColor: 'var(--primary)',
                      },
                    }}
                  >
                    <LinkedIn />
                  </Box>
                </motion.a>

                <motion.a
                  href="mailto:srikrishnab568@gmail.com"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'var(--transition)',
                      '&:hover': {
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        borderColor: 'var(--primary)',
                      },
                    }}
                  >
                    <Email />
                  </Box>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/srikrishna.99?stkn=MW85ZXNydHk4bnBqaw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'var(--transition)',
                      '&:hover': {
                        backgroundColor: '#E1306C', // Instagram official color
                        color: 'white',
                        borderColor: '#E1306C',
                      },
                    }}
                  >
                    <Instagram />
                  </Box>
                </motion.a>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Content - Profile Image */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Background Circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: { xs: 280, sm: 320, md: 360 },
                    height: { xs: 280, sm: 320, md: 360 },
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                />

                {/* Animated Tech SVG */}
                <Box
                  sx={{
                    width: { xs: 220, sm: 260, md: 300 },
                    height: { xs: 220, sm: 260, md: 300 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <AnimatedTechSVG size={260} />
                </Box>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      boxShadow: 'var(--shadow-lg)',
                    }}
                  >
                    💻
                  </Box>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '5%',
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: 'var(--secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      boxShadow: 'var(--shadow-lg)',
                    }}
                  >
                    🎨
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
          style={{ cursor: 'pointer' }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition)',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'var(--shadow-lg)',
              },
            }}
          >
            <KeyboardArrowDown />
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero; 