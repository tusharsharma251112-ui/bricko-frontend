import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Logo } from '../../../components/Logo';
import { isNavItemActive } from '../navItem';
import { icons } from '../shared/navIcons';
import { navColorStyles } from '../superAdminLayout/style';
import { WorkspacesSwitch } from './WorkSpaceSwitch';

type NavItemBase = {
  key: string;
  title: string;
  icon?: keyof typeof icons;
  label?: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  matcher?: {
    type: 'startsWith' | 'equals';
    href: string;
  };
};

type NavItem = NavItemBase & {
  items?: NavItem[];
};

interface SideNavSection {
  key: string;
  title?: string;
  items: NavItem[];
}

interface SideNavProps {
  color?: 'blend_in' | 'discrete' | 'evident';
  items?: SideNavSection[]; // optional override
}

export function SideNav({ color = 'evident' }: SideNavProps): JSX.Element {
  const location = useLocation();
  const pathname = location.pathname;

  const colorScheme = 'light';
  const styles = navColorStyles[colorScheme][color];

  const showUserManagement = true; // Replace with real logic later

  const navItems: SideNavSection[] = [
    {
      key: 'main',
      title: 'Platform Management',
      items: [
         {
        key: 'user-management',
        title: 'User Management',
        href: '/users',
        icon: 'users',
      } 
//         {
//           key: 'dashboard',
//           title: 'Dashboard',
//           href: '/dashboard',
//           icon: 'dashboard',
//         },
//        ...(showUserManagement
//   ? [
//       {
//         key: 'user-management',
//         title: 'User Management',
//         href: '/users',
//         icon: 'users',
//       } as const,
    ]


    },
  ];

  return (
    <Box
      className="side-bar-bg-color"
      sx={{
        ...styles,
        borderRight: 'var(--SideNav-border)',
        color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        position: 'fixed',
        top: 0,
        width: 'var(--SideNav-width)',
        zIndex: 'var(--SideNav-zIndex)',
      }}
    >
      <Stack spacing={2} sx={{ p: 2 }}>
        <Box component={Link} sx={{ display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' }} to="/">
          <Logo color="light" height={32} width={122} />
        </Box>
        <WorkspacesSwitch />
      </Stack>

      <Box
        component="nav"
        sx={{
          flex: '1 1 auto',
          overflowY: 'auto',
          p: 2,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {navItems.map((section) => (
          <Stack component="ul" key={section.key} spacing={2} sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {section.title && (
              <Typography color="#fff" sx={{ opacity: 0.7 }} fontSize={12}>
                {section.title}
              </Typography>
            )}
            {section.items.map((item) => (
              <NavItem key={item.key} item={item} pathname={pathname} depth={0} />
            ))}
          </Stack>
        ))}
      </Box>
    </Box>
  );
}

interface NavItemProps {
  item: NavItem;
  pathname: string;
  depth: number;
}

function NavItem({ item, pathname, depth }: NavItemProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const active = isNavItemActive({ ...item, pathname });
  const Icon = item.icon ? icons[item.icon] : null;
  const ExpandIcon = open ? ExpandMoreIcon : ChevronRightIcon;
  const isBranch = !!item.items?.length;

  const handleToggle = () => setOpen((prev) => !prev);

  const baseStyles = {
    alignItems: 'center',
    borderRadius: 1,
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    gap: 1,
    p: '6px 16px',
    position: 'relative',
    whiteSpace: 'nowrap',
    ...(item.disabled && {
      opacity: 0.5,
      cursor: 'not-allowed',
    }),
    ...(active && {
      bgcolor: 'background.sidebarActiveItem',
      color: 'text.sidebarActiveItem',
      borderRadius: '8px',
    }),
    '&:hover': {
      bgcolor: 'rgba(255,255,255,0.08)',
    },
  };

  const content = (
    <>
      {Icon && <Box component="span">{Icon}</Box>}
      <Typography component="span" sx={{ fontSize: 15, flex: 1 }}>
        {item.title}
      </Typography>
      {item.label && <Chip label={item.label} size="small" />}
      {item.external && <OpenInNewIcon fontSize="small" />}
      {isBranch && <ExpandIcon fontSize="small" />}
    </>
  );

  if (isBranch) {
    return (
      <Box component="li" sx={{ userSelect: 'none', listStyle: 'none' }}>
        <Box
          onClick={handleToggle}
          role="button"
          tabIndex={0}
          sx={baseStyles}
        >
          {content}
        </Box>
        {open && (
          <Box sx={{ pl: 3 }}>
            {item.items?.map((child) => (
              <NavItem key={child.key} item={child} pathname={pathname} depth={depth + 1} />
            ))}
          </Box>
        )}
      </Box>
    );
  }

  if (item.external && item.href) {
    return (
      <Box component="li" sx={{ userSelect: 'none', listStyle: 'none' }}>
        <Box
          component="a"
          href={item.href}
          target="_blank"
          rel="noreferrer"
          sx={baseStyles}
        >
          {content}
        </Box>
      </Box>
    );
  }

  if (item.href) {
    return (
      <Box component="li" sx={{ userSelect: 'none', listStyle: 'none' }}>
        <Box
          component={Link}
          to={item.href}
          sx={baseStyles}
        >
          {content}
        </Box>
      </Box>
    );
  }

  return (
    <Box component="li" sx={{ userSelect: 'none', listStyle: 'none' }}>
      <Box sx={baseStyles}>{content}</Box>
    </Box>
  );
}
