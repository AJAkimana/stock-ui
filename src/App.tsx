import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Stock from './pages/Stock';
import Sales from './pages/Sales';
import Debts from './pages/Debts';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/debts" element={<Debts />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
