'use client';

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Divider,
  Tooltip,
  Badge,
  Avatar,
} from '@mui/material';
// import { Bell, CheckCircle } from '@phosphor-icons/react';
import {ReactComponent as Notifications} from '../../../assets/images/notificationIcon.svg';
import {ReactComponent as CheckCircleIcon} from '../../../assets/images/green tick.svg';
// import { List as ListIcon } from '@phosphor-icons/react/dist/ssr/List';
import ListIcon from '@mui/icons-material/List';


// import { layoutConfig } from '../config';
// import { MobileNav } from '../mobile-nav';
// import { NotificationsPopover } from '../notifications-popover';
// import { FolderBreadcrumbs } from '@/app/file/Breadcrumbs';
type NavItem = {
  title: string;
  href: string;
  items?: NavItem[];
};
const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Files',
    href: '/file',
    items: [
      { title: 'My Files', href: '/file/my-files' },
      { title: 'Shared With Me', href: '/file/shared' },
    ],
  },
  {
    title: 'Settings',
    href: '/settings',
  },
];

export function MainNav() {
  const [openNav, setOpenNav] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

const getCurrentSection = () => {
  let sectionTitle = '';
  let subSectionTitle = '';

  for (const item of navItems) {
    if (pathname.startsWith(item.href)) {
      sectionTitle = item.title;
    }
    if (item.items?.length) {
      for (const subItem of item.items) {
        if (pathname.startsWith(subItem.href)) {
          sectionTitle = item.title;
          subSectionTitle = subItem.title;
        }
      }
    }
  }

  return { sectionTitle: sectionTitle || 'Dashboard', subSectionTitle };
};



  const { sectionTitle, subSectionTitle } = getCurrentSection();

  return (
    <>
      <Box
        component="header"
        sx={{
          bgcolor: 'background.main',
          left: 0,
          position: 'sticky',
          pt: { lg: 'var(--Layout-gap)' },
          top: 0,
          width: '100%',
          zIndex: 'var(--MainNav-zIndex)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box display="flex" gap="8px" pl="24px" alignItems="center">
            {/* <IconButton onClick={() => setOpenNav(true)} sx={{ display: { lg: 'none' } }}>
              <ListIcon />
            </IconButton> */}
              <>
                <Typography color="text.primary" fontSize="14px" lineHeight="22px">
                  {sectionTitle}
                </Typography>
                {subSectionTitle && (
                  <>
                    <Typography color="text.secondary">•</Typography>
                    <Typography color="text.secondary" fontSize="14px" lineHeight="22px">
                      {subSectionTitle}
                    </Typography>
                  </>
                )}
              </>
            
          </Box>

          <Box
            sx={{
              borderBottom: '1px solid var(--MainNav-divider)',
              display: 'flex',
              justifyContent: 'flex-end',
              minHeight: 'var(--MainNav-height)',
              px: { xs: 2, lg: 3 },
              py: '3px',
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid',
                borderColor: '#E2E8F0',
                width: '235px',
                padding: '5px',
                borderRadius: '12px',
                cursor: 'pointer',
                background: 'white',
                my: '2px',
              }}
              onClick={() => setPopoverOpen(true)}
            >
              <UserButton />
              <NotificationsButton />
            </Stack>
          </Box>
        </Box>
        {/* <Divider sx={{ borderColor: 'border.secondary' }} /> */}
      </Box>

      {/* <MobileNav items={items} open={openNav} onClose={() => setOpenNav(false)} /> */}
      {/* <NotificationsPopover open={popoverOpen} onClose={() => setPopoverOpen(false)} /> */}
    </>
  );
}

function NotificationsButton() {
  return (
    <Tooltip title="Notifications">
      <Badge
        badgeContent={4}
        color="primary"
        sx={{
          '& .MuiBadge-badge': {
            borderRadius: '5px',
            height: '10px',
            right: '6px',
            width: '10px',
            py: '8px',
            opacity: '0.8',
          },
        }}
      >
        <Notifications  />
      </Badge>
    </Tooltip>
  );
}

function UserButton() {
  return (
    <Box component="button" sx={{ border: 'none', background: 'transparent', cursor: 'pointer', p: 0 }}>
      <Box display="flex" gap={1}>
        <Box position="relative">
          <Avatar sx={{ borderRadius: '8px', width: '40px', height: '40px' }} />
          <Box
  position="absolute"
  bottom="-3px"
  right="0"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid white',
    borderRadius: '50%',
    bgcolor: 'text.blue300', // optional background behind icon
  }}
>
  <CheckCircleIcon width="1rem" height="1rem" />
</Box>

        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start" maxWidth="133px">
          <Typography
            fontSize="12px"
            lineHeight="18.84px"
            color="black"
            sx={{
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textAlign: 'left',
            }}
          >
            User Name
          </Typography>
          <Typography
            fontSize="12px"
            lineHeight="18.84px"
            color="text.secondary"
            sx={{
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textAlign: 'left',
            }}
          >
            user@example.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
