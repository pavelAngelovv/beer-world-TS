import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <Container sx={{ ml: { lg: 30, md: 0 }, pt: 4 }}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  </Box>
);
