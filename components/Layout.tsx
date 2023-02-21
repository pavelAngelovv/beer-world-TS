import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
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
