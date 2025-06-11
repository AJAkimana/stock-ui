import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from './components/providers/AuthProvider';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route
        path="/admin"
        element={
          <AuthProvider>
            <Layout />
          </AuthProvider>
        }
      >
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
