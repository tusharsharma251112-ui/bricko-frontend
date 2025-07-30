import * as React from 'react';

export interface PrivateRouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

export const privateRoutes: PrivateRouteConfig[] = [
  {
    path: 'dashboard',
    component: React.lazy(() => import('../components/dashboard/superAdminLayout/layout')),
  },
  // {
  //   path: 'settings',
  //   component: React.lazy(() => import('../pages/settings/SettingsPage')),
  // },
  // Add more as needed
];
