import React, { useState } from 'react';
import {
  Box,
  GlobalStyles,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SideNav } from './shared/Navbar';
import { MainNav } from './shared/SideNav';

interface AppLayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <GlobalStyles
        styles={{
          ':root': {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': 1000,
            '--SideNav-width': `${drawerWidth}px`,
            '--SideNav-zIndex': 1100,
          },
          body: {
            margin: 0,
          },
        }}
      />

      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Sidebar for desktop */}
        {!isMobile && (
          <Box
            component="nav"
            sx={{
              width: 'var(--SideNav-width)',
              minWidth: 'var(--SideNav-width)',
              bgcolor: '#1e293b',
              color: '#fff',
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              zIndex: 'var(--SideNav-zIndex)',
            }}
          >
            <SideNav />
          </Box>
        )}

        {/* Sidebar drawer for mobile */}
        {isMobile && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                bgcolor: '#1e293b',
                color: '#fff',
              },
            }}
          >
            <SideNav />
          </Drawer>
        )}

        {/* Main content area */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            pl: isMobile ? 0 : 'var(--SideNav-width)',
          }}
        >
          {/* Top navbar (fixed) */}
          <Box
            component="header"
            sx={{
              height: 'var(--MainNav-height)',
              px: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              bgcolor: '#ffffff',
              zIndex: 'var(--MainNav-zIndex)',
              position: 'fixed',
              top: 0,
              left: isMobile ? 0 : 'var(--SideNav-width)',
              right: 0,
            }}
          >
            {/* Hamburger for mobile */}
            {isMobile && (
              <IconButton onClick={handleDrawerToggle} sx={{ mr: 0 }}>
                <MenuIcon />
              </IconButton>
            )}
            <MainNav />
          </Box>

          {/* Content area with padding */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              // p: 1,
              height: 'calc(100vh - var(--MainNav-height))',
              pt: 'var(--MainNav-height)',
              overflowY: 'auto',
              bgcolor: 'background.default',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AppLayout;
