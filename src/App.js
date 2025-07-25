import React from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Typography,
  Box,
  Avatar,
  Link,
  IconButton,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CheckIcon from '@mui/icons-material/Check';
import {
  FaLinkedinIn,
  FaAngular,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaGitAlt,
  FaJira,
  FaShieldAlt,
  FaSyncAlt,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaLaptopHouse,
} from 'react-icons/fa';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Link as ScrollLink, Element, Events } from 'react-scroll';
import './App.css';

// --- THEME DEFINITION ---
// This theme is now configured with the colors and fonts from your styles.css
let theme = createTheme({
  palette: {
    text: {
      primary: '#343a40',
      secondary: '#6c757d',
    },
  },
  customGradients: {
    primary: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    secondary: 'linear-gradient(90deg, #ff6b6b, #f06595)'
  },
  typography: {
    fontFamily: '"Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    body1: {
      fontSize: '1.15rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#212529'
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

// const '17rem' = 240;

// --- Data Arrays (Skills, Experience, etc.) ---
const skills = [
    { icon: <FaAngular />, label: 'Angular' }, { icon: <FaReact />, label: 'React' }, { icon: <FaBootstrap />, label: 'Bootstrap' }, { icon: <FaHtml5 />, label: 'HTML5' }, { icon: <FaCss3Alt />, label: 'CSS3' }, { icon: <FaJs />, label: 'JavaScript' }, { icon: <FaNodeJs />, label: 'Node.js' }, { icon: <FaPhp />, label: 'PHP' }, { icon: <FaDatabase />, label: 'Database' }, { icon: <FaCloud />, label: 'Cloud' }, { icon: <FaRobot />, label: 'AI/ML' }, { icon: <FaGitAlt />, label: 'Git' }, { icon: <FaJira />, label: 'Jira' }, { icon: <FaShieldAlt />, label: 'Security' }, { icon: <FaSyncAlt />, label: 'DevOps' }, { icon: <FaUsers />, label: 'Teamwork' }, { icon: <FaComments />, label: 'Communication' }, { icon: <FaLightbulb />, label: 'Innovation' }, { icon: <FaLaptopHouse />, label: 'Remote Work' },
];
const experiences =[
    {
    role: 'Freelance Full Stack Developer',
    company: 'Self-employed (Remote - Poland/India)',
    period: 'November 2024 to February 2025',
    duties: [
      'Designed and delivered a real-time network monitoring tool that improved system uptime by 40% through proactive alerting and automated recovery processes',
      'Developed a comprehensive finance platform with automated reporting features that reduced support tickets by 35% and improved accounting team productivity',
      'Implemented CI/CD workflows using Docker containerization and AWS ECS, reducing deployment times from 30 minutes to under 5 minutes',
      'Architected microservices-based solutions with React frontends and Node.js backends for multiple client projects',
      'Consulted with international clients to modernize legacy systems and implement cloud-native solutions'
    ]
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Hexotix',
    period: 'February 2023 to October 2024',
    location: 'India',
    duties: [
      'Led feature development across multiple web platforms using Angular (v15), React (v18), and Node.js (v16), implementing modern state management solutions',
      'Integrated payment gateways (Stripe, Razorpay) with secure tokenization and PCI-compliant workflows, processing over $2M monthly transactions',
      'Designed and implemented Google Authentication across all platforms, improving login success rates by 25%',
      'Established CI/CD pipelines using Docker containers and AWS CloudWatch monitoring, reducing production incidents by 40%',
      'Mentored 3 junior developers through code reviews and pair programming sessions, improving team velocity by 30%',
      'Optimized PostgreSQL queries and implemented Redis caching, reducing API response times from 1200ms to 300ms'
    ]
  },
  {
    role: 'Team Lead - Senior Angular & Node.js Developer',
    company: 'VPN Infotech',
    period: 'July 2021 to January 2023',
    location: 'India',
    duties: [
      'Managed a cross-functional team of 5 developers, coordinating with product and QA teams to deliver 12+ applications',
      'Redesigned legacy backend APIs with Express.js and TypeScript, improving test coverage from 45% to 85% using Jest',
      'Implemented Firebase Realtime Database and Authentication for customer-facing mobile applications',
      'Introduced OAuth 2.0 flows for secure third-party integrations with Google and Facebook services',
      'Established Agile development processes with 2-week sprints, reducing missed deadlines by 60%',
      'Conducted technical interviews and onboarding for new team members'
    ]
  },
  {
    role: 'Angular & Ionic Developer',
    company: 'DI Solution',
    period: 'August 2020 to June 2021',
    location: 'India',
    duties: [
      'Developed hybrid mobile applications using Ionic Framework with Angular, achieving 90% code reuse across iOS and Android platforms',
      'Implemented secure payment workflows with Stripe integration, including subscription management and receipt generation',
      'Optimized application performance through lazy loading and Ahead-of-Time (AOT) compilation',
      'Collaborated with UX designers to implement responsive interfaces meeting WCAG 2.1 accessibility standards',
      'Reduced APK size by 40% through asset optimization and tree-shaking'
    ]
  },
  {
    role: 'Senior PHP Developer',
    company: 'Viprak Web Solutions',
    period: 'March 2019 to July 2020',
    location: 'India',
    duties: [
      'Built multilingual content management systems supporting 5 languages with RTL text direction capabilities',
      'Developed admin dashboards with data visualization using Chart.js for business KPIs and analytics',
      'Integrated Facebook Graph API for social media marketing automation features',
      'Implemented cron job systems for automated report generation and email notifications',
      'Migrated legacy PHP 5.6 codebase to PHP 7.4 with 300% performance improvement'
    ]
  },
  {
    role: 'PHP Developer',
    company: 'JR Technologies',
    period: 'November 2016 to February 2019',
    location: 'India',
    duties: [
      'Maintained and enhanced small business web applications using PHP and MySQL',
      'Implemented CodeIgniter framework for MVC architecture in new projects',
      'Developed RESTful APIs for mobile app integrations',
      'Improved database performance through query optimization and indexing',
      'Created documentation and training materials for client handoffs'
    ]
  }
];
const education = [
    { degree: 'Master of Science in Information Technology', institution: 'KSV University', period: 'July 2014 - May 2016', location: 'Gandhinagar, GJ, India', grade: 'CPI: 7.93' }, { degree: 'Bachelor of Computer Applications', institution: 'Gujarat University', period: 'July 2011 - May 2014', grade: 'CGPA: 7.07' }
];
const projects = [
    {
      title: "LinkDM - Instagram Automation Tool",
      tech: "Angular 9, GraphQL, Node.js, AWS (EC2/S3), MongoDB, REST APIs",
      description: "Scaled an automation platform to send 150M+ DMs securely, serving 25,000+ users with OAuth2 integration and rate-limited API queues.",
      highlights: [
        "Reduced frontend load time by 40% using Angular lazy loading and AWS CloudFront.",
        "Implemented encrypted user data storage and audit logs for compliance.",
        "Built modular workflows for triggers, scheduling, and multi-account support.",
        "Maintained CI/CD pipelines (GitHub Actions) with 95% test coverage (Jasmine/Karma)."
      ]
    },
    {
      title: "RemoteCo - Remote Hiring Platform",
      tech: "Angular 8, Node.js, PostgreSQL, Firebase, AWS Lambda",
      description: "Developed a bilingual (EN/ES) job portal with real-time chat, Stripe payments, and role-based dashboards.",
      highlights: [
        "Optimized PostgreSQL queries and Angular change detection, cutting page load time by 35%.",
        "Designed GDPR-compliant data anonymization for user profiles.",
        "Integrated AWS Lambda for scalable backend processing."
      ]
    },
    {
      title: "EduTrack - Learning Progress Dashboard",
      tech: "React 18, TypeScript, Node.js, MongoDB, Chart.js, AWS Amplify",
      description: "Real-time analytics portal for educators/parents with interactive charts and role-based access.",
      highlights: [
        "Achieved 100% WCAG accessibility compliance using React-ARIA.",
        "Deployed on AWS Amplify with CI/CD and automated performance audits.",
        "Implemented JWT authentication and React Context for state management."
      ]
    }
  ];
function Resume(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('about');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sectionList = ['About', 'Skills', 'Experience', 'Education', 'Projects'];

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 2,
        height: '100%',
        justifyContent: 'center',
      }}
    >
      {/* <Helmet> */}
        <title>Uravashiben Vagadiya - Senior Full Stack Developer</title>
        <meta name="description" content="Professional resume of Uravashiben Vagadiya, Senior Full Stack Developer with 6+ years experience in Angular, React, Node.js and cloud technologies" />
      {/* </Helmet> */}

      <Avatar
        alt="Professional portrait of Uravashiben Vagadiya"
        src="/assets/img/profile.jpg"
        sx={{
          width: 150,
          height: 150,
          margin: 'auto',
          my: 1,
          border: '5px solid rgba(255,255,255,0.2)',
        }}
      />
      <List>
        {sectionList.map((section) => {
          const id = section.toLowerCase();
          return (
            <ListItem key={id} disablePadding sx={{ flexDirection: 'column' }}>
              <ScrollLink
                activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => {
                  setActiveSection(id);
                  if (mobileOpen) handleDrawerToggle();
                }}
              >
                <ListItemButton className="sidebarhover" sx={{ justifyContent: 'center' }}>
                  <ListItemText
                    primary={section.toUpperCase()}
                    primaryTypographyProps={{
                      fontWeight: '600',
                      color: activeSection === id ? '#ff6b6b' : '#fff',
                      letterSpacing: '1.6px',
                    }}
                  />
                </ListItemButton>
              </ScrollLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  React.useEffect(() => {
    const scrollToDefault = () => {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    scrollToDefault();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{ display: { sm: 'none' } }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Uravashiben Vagadiya
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: '17rem' }, flexShrink: { sm: 0 } }}
          aria-label="Resume sections"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '17rem',
                background: theme.customGradients.primary,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              },
            }}
          >
            {drawerContent}
          </Drawer>

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '17rem',
                background: theme.customGradients.primary,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        </Box>

        <Container 
          component="main" 
          sx={{ flexGrow: 1 }} 
          style={{ width: '100% !important', paddingLeft: '0px', background: "#d7d7d7" }} 
          maxWidth={false}
        >
          <Toolbar sx={{ display: { sm: 'none' } }} />
          
          <Element name="about" className="resume-section" id="about">
            <section id="about" className='resume-section' aria-labelledby="about-heading">
              <Typography variant="h1" gutterBottom sx={{ lineHeight: 0.9 }} id="about-heading">
                Uravashiben <Box component="span" sx={{ background: theme.customGradients.secondary, WebkitTextFillColor: '#00000000', WebkitBackgroundClip: 'text' }}>Vagadiya</Box>
              </Typography>
              <Typography variant="h2" className='title'>
                Senior Full Stack Web Developer
              </Typography>
              <Typography className='subtitle1' sx={{ marginBottom: "2rem" }} gutterBottom>
                Gliwice, Poland 40-100 · +48 453 457 100 · <Link href="mailto:urvashiv210@email.com">urvashiv210@email.com</Link>
              </Typography>
              <Typography variant="body1" paragraph>
                Senior Full Stack Developer with 6+ years of experience in JavaScript (ES6+), TypeScript, Angular, React, Node.js, RESTful APIs, AWS Cloud Services, Agile Methodologies, CI/CD Pipelines, and Team Leadership.
              </Typography>
              <Typography variant="body1" paragraph>
                I specialize in building high-performance web applications that scale, from startup MVPs to enterprise systems. With expertise in both frontend and backend development, I lead cross-functional teams, architect complex systems, and create intuitive UIs that users love.
              </Typography>
              <Typography variant="body1" paragraph>
                Agile by mindset, I thrive in fast-paced environments where collaboration, innovation, and clean code matter. Based in Europe and working globally, I don't just write code—I solve problems and deliver results.
              </Typography>
              <IconButton 
                href="https://www.linkedin.com/in/uravashiben-vagadiya-978121171" 
                target="_blank" 
                aria-label="LinkedIn profile"
                sx={{ 
                  color: '#fff !important', 
                  width: 'fit-content', 
                  height: '2.5rem', 
                  width: '2.5rem', 
                  background: '#495057', 
                  borderRadius: '20%', 
                  fontSize: '1.5rem',
                  '&:hover': {
                    background: '#343a40'
                  }
                }}
              >
                <FaLinkedinIn />
              </IconButton>
            </section>
          </Element>

          <Element name="skills" className="resume-section" id="skills">
            <section id="skills" className='resume-section' aria-labelledby="skills-heading">
              <Typography variant="h2" gutterBottom id="skills-heading">Technical Skills</Typography>
              <Typography variant="body1" paragraph>
                Extensive experience with modern web technologies including:
              </Typography>
              <Grid container spacing={2} sx={{ justifyContent: 'center', gap: '45px', rowGap: '35px' }}>
                {skills.map((skill) => (
                  <Grid 
                    item 
                    xs={4} 
                    sm={3} 
                    md={2} 
                    key={skill.label} 
                    sx={{ textAlign: 'center', color: '#2f3542' }}
                    aria-label={skill.label}
                  >
                    {React.cloneElement(skill.icon, { size: 40 })}
                    <Typography variant="caption" display="block">{skill.label}</Typography>
                  </Grid>
                ))}
              </Grid>
              
              <Typography className='subtitle1' gutterBottom sx={{ mt: 4 }}>Development Workflow</Typography>
              <Box component="ul" sx={{ paddingLeft: '0', listStyle: 'none', color: "#2f3542" }}>
                {[
                  'Design UI using Figma or provided mockups, then implement with React.js or Angular (component-based architecture)',
                  'Ensure mobile-first, accessible, and cross-browser compatible implementations',
                  'Select appropriate tech stack based on project requirements (React.js/Angular for frontend, Node.js/PHP for backend)',
                  'Develop scalable and secure RESTful APIs with Node.js/Express or Laravel',
                  'Implement authentication, authorization, and data validation best practices',
                  'Integrate third-party services (payment gateways, email services, messaging APIs)',
                  'Collaborate with stakeholders to gather functional and technical requirements',
                  'Manage project scope, timelines, and deliverables using Agile methodologies',
                  'Conduct code reviews, stand-ups, and sprint retrospectives',
                  'Mentor junior developers and establish coding standards'
                ].map((text, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem',
                    }}
                    aria-label={text}
                  >
                    <CheckIcon sx={{ marginRight: '0.5rem', marginTop: '0.2rem' }} />
                    <span>{text}</span>
                  </Box>
                ))}
              </Box>
            </section>
          </Element>

          <Element name="experience" className="resume-section" id="experience">
            <section id="experience" className='resume-section' aria-labelledby="experience-heading">
              <Typography variant="h2" gutterBottom id="experience-heading">Professional Experience</Typography>
              {experiences.map((exp, index) => (
                <article key={index} aria-labelledby={`exp-${index}-heading`}>
                  <header>
                    <Grid container justifyContent="space-between" alignItems="flex-start">
                      <Grid item xs={12} md={8}>
                        <Typography variant="h3" id={`exp-${index}-heading`}>
                          {exp.role} at {exp.company}
                        </Typography>
                        <Typography className='subtitle1' gutterBottom>{exp.company}</Typography>
                      </Grid>
                      <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
                        <Typography 
                          className="experience-period" 
                          sx={{ 
                            background: theme.customGradients.secondary,
                            WebkitTextFillColor: '#00000000',
                            WebkitBackgroundClip: 'text',
                            fontWeight: "bold" 
                          }}
                        >
                          {exp.period}
                        </Typography>
                      </Grid>
                    </Grid>
                  </header>
                  <Box component="ul" sx={{ paddingLeft: '25px', color: "#2f3542",marginBottom: "2rem" }}>
                    {exp.duties.map((duty, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          marginBottom: '0.5rem',
                          listStyleType: 'disc',
                        }}
                        aria-label={duty}
                      >
                        {duty}
                      </Box>
                    ))}
                  </Box>
                </article>
              ))}
            </section>
          </Element>

          <Element name="education" className="resume-section" id="education">
            <section id="education" className='resume-section' aria-labelledby="education-heading">
              <Typography variant="h2" gutterBottom id="education-heading">Education</Typography>
              {education.map((edu, index) => (
                <article key={index} aria-labelledby={`edu-${index}-heading`} sx={{ mb: 4 }}>
                  <header>
                    <Grid container justifyContent="space-between" alignItems="flex-start">
                      <Grid item xs={12} md={8}>
                        <Typography variant="h3" id={`edu-${index}-heading`}>{edu.degree}</Typography>
                        <Typography className='subtitle1' gutterBottom>{edu.institution}</Typography>
                        <Box component="ul" sx={{ paddingLeft: '0px', color: "#2f3542" }}>
                          {edu.location && (
                            <Box
                              component="li"
                              sx={{
                                marginBottom: '0.2rem',
                                listStyleType: 'none',
                              }}
                              aria-label={`Location: ${edu.location}`}
                            >
                              {edu.location}
                            </Box>
                          )}
                          <Box
                            component="li"
                            sx={{
                              marginBottom: '0.5rem',
                              listStyleType: 'none',
                            }}
                            aria-label={`Grade: ${edu.grade}`}
                          >
                            {edu.grade}
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
                        <Typography 
                          className="experience-period" 
                          sx={{ 
                            background: theme.customGradients.secondary,
                            WebkitTextFillColor: '#00000000',
                            WebkitBackgroundClip: 'text',
                            fontWeight: "bold" 
                          }}
                        >
                          {edu.period}
                        </Typography>
                      </Grid>
                    </Grid>
                  </header>
                </article>
              ))}
            </section>
          </Element>

          <Element name="projects" className="resume-section" id="projects">
            <section id="projects" className='resume-section' aria-labelledby="projects-heading">
              <Typography variant="h2" gutterBottom id="projects-heading">Project Highlights</Typography>
              {projects.map((project, index) => (
                <article key={index} aria-labelledby={`project-${index}-heading`} sx={{ mb: 4 }}>
                  <header>
                    <Typography variant="h3" id={`project-${index}-heading`}>{project.title}</Typography>
                    <Typography className='subtitle1' gutterBottom>
                      Technologies: {project.tech}
                    </Typography>
                  </header>
                  {project.description && (
                    <Typography variant="body1" paragraph className="experience-period">
                      {project.description}
                    </Typography>
                  )}
                  <Box component="ul" sx={{ paddingLeft: '25px', color: "#2f3542" ,marginBottom: "2.5rem"}}>
                    {project.highlights.map((highlight, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          marginBottom: '0.5rem',
                          listStyleType: 'disc',
                        }}
                        aria-label={highlight}
                      >
                        {highlight}
                      </Box>
                    ))}
                  </Box>
                </article>
              ))}
            </section>
          </Element>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Resume;