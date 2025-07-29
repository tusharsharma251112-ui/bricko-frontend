

import * as React from 'react';

// Define an interface for your route configuration objects for type safety
interface PrivateRouteConfig {
  path: string;
  // Component type is now React.LazyExoticComponent for lazy loading
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  imageSrc?: string; // Optional: if a specific image is needed for this route
}

// Array of public route configurations
export const privateRoute: PrivateRouteConfig[] = [
//   {
//     path: 'login', // Relative path to the parent /auth route
//     // Use React.lazy for dynamic import
//     component: React.lazy(() => import('../pages/auth/LoginPage')),
//     imageSrc: '/assets/login-illustration.svg', // Specific image for login
//   },
//   {
//     path: 'register',
//     component: React.lazy(() => import('../pages/auth/RegisterPage')),
//     imageSrc: '/assets/register-illustration.svg', // Specific image for register
//   },
//   {
//     path: 'forgot-password',
//     component: React.lazy(() => import('../pages/auth/ForgotPasswordPage')),
//     imageSrc: '/assets/forgot-password-illustration.svg', // Specific image for forgot password
//   },
  // Add more public routes here as needed
  // {
  //   path: 'reset-password',
  //   component: React.lazy(() => import('../pages/auth/ResetPasswordPage')),
  //   imageSrc: '/assets/reset-password-illustration.svg',
  // },
];
