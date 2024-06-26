import React from 'react';
import Box from '@mui/material/Box';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => (
  <Box>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'none' } }}>
      <MobileMenu />
    </Box>

    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'none', lg: 'flex' },
        paddingRight: '30px',
        justifyContent: 'right',
      }}
    >
      <DesktopMenu />
    </Box>
  </Box>
);
