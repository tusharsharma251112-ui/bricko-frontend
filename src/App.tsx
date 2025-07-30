import * as React from 'react';
import './App.css';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';

// --- Import ErrorBoundary ---
import ErrorBoundary from './components/ErrorBoundary';

// --- Route Config Imports ---
import { AuthLayout } from './layouts/AuthLayout';
import { publicRoutes } from './routes/PublicRoutes';
import { privateRoutes } from './routes/PrivateRoute'; // ✅ Corrected import name
import AppLayout from './components/dashboard/AppLayout';


// --- PrivateRoute Wrapper ---
const PrivateRoute: React.FC = () => {
  const isAuthenticated = true; // 🔐 Replace with real auth logic
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
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
        {/* --- Public Routes --- */}
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

        {/* --- Private Routes --- */}
        <Route element={<PrivateRoute />}>
          <Route element={<AppLayout><Outlet /></AppLayout>}>
            {privateRoutes.map((route) => (
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
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        {/* --- Catch-All Route --- */}
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
