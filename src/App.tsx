import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from './theme/theme';

import { AppRoutes } from './routes';
import { store } from './redux/store';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </ThemeProvider>
);

export default App;
