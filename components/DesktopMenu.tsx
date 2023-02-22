import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import SportsBarTwoToneIcon from '@mui/icons-material/SportsBarTwoTone';

const drawerWidth = 240;

export const DesktopMenu: React.FC = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar
      position="fixed"
      sx={{
        color: 'white',
        backgroundColor: 'white',
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <SportsBarTwoToneIcon sx={{ color: 'black', mr: 0.5 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/beers"
          sx={{ color: 'black' }}
        >
          Beer World
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem key="my-account" disablePadding>
          <ListItemButton href="/account">
            <ListItemIcon>
              <AccountBoxTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="My Account" />
          </ListItemButton>
        </ListItem>
        <ListItem key="beers" disablePadding>
          <ListItemButton href="/beers">
            <ListItemIcon>
              <SportsBarTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Beers" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  </Box>
);
