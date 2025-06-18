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

import { Copyright } from '../../components/Copyright';
import { useState } from 'react';
import { AForm } from '../../components/AForm';
import { loginSchema } from './schema';

const initialStates = {
  email: '',
  password: '',
};
const redirectToDashboard = () => {
  setTimeout(() => {
    window.location.replace('/');
  }, 5000);
};
const Login = () => {
  const [loginInfo, setLoginInfo] = useState(initialStates);
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
          <AForm
            fields={loginSchema()}
            states={loginInfo}
            setStates={setLoginInfo}
          />
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
