import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Icon,
  Paper,
  Divider,
  LinearProgress,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  TextField,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Drawer,
  ListItemIcon,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import QuizIcon from '@mui/icons-material/Quiz';
import EventIcon from '@mui/icons-material/Event';
import StorageIcon from '@mui/icons-material/Storage';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 240;

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
}));

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  padding: '16px',
});

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
  },
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
}));

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const SideNav = ({ open, onClose }) => {
  const menuItems = [
    { text: 'Dashboard', icon: DashboardIcon, link: '/admin/dashboard' },
    { text: 'Upload Videos', icon: VideoLibraryIcon, link: '/admin/upload-video' },
    { text: 'Create Test', icon: QuizIcon, link: '/admin/create-test' },
    { text: 'View Students', icon: PeopleIcon, link: '/admin/view-students' },
    { text: 'Student Results', icon: AssessmentIcon, link: '/admin/view-student-results/1' },
    { text: 'Logout', icon: ExitToAppIcon, link: '/logout' },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item.text} component={Link} to={item.link}>
              <ListItemIcon>
                <Icon component={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

const AdminDashboard = () => {
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [userQuery, setUserQuery] = useState('');
  const [predictedTrends, setPredictedTrends] = useState([]);
  const [openAIDialog, setOpenAIDialog] = useState(false);
  const [selectedAITool, setSelectedAITool] = useState('');
  const [aiToolOutput, setAiToolOutput] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Simulated AI functions (replace with actual AI integrations)
  const generateInsights = () => {
    return "Based on recent student performance data, consider creating more practice exercises for the 'Advanced JavaScript' module. Also, the 'Introduction to Machine Learning' course has shown high engagement - consider expanding this topic.";
  };

  const generateResponse = (query) => {
    return `Here's a suggestion based on your query "${query}": Consider implementing a peer review system for programming assignments to enhance collaborative learning. Additionally, introducing AI-powered code review tools could significantly improve code quality and learning outcomes.`;
  };

  const predictTrends = () => {
    return [
      "Increased demand for AI and machine learning courses",
      "Rising interest in cybersecurity specializations",
      "Growing popularity of mobile app development workshops",
      "Emerging trend in quantum computing education",
      "Surge in demand for data science and analytics programs",
    ];
  };

  const generateCurriculum = () => {
    return "Based on current industry trends and student interests, here's a suggested curriculum update:\n\n1. Introduction to AI and Machine Learning\n2. Advanced Web Development with React and Node.js\n3. Cybersecurity Fundamentals\n4. Mobile App Development (iOS and Android)\n5. Data Science and Big Data Analytics\n6. Cloud Computing and DevOps\n7. Blockchain Technology and Applications\n8. Internet of Things (IoT) Programming\n9. Quantum Computing: Theory and Practice\n10. Ethical Hacking and Network Security";
  };

  const generateCodeChallenge = () => {
    return "Here's a coding challenge for your students:\n\nCreate a function that takes a string as input and returns the longest palindromic substring in that string. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.\n\nExample:\nInput: 'babad'\nOutput: 'bab' or 'aba'\n\nInput: 'cbbd'\nOutput: 'bb'\n\nEncourage students to optimize their solution for efficiency.";
  };

  const generatePersonalizedLearningPath = () => {
    return "Based on the student's performance and interests, here's a personalized learning path:\n\n1. Strengthen fundamentals in Data Structures and Algorithms\n2. Focus on Python programming for data analysis\n3. Introduction to Machine Learning concepts\n4. Deep dive into Neural Networks and Deep Learning\n5. Practical projects in Natural Language Processing\n6. Advanced topics in Computer Vision\n7. Capstone project: Developing an AI-powered application\n\nRecommended resources:\n- Online course: 'Machine Learning' by Andrew Ng\n- Book: 'Deep Learning' by Ian Goodfellow\n- Practice platform: Kaggle competitions";
  };

  useEffect(() => {
    setAiSuggestion(generateInsights());
    setPredictedTrends(predictTrends());
  }, []);

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    setAiSuggestion(generateResponse(userQuery));
    setUserQuery('');
  };

  const handleAIToolSelect = (tool) => {
    setSelectedAITool(tool);
    setOpenAIDialog(true);
    switch (tool) {
      case 'curriculum':
        setAiToolOutput(generateCurriculum());
        break;
      case 'codeChallenge':
        setAiToolOutput(generateCodeChallenge());
        break;
      case 'learningPath':
        setAiToolOutput(generatePersonalizedLearningPath());
        break;
      default:
        setAiToolOutput('');
    }
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const dashboardItems = [
    {
      title: 'Upload Programming Videos',
      description: 'Add new programming course videos here.',
      icon: VideoLibraryIcon,
      link: '/admin/upload-video',
    },
    {
      title: 'Create Test',
      description: 'Design and publish tests for students.',
      icon: QuizIcon,
      link: '/admin/create-test',
    },
    {
      title: 'View Students',
      description: 'Manage student information and track progress.',
      icon: PeopleIcon,
      link: '/admin/view-students',
    },
    {
      title: 'View Student Results',
      description: "Check students' test scores and performance.",
      icon: AssessmentIcon,
      link: '/admin/view-student-results/1',
    },
  ];

  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      icon: PeopleIcon,
      color: '#3f51b5',
    },
    {
      title: 'Programming Videos',
      value: '42',
      icon: VideoLibraryIcon,
      color: '#f50057',
    },
    {
      title: 'Aptitude Tests Created',
      value: '156',
      icon: QuizIcon,
      color: '#00a152',
    },
    {
      title: 'Avg. Score',
      value: '78%',
      icon: TrendingUpIcon,
      color: '#ff9800',
    },
  ];

  const recentActivities = [
    { text: 'New programming video "React Hooks" added', icon: VideoLibraryIcon },
    { text: 'Test results for "Java Basics" published', icon: AssessmentIcon },
    { text: '15 new students enrolled this week', icon: PeopleIcon },
    { text: 'System maintenance scheduled for next Sunday', icon: StorageIcon },
  ];

  const aiTools = [
    { title: 'AI Curriculum Generator', value: 'curriculum', icon: SchoolIcon },
    { title: 'AI Code Challenge Creator', value: 'codeChallenge', icon: CodeIcon },
    { title: 'Personalized Learning Path', value: 'learningPath', icon: BubbleChartIcon },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <SideNav open={drawerOpen} onClose={handleDrawerToggle} />
      <Main open={drawerOpen}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ pb: 4, mt: 4 }}>
          <GradientBackground>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              fontWeight="bold"
            >
              Admin Dashboard
            </Typography>
          </GradientBackground>

          <Grid container spacing={4} mb={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatCard elevation={3}>
                  <Icon
                    component={stat.icon}
                    style={{ fontSize: 48, color: stat.color, marginBottom: '8px' }}
                  />
                  <Typography variant="h6" component="h2" gutterBottom align="center">
                    {stat.title}
                  </Typography>
                  <Typography variant="h4" component="p" fontWeight="bold" align="center">
                    {stat.value}
                  </Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={4} mb={4}>
            {dashboardItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StyledCard elevation={3}>
                  <StyledCardContent>
                    <IconWrapper>
                      <Icon component={item.icon} color="primary" />
                    </IconWrapper>
                    <Typography
                      variant="h6"
                      component="h2"
                      gutterBottom
                      align="center"
                    >
                      {item.title}
                    </Typography>
                    <Typography color="textSecondary" align="center">
                      {item.description}
                    </Typography>
                  </StyledCardContent>
                  <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
                    <Button
                      component={Link}
                      to={item.link}
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ borderRadius: '20px' }}
                    >
                      Go
                    </Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={4} mb={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  AI-Generated Insights
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" alignItems="center" mb={2}>
                  <LightbulbIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                  <Typography variant="body1">{aiSuggestion}</Typography>
                </Box>
                <form onSubmit={handleQuerySubmit}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Ask AI for suggestions..."
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Get AI Suggestion
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  AI-Powered Tools
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                  {aiTools.map((tool) => (
                    <Grid item xs={12} sm={4} key={tool.value}>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<Icon component={tool.icon} />}
                        fullWidth
                        onClick={() => handleAIToolSelect(tool.value)}
                      >
                        {tool.title}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={4} mb={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  AI-Predicted Trends
                </Typography>
                <Divider sx={{ my: 2 }} />
                <List>
                  {predictedTrends.map((trend, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar>
                          <AutoGraphIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={trend} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Recent Activities
                </Typography>
                <Divider sx={{ my: 2 }} />
                <List>
                  {recentActivities.map((activity, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar>
                          <Icon component={activity.icon} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={activity.text} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>

          <Dialog open={openAIDialog} onClose={() => setOpenAIDialog(false)} maxWidth="md" fullWidth>
            <DialogTitle>AI Tool Output</DialogTitle>
            <DialogContent>
              <Typography variant="body1" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
                {aiToolOutput}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenAIDialog(false)}>Close</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Main>
    </Box>
  );
};

export default AdminDashboard;