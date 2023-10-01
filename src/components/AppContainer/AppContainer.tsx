import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 2,
        boxSizing: 'border-box',
        backgroundColor: '#b1b1b13b',
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 2,
          p: 2,
        }}
      >
        {children}
      </Container>
      </Box>
  );
}