import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  InputBase,
  Button,
  Link,
  CircularProgress,
  IconButton,
  InputAdornment,
  FormControl,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${theme.palette.primary.main} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '4px',
  padding: '10px',
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
  },
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userRole = user.email.includes('admin') ? 'admin' : 'student';
      navigate(userRole === 'admin' ? '/admin/dashboard' : '/student/dashboard');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Decorative Side */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'primary.main',
          color: 'white',
          padding: 4,
        }}
      >
        <Typography variant="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
          Welcome Back
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          To Our Learning Platform
        </Typography>
        <Box
          component="img"
          src=" https://static.vecteezy.com/system/resources/previews/004/579/709/non_2x/online-learning-concept-teacher-at-chalkboard-video-lesson-distance-study-at-school-illustration-flat-style-vector.jpg"
          alt="Decorative"
          sx={{
            maxWidth: '80%',
            borderRadius: 2,
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          }}
        />
      </Box>

      {/* Login Form Side */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 500,
            p: 4,
            borderRadius: 1,
            boxShadow: '0 4px 6px rgba(1, 1, 1, 0.4)',
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main', justifyContent: 'center' }}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            {error && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}
            <FormControl fullWidth margin="normal">
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'medium' }}>
                Email Address
              </Typography>
              <StyledInputBase
                required
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'medium' }}>
                Password
              </Typography>
              <StyledInputBase
                required
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Sign In'}
            </StyledButton>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Link href="/register" variant="body2" sx={{ textDecoration: 'none', fontWeight: 'medium' }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;