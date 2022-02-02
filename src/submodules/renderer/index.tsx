import { Container, Box, Typography } from '@mui/material';
import React from 'react';

import './styles.css';

const App: React.FC = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h1" component="h2">Hello.</Typography>
      </Box>
      <Box>
        <Typography>Welcome to Electron App.</Typography>
      </Box>
    </Container>
  );
};

export default App;
