import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from '@mui/material';

import { Copyright } from '../components/Copyright';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          {/* Add login email, and password form */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mb: 2,
            }}
          >
            <Box
              component="input"
              type="email"
              placeholder="Email Address"
              required
              sx={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                '&:focus': {
                  borderColor: '#3f51b5',
                  outline: 'none',
                },
              }}
            />
            <Box
              component="input"
              type="password"
              placeholder="Password"
              required
              sx={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                '&:focus': {
                  borderColor: '#3f51b5',
                  outline: 'none',
                },
              }}
            />
          </Box>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {/* <Grid container>
              <Grid item xs>
                <Link href="j" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="n" variant="body2">
                  Dont have an account? Sign Up
                </Link>
              </Grid>
            </Grid> */}
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;
