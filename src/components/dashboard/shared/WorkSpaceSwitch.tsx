

import * as React from 'react';
// import { ENV } from '@/utils/env-variables';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { BuildingOffice } from '@phosphor-icons/react';
import BusinessIcon from '@mui/icons-material/Business';
// import { usePopover } from '@/hooks/use-popover';
// import { WorkspacesPopover } from './workspaces-popover';

interface WorkspacesSwitchProps {
  setting?: boolean;
}

export function WorkspacesSwitch({ setting = false }: WorkspacesSwitchProps): JSX.Element {
//   const popover = usePopover();
  const theme = useTheme();

 
  const avatarSrc = undefined;

  return (
      <React.Fragment>
        <Stack
          direction="row"
        //   onClick={popover.handleOpen}
        //   ref={popover.anchorRef}
          spacing={2}
          sx={{
            alignItems: 'center',
            border: '1px solid var(--secondary-main)',
            borderRadius: '10px',
            p: '8px 8px',
            // backgroundColor: 'var(--secondary-main)',
            cursor: 'pointer',
          }}
        >
          <Avatar
            src={avatarSrc}
            sx={{
              '--Avatar-size': '34px',
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {!avatarSrc && <BusinessIcon />}
          </Avatar>

          <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
            <Typography className='fontw-700 f-12' sx={{ color: '#ffffff' }}>
              {/* {organizationName} */}
              Heelo
            </Typography>
            <Typography className='f-8 fontw-400' sx={{ color: 'var(--gray-mid)' }}>
              {/* {organizationName} */}
              Heelo
            </Typography>
          </Box>

          <ExpandMoreIcon
            sx={{ color: 'white'}}
            fontSize="small"
          />
        </Stack>

        {/* <WorkspacesPopover
          anchorEl={popover.anchorRef.current}
          onChange={popover.handleClose}
          onClose={popover.handleClose}
          open={popover.open}
          setting={setting}
        /> */}
      </React.Fragment>
  );
}
