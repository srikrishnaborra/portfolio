import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, Avatar } from '@mui/material';
import { CalendarToday, LocationOn, Business } from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Health New England',
      position: 'Data Engineer',
      duration: 'Jan 2024 – Present',
      location: 'United States',
      description: `• Architected, developed, and maintained enterprise-scale ETL/ELT pipelines using Azure Data Factory (ADF) and Azure Databricks, streamlining distributed data flows across healthcare business units.
• Implemented Delta Lake schema enforcement, schema evolution, and time-travel versioning to ensure data consistency, complete auditability, and regulatory compliance.
• Engineered performant backend data processing services in Python and Java, connecting diverse source systems to structured analytical serving layers.
• Built real-time streaming architectures using Azure Event Hubs and Apache Kafka, coupled with Spark Structured Streaming for low-latency operational data feeds.
• Authored and tuned high-performance MySQL and Azure SQL queries and procedures, conducting root-cause analyses on data anomalies to elevate system performance.
• Established formal data contracts, validation rules, and delivery SLAs with Product, QA, and upstream owners to guarantee reliable downstream data delivery.
• Automated end-to-end data pipeline validation using Katalon and established collaborative CI/CD workflows across GitLab and GitHub.
• Mentored junior engineers on ETL best practices, query optimization, and distributed pipeline resilience.`,
      technologies: ['Azure Databricks', 'Delta Lake', 'Azure Data Factory', 'Apache Spark', 'Python', 'Java', 'Scala', 'Apache Kafka', 'Event Hubs', 'Azure Data Lake', 'MySQL', 'Katalon', 'GitLab'],
      featured: true,
    },
    {
      id: 2,
      company: 'Oracle Corporation',
      position: 'Software Developer',
      duration: 'Feb 2021 – Jul 2022',
      location: 'Bengaluru, India',
      description: `• Built multi-source ETL pipelines utilizing AWS Glue, AWS Data Pipeline, and Talend to consolidate heterogeneous enterprise feeds into Snowflake for centralized business intelligence.
• Optimized distributed Apache Spark jobs on Databricks and AWS EMR with Scala and Python, accelerating large-scale data transformations while reducing compute footprints.
• Architected scalable cloud storage and retrieval patterns on AWS S3 and DynamoDB, optimizing partitioning keys and indexing for rapid query execution.
• Containerized microservices using Docker and orchestrated deployments on Kubernetes clusters, establishing automated CI/CD pipelines via Jenkins, Bamboo, and Ansible.
• Provisioned reproducible cloud infrastructure using AWS CloudFormation templates and instituted security guardrails using AWS IAM and CloudTrail.
• Integrated machine learning workflows with Spark MLlib for predictive analytics and deployed Elasticsearch for rapid unstructured log search and retrieval.
• Administered and optimized PostgreSQL, MongoDB, and Cassandra databases, ensuring high performance and transactional integrity.
• Mentored team members on query tuning, schema design, and production incident response.`,
      technologies: ['AWS (EMR, Glue, S3)', 'Databricks', 'Snowflake', 'Apache Spark', 'Python', 'Scala', 'Docker', 'Kubernetes', 'DynamoDB', 'PostgreSQL', 'Jenkins', 'CloudFormation'],
      featured: false,
    },
    {
      id: 3,
      company: 'Oracle Corporation',
      position: 'Associate Software Developer',
      duration: 'Jan 2020 – Jan 2021',
      location: 'Bengaluru, India',
      description: `• Developed data integration and transformation pipelines using AWS Glue and Apache Spark, maintaining reliable data migration across distributed systems.
• Designed and optimized dimensional data models, star schemas, and warehouse staging structures across Amazon Redshift and Snowflake.
• Formulated data quality validation routines using AWS Glue DataBrew and custom Python scripts, preventing dirty data propagation downstream.
• Performed extensive data profiling and root-cause analyses on database logs and flat files to resolve discrepancies and safeguard data integrity.
• Engineered and tuned complex analytical SQL queries on Amazon Redshift and DynamoDB to resolve production performance bottlenecks.
• Designed automated data lifecycle and archival mechanisms across Amazon S3 and S3 Glacier, optimizing storage expenditure while meeting compliance standards.`,
      technologies: ['AWS Glue', 'Apache Spark', 'Amazon Redshift', 'Snowflake', 'Python', 'SQL', 'DynamoDB', 'AWS DataBrew', 'S3 Glacier'],
      featured: false,
    },
  ];

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-secondary)',
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
              Professional Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '720px',
                mx: 'auto',
                lineHeight: 1.7,
                textAlign: 'center',
              }}
            >
              Building scalable cloud data platforms, real-time streaming pipelines, and governed lakehouses—engineered with precision, auditability, and operational stability.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {experiences.map((experience, index) => (
            <Grid item xs={12} md={6} key={experience.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={experience.featured ? 8 : 2}
                  sx={{
                    p: 4,
                    minHeight: 420,
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: experience.featured
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                    ...(experience.featured && {
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: '2px solid var(--border)',
                        bgcolor: 'var(--primary)',
                      }}
                    >
                      <Business />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          mb: 0.5,
                          maxWidth: 280,
                          display: 'block',
                          lineHeight: 1.2,
                        }}
                      >
                        {experience.company}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {experience.position}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {experience.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {experience.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'var(--text-secondary)',
                      mb: 3,
                      lineHeight: 1.65,
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      whiteSpace: 'pre-line',
                      flex: 1,
                    }}
                  >
                    {experience.description}
                  </Typography>

                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {experience.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border)',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {experience.featured && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 'var(--border-radius-sm)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Current
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

export default Experience;
