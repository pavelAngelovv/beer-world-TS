import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <Navbar />
    <Container maxWidth="md" sx={{ pt: 4 }}>
      {children}
    </Container>
  </Box>
);

export default Layout;
