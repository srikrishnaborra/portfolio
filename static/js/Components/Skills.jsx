import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import {
  Code,
  Cloud,
  Hub,
  Storage,
  Speed,
  IntegrationInstructions,
} from '@mui/icons-material';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      id: 'aws_cloud',
      title: 'AWS Cloud Ecosystem',
      icon: <Cloud />,
      skills: [
        'Amazon S3',
        'Amazon Redshift',
        'DynamoDB',
        'AWS EMR',
        'AWS Glue',
        'AWS Kinesis',
        'AWS Data Pipeline',
        'AWS Lambda',
        'Athena',
        'CloudFormation',
        'AWS IAM',
      ],
    },
    {
      id: 'azure_cloud',
      title: 'Azure Cloud Platform',
      icon: <Storage />,
      skills: [
        'Azure Data Lake (ADLS Gen2)',
        'Synapse Analytics',
        'Azure Data Factory (ADF)',
        'Azure Databricks',
        'Cosmos DB',
        'Azure Event Hubs',
        'Azure Functions',
        'Azure SQL Database & SQL MI',
        'Azure Monitor',
        'Azure Active Directory',
      ],
    },
    {
      id: 'data_processing_etl',
      title: 'Data Processing & ETL/ELT',
      icon: <Hub />,
      skills: [
        'Databricks',
        'Delta Lake',
        'Apache Spark',
        'PySpark',
        'Azure Data Factory',
        'AWS Glue',
        'Talend',
        'Informatica 6.1',
        'Oozie & Sqoop',
        'Schema Enforcement & Evolution',
      ],
    },
    {
      id: 'bigdata_streaming',
      title: 'Big Data & Streaming',
      icon: <Speed />,
      skills: [
        'Apache Kafka',
        'AWS Kinesis',
        'Azure Event Hubs',
        'Spark Structured Streaming',
        'RabbitMQ',
        'Hadoop & HDFS',
        'Hive & HBase',
        'Apache Impala',
        'Parquet & ORC',
        'Avro & JSON',
      ],
    },
    {
      id: 'databases_warehouses',
      title: 'Databases & Warehouses',
      icon: <Storage />,
      skills: [
        'Snowflake',
        'Amazon Redshift',
        'MySQL',
        'Oracle Database',
        'Microsoft SQL Server',
        'PostgreSQL',
        'Teradata',
        'DynamoDB',
        'MongoDB',
        'Cosmos DB',
      ],
    },
    {
      id: 'programming_devops',
      title: 'Languages, DevOps & QA',
      icon: <IntegrationInstructions />,
      skills: [
        'Python',
        'Java',
        'Scala',
        'SQL (Complex Query Tuning)',
        'Shell Scripting / Bash',
        'PowerShell',
        'Docker & Kubernetes',
        'Jenkins & Ansible',
        'GitLab CI & GitHub Actions',
        'Katalon QA Automation',
        'Splunk & Grafana',
      ],
    },
  ];

  return (
    <Box
      component="section"
      id="skills"
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
              Technical Skills
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
              A battle-tested technical toolkit built across 5+ years of enterprise data engineering: cloud lakehouse patterns, distributed processing engines, real-time streaming, and reliable CI/CD automation.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} lg={4} key={category.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={hoveredCategory === category.id ? 8 : 2}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  sx={{
                    p: 4,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: hoveredCategory === category.id
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        mr: 2,
                        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.2,
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border)',
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          '&:hover': {
                            backgroundColor: 'var(--primary)',
                            color: 'white',
                            borderColor: 'var(--primary)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 10 } }}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 'var(--border-radius)',
                border: '1px solid var(--border)',
                background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  mb: 2,
                  color: 'var(--text-primary)',
                  textAlign: 'center',
                }}
              >
                Continuous Mastery & Engineering Rigor
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-secondary)',
                  mb: 0,
                  maxWidth: '660px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Actively refining distributed lakehouse patterns, mastering advancements across Databricks and Delta Lake, and upholding rigorous data quality, schema evolution, and performance standards across every pipeline.
              </Typography>
            </Paper>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Skills;
