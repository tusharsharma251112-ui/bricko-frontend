import * as React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';

// --- Import ErrorBoundary ---
import ErrorBoundary from './components/ErrorBoundary'; // Adjust path as needed

// --- Import Public Route Components ---
import { AuthLayout } from './layouts/AuthLayout'; // Adjust path if needed
import { publicRoutes } from './routes/PublicRoutes'; // Adjust path if needed

// --- Private Route Components (Placeholders) ---
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f0f2f5' }}>
      <Box sx={{ p: 2, bgcolor: '#1976d2', color: 'white', boxShadow: 2 }}>
        <Typography variant="h6">My App Dashboard</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      <Box sx={{ p: 2, bgcolor: '#333', color: 'white', textAlign: 'center' }}>
        <Typography variant="body2">&copy; 2025 My App</Typography>
      </Box>
    </Box>
  );
};

const DashboardPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dashboard Overview</Typography>
      <Typography variant="body1">Welcome to your private dashboard! This content is only visible to authenticated users.</Typography>
    </Box>
  );
};

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = false; // Replace with actual logic
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
};

export default function App(): React.JSX.Element {
  return (
    <ErrorBoundary
      fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'error.main' }}>
          <Typography variant="h6">Something went wrong. Please try again later.</Typography>
        </Box>
      }
    >
      <Routes>
        {/* --- Public Routes Group --- */}
        <Route path="/auth" element={<AuthLayout imageSrc="/assets/auth-illustration.svg" />}>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <React.Suspense
                  fallback={
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '300px' }}>
                      <CircularProgress />
                    </Box>
                  }
                >
                  <route.component />
                </React.Suspense>
              }
            />
          ))}
          <Route index element={<Navigate to="login" replace />} />
        </Route>

        {/* --- Private Routes Group (commented out, update when ready) --- */}
        {/* 
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route
            path="/dashboard"
            element={
              <React.Suspense
                fallback={
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '300px' }}>
                    <CircularProgress />
                  </Box>
                }
              >
                <AppLayout>
                  <DashboardPage />
                </AppLayout>
              </React.Suspense>
            }
          />
        </Route>
        */}

        {/* --- 404 Not Found Route --- */}
        <Route
          path="*"
          element={
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
              <Typography variant="h4" sx={{ textAlign: 'center', mt: -5 }}>
                404 - Page Not Found
              </Typography>
            </Box>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}
