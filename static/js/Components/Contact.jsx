import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, Instagram } from '@mui/icons-material';
import { toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);

  const validateForm = () => {
    if (!firstName) return 'First name is required';
    if (!lastName) return 'Last name is required';
    if (!email) return 'Email is required';
    if (!message) return 'Message is required';
    return null;
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    const error = validateForm();
    if (!error) {
      const data = {
        firstName,
        lastName,
        email,
        phone,
        message,
      };
      sendEmail(data);
    } else {
      setLoader(false);
      toast.error(error, { position: 'top-right' });
    }
  };

  const sendEmail = (body) => {
    const data = {
      service_id: 'service_h0h0xie',
      template_id: 'template_kv6hu0t',
      user_id: 'user_UrSzNfk0Txv33rqJCC7uC',
      template_params: {
        to_address: 'srikrishnab568@gmail.com',
        message: body.message,
        to_name: 'Sri Krishna Borra',
        from_name: `${body.firstName} ${body.lastName}`,
        cc_address: body.email,
        phone: body.phone,
      },
    };
    axios({
      method: 'post',
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      data: data,
    })
      .then(() => {
        toast.success('Message sent—thank you. I will respond as soon as I can.', {
          position: 'top-right',
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch(() => {
        toast.error('Something went wrong sending the form. Please email me directly or call.', {
          position: 'top-right',
        });
      })
      .finally(() => setLoader(false));
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'srikrishnab568@gmail.com',
      link: 'mailto:srikrishnab568@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+1 (940) 843-1925',
      link: 'tel:+19408431925',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Frisco / Dallas, Texas, United States',
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/sri-krishna-borra-b67711a7/',
      color: '#0077b5',
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: 'https://www.instagram.com/srikrishna.99?stkn=MW85ZXNydHk4bnBqaw%3D%3D&utm_source=qr',
      color: '#E1306C',
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-secondary)',
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
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '660px',
                mx: 'auto',
                lineHeight: 1.7,
                textAlign: 'center',
              }}
            >
              Open to Data Engineering, Senior Data Engineering, and Cloud Architecture opportunities centered on Databricks, Delta Lake, real-time streaming, and scalable enterprise data platforms.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  mb: 4,
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                }}
              >
                Start a conversation
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: 'left',
                }}
              >
                The fastest path is direct email—reach me at{' '}
                <a
                  href="mailto:srikrishnab568@gmail.com"
                  style={{
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  srikrishnab568@gmail.com
                </a>
              </Typography>

              {/* Contact Info Cards */}
              <Box sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        mb: 2,
                        borderRadius: 'var(--border-radius)',
                        border: '1px solid var(--border)',
                        transition: 'var(--transition)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 'var(--shadow-lg)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                            mr: 2,
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                              mb: 0.5,
                              textAlign: 'left',
                            }}
                          >
                            {info.title}
                          </Typography>
                          {info.link ? (
                            <a
                              href={info.link}
                              style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                '&:hover': {
                                  color: 'var(--primary)',
                                },
                              }}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <Typography
                              variant="body2"
                              sx={{ color: 'var(--text-secondary)' }}
                            >
                              {info.value}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </Box>

              {/* Social Links */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                  }}
                >
                  Connect on social
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-secondary)',
                          transition: 'var(--transition)',
                          '&:hover': {
                            backgroundColor: social.color,
                            color: 'white',
                            borderColor: social.color,
                          },
                        }}
                      >
                        {social.icon}
                      </Box>
                    </motion.a>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-primary)',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'var(--text-primary)', textAlign: 'left' }}>
                  Send a message
                </Typography>
                <form onSubmit={handleSendEmail}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="First Name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        fullWidth
                        required
                        multiline
                        minRows={4}
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loader}
                    sx={{ mt: 2, minWidth: 120, display: 'block', marginRight: 'auto' }}
                  >
                    {loader ? 'Sending...' : 'Send'}
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 